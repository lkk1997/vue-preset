module.exports = (api, options, rootOptions) => {
    if (options.preset === 'v2') {
      api.extendPackage({
        dependencies: {
            'view-design': '^4.7.0',
        }
      });
    } else {
      api.extendPackage({
        dependencies: {
            'view-ui-plus': '^1.3.1'
        }
      });
    }
    if (options.preset === 'v2') {
      api.render('../ui/view-design');
    } else {
      api.render('../ui/view-design-v3');
    }
    api.injectImports('src/plugins/index.js', `import './view.js'`);
    api.onCreateComplete(() => {});
  };
  