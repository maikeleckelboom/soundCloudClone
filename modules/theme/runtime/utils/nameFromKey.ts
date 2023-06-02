import { camelCase } from "scule";

/**
 * Converts a camelCase or pascalCase string to human-readable form.
 *
 * @param {string} str The string to convert.
 * @returns {string} The humanized string.
 */
export const nameFromKey = (str: string) =>
  camelCase(str)
    .replace(/([A-Z]|\d+)/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
