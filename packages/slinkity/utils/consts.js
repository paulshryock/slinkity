const { v4: uuidv4 } = require('uuid')

/**
 * Slinkity-specific data attributes
 * Applied to mount points and associated scripts
 *
 * @typedef SlinkityAttrs
 * @property {string} id - ID to identify mount points in the DOM for hydration
 
 * @type {SlinkityAttrs}
 */
const SLINKITY_ATTRS = {
  id: 'data-s-id',
}

/**
 * @typedef ImportAliases
 * @property {string} root - alias for importing resources from the project root (`process.cwd()`)
 * @property {string} input - alias for importing from the project input directory, as specified in 11ty's dir.input
 * @property {string} includes - alias for importing from the project includes directory, as specified in 11ty's dir.includes
 * @property {string} layouts - alias for importing from the project layouts directory, as specified in 11ty's dir.layouts
 */
const IMPORT_ALIASES = {
  root: '/@root',
  input: '/@input',
  includes: '/@includes',
  layouts: '/@layouts',
}

const PACKAGES = {
  client: 'slinkity/client',
}

/**
 * Name for the web component used to mount React
 */
const SLINKITY_REACT_MOUNT_POINT = 'slinkity-react-mount-point'

/**
 * File name for user slinkity config files
 */
const SLINKITY_CONFIG_FILE_NAME = 'slinkity.config'

const BUILD_HASH = uuidv4()

/**
 * Returns an SSR comment with build hash and ID.
 *
 * @param  {string} id (required) ID.
 * @return {string}    SSR comment.
 */
function toSSRComment(id) {
  if (typeof id !== 'string' || id === '') {
    throw new TypeError('must pass non-empty string to toSSRComment')
  }

  return `<!--slinkity-ssr ${BUILD_HASH} ${id}-->`
}

const SLINKITY_HEAD_STYLES = toSSRComment('styles')

module.exports = {
  SLINKITY_ATTRS,
  SLINKITY_CONFIG_FILE_NAME,
  SLINKITY_REACT_MOUNT_POINT,
  IMPORT_ALIASES,
  SLINKITY_HEAD_STYLES,
  PACKAGES,
  BUILD_HASH,
  toSSRComment,
}
