module.exports = [
    // {
    //     name: 'package-manager',
    //     type: 'list',
    //     message: 'Choose Package Manager(default:npm)',
    //     choices: [
    //         {
    //             name: 'npm',
    //             value: 'npm'
    //         },
    //         {
    //             name: 'yarn',
    //             value: 'yarn'
    //         }
    //     ],
    //     default: 'npm'
    // },
    {
        name: 'css-preprocessor',
        type: 'list',
        message: 'Choose CSS Preprocessor(default:scss)',
        choices: [
            {
                name: 'Scss',
                value: 'scss'
            },
            {
                name: 'Less',
                value: 'less'
            }
        ],
        default: 'sass'
    },
    {
        name: 'language',
        type: 'list',
        message: 'Choose whether your develop language is a JS or TS(default:JS)',
        choices: [
            {
                name: 'JS',
                value: 'js'
            },
            {
                name: 'TS',
                value: 'ts'
            }
        ],
        default: 'js'
    },
    {
        name: 'preset',
        type: 'list',
        message: 'Please pick a preset',
        choices: [
            {
                name: 'Vue 2',
                value: 'v2'
              },
              {
                name: 'Vue 3',
                value: 'v3'
              },
        ],
        default: 'v2'
    },
    {
        name: 'ui-framework',
        type: 'list',
        message: 'Choice UI Framework(default:none)',
        choices: [
            {
                name: 'Element UI',
                value: 'element-ui'
              },
              {
                name: 'ant-design-vue',
                value: 'ant'
              },
              {
                name: 'none',
                value: 'none'
              },
              {
                name: 'view-design',
                value: 'view'
              }
        ],
        default: 'none'
    }
]