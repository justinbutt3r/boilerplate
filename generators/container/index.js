const componentExists = require('../componentExists');

module.exports = {
    description: 'Add a container component',
    prompts: [{
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
        name: 'wantHeaders',
        default: false,
        message: 'Do you want headers?',
    }, {
        type: 'confirm',
        name: 'wantStyling',
        default: true,
        message: 'Do you want styling',
    }, {
        type: 'confirm',
        name: 'wantGraph',
        default: true,
        message: 'Will this component use graphql queries',
    }, {
        type: 'confirm',
        name: 'wantRouting',
        default: true,
        message: 'Will this component have rendered routes',
    },],


    actions: (data) => {
        const actions = [
            //Component
            {
                type: 'add',
                path: '../src/containers/{{properCase name}}/{{properCase name }}.js',
                templateFile: './container/templates/component.js.hbs',
                abortOnFail: true,
            },
            //test
            {
                type: 'add',
                path: '../src/containers/{{properCase name}}/{{properCase name }}.test.js',
                templateFile: './container/templates/test.js.hbs',
                abortOnFail: true,
            },
        ]

        //styling
        if(data.wantStyling){
            actions.push({
                type: 'add',
                path: '../src/containers/{{properCase name}}/{{properCase name }}.scss',
                templateFile: './container/templates/styles.scss.hbs',
                abortOnFail: true,
            })
        }

        //Graph
        if(data.wantGraph){
            actions.push({
                type: 'add',
                path: '../src/containers/{{properCase name}}/{{properCase name }}Queries.js',
                templateFile: './container/templates/graph.js.hbs',
                abortOnFail: true,
            })
        }
        
        return actions;
    }
}