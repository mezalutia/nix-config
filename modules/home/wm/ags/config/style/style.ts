async function resetCss() {
  try {
    const fd = await Utils.execAsync(`fd -E variables.scss ".scss" ${App.configDir}`); 
    const files = fd.split(/\s+/).map(f => `@import '${f}';`);
    const scss = [`@import '${App.configDir}/style/variables.scss';`, ...files].join("\n");
    const css = await Utils.execAsync(['bash', '-c', `echo "${scss}" | sass --scss --stdin`]);
    
    App.applyCss(css, true);
  } catch (error) {
    console.error(error);
  };
}; 

await resetCss();
