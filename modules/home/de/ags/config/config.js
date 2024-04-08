const entry = App.configDir + '/main.ts';
const outdir = '/tmp/ags/js';

try {
  await Utils.execAsync([
    'bun', 'build', entry,
    '--outdir', outdir,
    '--external', 'resource://*',
    '--external', 'gi://*',
  ]);
  await import(`file://${outdir}/main.js`);
  console.log("Loaded config");
} catch (error) {
  console.error(error);
};
