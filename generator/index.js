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
            'vuex': '^3.4.0',
            'lrz': '^4.9.41',
        }
    })

    // if(options['package-manager'] === 'yarn'){
    //     api.extendPackage({})
    // }else{
    //     api.extendPackage({})
    // }


    if(options['css-preprocessor'] === 'less'){
        api.extendPackage({
            devDependencies:{
                'less': '^4.1.2',
                'less-loader': '^10.2.0'
            }
        })
    }else if(options['css-preprocessor'] === 'sass'){
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
          dependencies: {
            'register-service-worker': '1.7.2'
          },
          devDependencies: {
            '@types/node': '^10.14.17',
            '@types/webpack-env': '^1.14.0',
            '@typescript-eslint/eslint-plugin': '^4.28.0',
            '@typescript-eslint/parser': '^4.28.0',
            '@vue/cli-plugin-pwa': '~4.5.0',
            '@vue/cli-plugin-typescript': '~4.5.0',
            '@vue/eslint-config-typescript': '^5.0.2',
            typescript: '4.3.5'
          }
        });
      }

    if(options.preset === 'v2'){
        api.extendPackage({
            dependencies:{
                vue: '^2.6.14'
            }
        })
    }else{
        api.extendPackage({
            dependencies:{
                vue:'^3.2.31'
            }
        })
    }

    if (options['ui-framework'] === 'element-ui') {
        require('./element.js')(api, options);
      } else if (options['ui-framework'] === 'ant') {
        require('./ant.js')(api, options);
      } else if (options['ui-framework'] === 'view') {
        require('./view.js')(api, options);
      }
}