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
const pkg = (name, sep) => `${config.org}${sep}${dasherize(name)}`;

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
         * Returns the package name, eg: chakra-svelte/component
         * @param {string} name
         * @returns
         */
        package: (name, sep = "/") =>
            `${sep === "/" ? "@" : ""}${pkg(name, sep)}`,

        /**
         * Returns the package dir, eg: packages/chakra-svelte/component
         * @param {string} name
         * @returns
         */
        dir: (name) => `packages/${dasherize(name)}`,
    },
};
