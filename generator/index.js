module.exports = (api, options, rootOptions) => {
     // 命令
    api.extendPackage({
        scripts: {
            build: 'node build/index.js',
            serve: 'vue-cli-service serve',
            lint: 'vue-cli-service lint',
        },
        'scripts-info': {
            serve: '运行开发服务器',
            build: '生产环境执行构建',
        }
    });
    api.extendPackage({
        dependencies:{
            'vue-cli-plugin-dll':'~1.1.12',
            'vue-cli-plugin-axios': '0.0.4',
            'lrz': '^4.9.41',
            "axios": "^0.18.0",
        }
    })


    if(options['css-preprocessor'] === 'less'){
        api.extendPackage({
            devDependencies:{
                'less': '^4.1.2',
                'less-loader': '^10.2.0'
            }
        })
    }else if(options['css-preprocessor'] === 'scss'){
        api.extendPackage({
            dependencies:{
                'node-sass': '^7.0.1',
            },
            devDependencies: {
                "sass-loader": "^13.0.2",
                "style-loader": "^3.3.1"
            }
        })
    }

    if (options.language === 'ts') {
        api.extendPackage({
          devDependencies: {
            '@typescript-eslint/eslint-plugin': '^4.28.0',
            '@typescript-eslint/parser': '^4.28.0',
            // '@vue/cli-plugin-pwa': '~4.5.0',
            '@vue/cli-plugin-typescript': '~4.5.0',
            '@vue/eslint-config-typescript': '^5.0.2',
            typescript: '4.3.5'
          }
        });
    }

    if(options.preset === 'v2'){
        api.extendPackage({
            dependencies:{
                vue: '^2.6.14',
                'vuex': '^3.4.0',
            }
        })
    }else if(options.preset === 'v3'){
        api.extendPackage({
            dependencies:{
                vue:'^3.2.31',
                "vuex": "^4.0.0"
            }
        })
    }

    api.render((files) => {
        Object.keys(files)
          .filter((path) => path.startsWith('src/') || path.startsWith('plugins/'))
          .forEach((path) => delete files[path]);
    });

    if (options['ui-framework'] === 'element-ui') {
        require('./element.js')(api, options);
      } else if (options['ui-framework'] === 'ant') {
        require('./ant.js')(api, options);
      } else if (options['ui-framework'] === 'view') {
        require('./view.js')(api, options);
      }
    if(options.preset === 'v2'){
        if(options.language === 'js'){
            api.render('./template-vue2-js')
            if(options['css-preprocessor'] === 'scss'){
                api.render('./sass-v2-js')
            }else{
                api.render('./less-v2-js')
            }
        }else{
            api.render('./template-vue2-ts')
            if(options['css-preprocessor'] === 'scss'){
                api.render('./sass-v2-ts')
            }else{
                api.render('./less-v2-ts')
            }
        }
    }else{
        if(options.language === 'js'){
            api.render('./template-vue3-js')
            if(options['css-preprocessor'] === 'scss'){
                api.render('./sass-v3-js')
            }else{
                api.render('./less-v3-js')
            }
        }else{
            api.render('./template-vue3-ts')
            if(options['css-preprocessor'] === 'scss'){
                api.render('./sass-v3-ts')
            }else{
                api.render('./less-v3-ts')
            }
        }
    }

    api.onCreateComplete(() => {});
}