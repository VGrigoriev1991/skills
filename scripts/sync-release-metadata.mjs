import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, value) {
  writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

const packageJsonPath = resolve(rootDir, 'package.json');
const pluginManifestPath = resolve(rootDir, '.claude-plugin', 'plugin.json');
const marketplaceManifestPath = resolve(rootDir, '.claude-plugin', 'marketplace.json');

const packageJson = readJson(packageJsonPath);
const pluginManifest = readJson(pluginManifestPath);
const marketplaceManifest = readJson(marketplaceManifestPath);

const version = packageJson.version;

pluginManifest.version = version;

if (Array.isArray(marketplaceManifest.plugins) && marketplaceManifest.plugins.length > 0) {
  marketplaceManifest.plugins = marketplaceManifest.plugins.map((plugin) => ({
    ...plugin,
    version,
  }));
}

marketplaceManifest.version = version;

writeJson(pluginManifestPath, pluginManifest);
writeJson(marketplaceManifestPath, marketplaceManifest);

console.log(`Synced Claude Code release metadata to v${version}.`);
