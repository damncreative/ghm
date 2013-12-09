
# Filters

angular
  .module('ghm.filters', [])
  .filter('interpolate', 
    ['version', (version)->
      (text)->
        return String(text).replace(/\%VERSION\%/mg, version)
    ])