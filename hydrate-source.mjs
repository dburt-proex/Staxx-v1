import fs from "node:fs"
import path from "node:path"
import zlib from "node:zlib"

const bundlePath = path.resolve("foundry-source-bundle.json.gz.b64")
if (!fs.existsSync(bundlePath)) {
  throw new Error(`Missing source bundle: ${bundlePath}`)
}

const encoded = fs.readFileSync(bundlePath, "utf8").trim()
const decoded = Buffer.from(encoded, "base64")
const bundle = JSON.parse(zlib.gunzipSync(decoded).toString("utf8"))

if (bundle.format !== "foundry-source-bundle-v1") {
  throw new Error(`Unsupported bundle format: ${bundle.format}`)
}

for (const [relativePath, content] of Object.entries(bundle.files)) {
  const target = path.resolve(relativePath)
  if (!target.startsWith(process.cwd() + path.sep)) {
    throw new Error(`Unsafe path in bundle: ${relativePath}`)
  }
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.writeFileSync(target, content, "utf8")
}

console.log(`Hydrated ${Object.keys(bundle.files).length} source files.`)
