/**
 * @module lib/initialize/helpers
 * @since 1.0.0
 */

/**
 * Helpers method for initialize class
 * @type {Object}
 */
const helpers = {
    /**
     * Capitalize the first letter of a provided string
     * @param  {string} string a string that we want to capitalize it's first letter.
     * @return {string} the final result of a string with capitalized letter.
     *
     * @example
     * helpers.capitalize('some string');
     * // Some string
     */
    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

module.exports = helpers;