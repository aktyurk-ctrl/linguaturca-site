import { execSync } from "node:child_process"
const run = (cmd) => execSync(cmd, { stdio: "inherit", env: process.env })

run("npm ci --include=dev")
run("npm ls react react-dom eslint")
console.log("\n✔ Fix completed. Run: npm run dev\n")


