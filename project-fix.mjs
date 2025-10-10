import { execSync } from "node:child_process"
const run = (cmd) => execSync(cmd, { stdio: "inherit", env: process.env })

try {
  run("rm -rf node_modules package-lock.json .next")
} catch {}
run("npm install --legacy-peer-deps")
run("npm ls react || true")
run("npm ls react-dom || true")
console.log("\n✔ Fix completed. Run: npm run dev\n")


