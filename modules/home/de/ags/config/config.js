const entry = `${App.configDir}/main.ts`;
const style = `${App.configDir}/style.scss`;
const outdir = '/tmp/ags/';


try {
  await Utils.execAsync([
    'bun', 'build', entry,
    '--outdir', outdir,
    '--external', 'resource://*',
    '--external', 'gi://*',
  ]);
  await import(`file://${outdir}/js/main.js`);
  Utils.exec(`sass ${style} ${outdir}/css/style.css`)
  App.applyCss(`${outdir}/css/style.css`)
  console.log("Loaded config");
} catch (error) {
  console.error(error);
};
