const { dasherize } = require("inflection");

const config = {
    root: "packages",
    org: "chakra-svelte",
    author: "elcharitas <jonathanirhodia@gmail.com>",
};

/**
 * Gets out the package name
 *
 * @param {string} name
 * @returns
 */
const pkg = (name) => `${config.org}/${dasherize(name)}`;

module.exports = {
    templates: `${__dirname}/templates`,
    helpers: {
        /**
         * Reads a configuration value from the config object.
         *
         * @param {string} key
         * @param {string} def
         * @returns
         */
        config: (key, def) => (def ? def : config[key]),

        /**
         * Change case of strings to kebab case
         *
         * @param {string} str
         * @returns kebab case string
         */
        dasherize: (str) => dasherize(str),

        /**
         * Returns the package name, eg: chakra-svelte/component
         * @param {string} name
         * @returns
         */
        package: (name) => `@${pkg(name)}`,

        /**
         * Returns the package dir, eg: packages/chakra-svelte/component
         * @param {string} name
         * @returns
         */
        dir: (name) => `packages/${dasherize(name)}`,
    },
};
