/**
 * Converts a camelCase or pascalCase string to human-readable form.
 *
 * @param {string} str The string to convert.
 * @returns {string} The humanized string.
 */
const tokenize = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase()
}

/**
 * Converts a hexadecimal color code to an RGB color value.
 *
 * @param hex - A string representing a hexadecimal color code (e.g. "#ff0000").
 * @param separator - A string to separate the RGB color values (e.g. "," or " ").
 * @returns A string representing the corresponding RGB color value (e.g. "255, 0, 0").
 */
const rgbFromHex = (hex: string, separator: string | false = ' ') => {
  // Use a regular expression to match two hexadecimal digits at a time
  // and convert each pair to a decimal integer using parseInt with radix 16
  const [r, g, b] = hex.match(/\w\w/g)?.map(x => parseInt(x, 16)) ?? [0, 0, 0]
  // Return the RGB color value as a comma-separated string
  return separator === false ? `${r} ${g} ${b}` : `${r}${separator}${g}${separator}${b}`
}

/**
 * Generates a contrast token from a given key.
 *
 * @param {string} token The key to generate the contrast token from.
 * @param {Object} options An optional object that contains the prefix and suffix for the token.
 * @param {string} options.prefix The prefix to add to the token (default: 'md-sys-color-').
 * @param {string} options.suffix The suffix to add to the token (default: '').
 * @returns {string} The generated contrast token.
 */
function contrastToken(
  token: string,
  options: {
    prefix?: string;
    suffix?: string;
  } = {}
) {
  const { prefix = '', suffix = '' } = options
  const name = token.replace(/([A-Z]|\d+)/g, ' $1').toLowerCase().split(' ')
  // Check if the token specifies a text color
  const isTextColor = name.includes('on')
  if (isTextColor) {
    // Handle text-color
    name.splice(name.indexOf('on'), 1)
    return `${prefix}${name.join('-')}${suffix}`
  }
  // Check if the token specifies an inverse color
  const isInverseColor = name.includes('inverse')
  if (isInverseColor) {
    name.splice(name.indexOf('inverse'), 1)
    return `${prefix}${name.join('-')}${suffix}`
  }
  // If the token doesn't specify a text color
  // or an inverse color, use the default prefix
  return `${prefix}on-${name.join('-')}${suffix}`
}


export {
  tokenize,
  rgbFromHex,
  contrastToken
}