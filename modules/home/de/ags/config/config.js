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
  await import(`file://${outdir}/main.js`);
  Utils.exec(`sass ${style} ${outdir}/style.css`);
  App.applyCss(`${outdir}/style.css`);
} catch (error) {
  console.error(error);
};
