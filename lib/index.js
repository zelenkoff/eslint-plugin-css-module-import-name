/**
 * @fileoverview define and fix import format style
 * @author Eugene Zelenkov
 */
'use strict';

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules

const { cssModuleImportName } = require('./rules/css-module-import-name');

module.exports = {
  cssModuleImportName
};

// import processors
module.exports.processors = {
  // add your processors here
};
