const { dasherize } = require("inflection");

const config = {
    root: "packages",
    org: "chakra-svelte",
    author: "elcharitas <jonathanirhodia@gmail.com>",
};

module.exports = {
    templates: `${__dirname}/templates`,
    helpers: {
        /**
         * Reads a configuration value from the config object.
         *
         * @param {string} key
         * @returns
         */
        config: (key) => config[key],

        /**
         * Change case of strings to kebab case
         *
         * @param {string} str
         * @returns kebab case string
         */
        dasherize: (str) => dasherize(str),

        /**
         * Returns the package name, eg: @chakra-svelte/component
         * @param {string} name
         * @returns
         */
        package: (name) => `${config.org}/${dasherize(name)}`,
    },
};
