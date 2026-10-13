"""Serve the isolated design package and existing public assets on localhost only."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[2]
ALLOWED = [ROOT / 'docs/design-concept', ROOT / 'public']

class PreviewHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def redirect_design_preview(self):
        if urlsplit(self.path).path not in ('/design-preview', '/design-preview/'):
            return False
        self.send_response(302)
        self.send_header('Location', '/docs/design-concept/living-school/index.html')
        self.end_headers()
        return True

    def do_GET(self):
        if self.redirect_design_preview():
            return
        if urlsplit(self.path).path == '/':
            self.send_response(302)
            self.send_header('Location', '/docs/design-concept/prototype/index.html')
            self.end_headers()
            return
        target = (ROOT / unquote(urlsplit(self.path).path).lstrip('/')).resolve()
        if not any(target.is_relative_to(folder) for folder in ALLOWED):
            self.send_error(404)
            return
        super().do_GET()

    def do_HEAD(self):
        if self.redirect_design_preview():
            return
        target = (ROOT / unquote(urlsplit(self.path).path).lstrip('/')).resolve()
        if not any(target.is_relative_to(folder) for folder in ALLOWED):
            self.send_error(404)
            return
        super().do_HEAD()

if __name__ == '__main__':
    print('Preview: http://localhost:8765/design-preview', flush=True)
    ThreadingHTTPServer(('127.0.0.1', 8765), PreviewHandler).serve_forever()
