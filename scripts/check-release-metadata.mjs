import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf8'));
}

export function readVersionMetadata() {
  const packageJson = readJson(resolve(rootDir, 'package.json'));
  const pluginManifest = readJson(resolve(rootDir, '.claude-plugin', 'plugin.json'));
  const marketplaceManifest = readJson(resolve(rootDir, '.claude-plugin', 'marketplace.json'));

  return {
    package: { version: packageJson.version },
    plugin: {
      version: pluginManifest.version,
      skills: pluginManifest.skills,
    },
    marketplace: {
      version: marketplaceManifest.version,
      plugins: marketplaceManifest.plugins,
    },
  };
}

export function assertConsistentVersions(metadata = readVersionMetadata()) {
  const expectedVersion = metadata.package.version;
  const pluginVersion = metadata.plugin.version;
  const marketplaceVersion = metadata.marketplace.version;
  const pluginEntryVersion = metadata.marketplace.plugins?.[0]?.version;

  const mismatches = [];
  if (pluginVersion !== expectedVersion) {
    mismatches.push(`plugin.json version (${pluginVersion}) does not match package.json (${expectedVersion})`);
  }
  if (marketplaceVersion !== expectedVersion) {
    mismatches.push(`marketplace.json version (${marketplaceVersion}) does not match package.json (${expectedVersion})`);
  }
  if (pluginEntryVersion !== expectedVersion) {
    mismatches.push(`marketplace plugin entry version (${pluginEntryVersion}) does not match package.json (${expectedVersion})`);
  }

  if (mismatches.length > 0) {
    throw new Error(`Release metadata is inconsistent. ${mismatches.join('; ')}`);
  }

  return metadata;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const metadata = readVersionMetadata();
  assertConsistentVersions(metadata);
  console.log(`Release metadata is consistent at v${metadata.package.version}.`);
}
