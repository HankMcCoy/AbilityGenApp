'use strict';

var Chance = require('chance');
var hash = require('string-hash');

function getDebugStyle(origStyle) {
  return origStyle;

  var chance = new Chance(hash(JSON.stringify(origStyle || {})));
  var borderStyle = {
    borderColor: chance.color(),
    borderWidth: 1,
  }

  return Array.isArray(origStyle)
    ? origStyle.concat(borderStyle)
    : [origStyle, borderStyle];
}

module.exports = getDebugStyle;
