import test from 'node:test';
import assert from 'node:assert/strict';

import {
  readVersionMetadata,
  assertConsistentVersions,
} from '../scripts/check-release-metadata.mjs';

test('release metadata stays in sync with the authoritative package version', () => {
  const metadata = readVersionMetadata();

  assert.equal(metadata.package.version, '1.0.0');
  assert.equal(metadata.plugin.version, '1.0.0');
  assert.equal(metadata.marketplace.version, '1.0.0');
  assert.equal(metadata.marketplace.plugins[0].version, '1.0.0');

  assert.doesNotThrow(() => assertConsistentVersions(metadata));
});

test('version drift is reported as a failure', () => {
  const metadata = {
    package: { version: '1.0.0' },
    plugin: { version: '1.0.1' },
    marketplace: {
      version: '1.0.0',
      plugins: [{ version: '1.0.0' }],
    },
  };

  assert.throws(() => assertConsistentVersions(metadata), /Release metadata is inconsistent/);
});
