const componentExists = require('../componentExists');

module.exports = {
    description: 'Add a reusable component',
    prompts: [{
        type: 'list',
        name: 'type',
        message: 'Select the type of component',
        default: 'Stateless Function',
        choices: [
            { name: "Stateless Function", value: "Stateless Function" },
            { name: "ES6 Class (Pure)", value: "ES6 Class (Pure)" },
            { name: "ES6 Class", value: "ES6 Class" },
        ],
    }, {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Button',
        validate: (value) => {
            if ((/.+/).test(value)) {
                return componentExists(value) ? 'A component with this name already exists' : true;
            }

            return 'The name is required';
        },
    }, {
        type: 'confirm',
        name: 'wantStyling',
        default: true,
        message: 'Do you want styling',
    }],
    actions: (data) => {
        let componentTemplate;

        switch (data.type) {
            case 'ES6 Class': {
              componentTemplate = './component/templates/component.js.hbs';
              break;
            }
            case 'ES6 Class (Pure)': {
              componentTemplate = './component/templates/pure.js.hbs';
              break;
            }
            case 'Stateless Function': {
              componentTemplate = './component/templates/stateless.js.hbs';
              break;
            }
            default: {
                componentTemplate = './component/templates/component.js.hbs';
            }
          }

        const actions = [
            //create component
            {
                type: 'add',
                path: '../src/components/{{properCase name}}/{{properCase name }}.js',
                templateFile: componentTemplate,
                abortOnFail: true,
              },
            //create test
            {
                type: 'add',
                path: '../src/components/{{properCase name}}/{{properCase name }}.test.js',
                templateFile: './component/templates/test.js.hbs',
                abortOnFail: true,
              }
        ];

        if(data.wantStyling){
            actions.push({
                type: 'add',
                path: '../src/components/{{properCase name}}/{{properCase name }}.scss',
                templateFile: './component/templates/styles.scss.hbs',
                abortOnFail: true,
            })
        }

        return actions;
    }
}

