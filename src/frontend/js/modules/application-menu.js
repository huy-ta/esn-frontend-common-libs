const { applyPolyfills, defineCustomElements } = require('esn-frontend-application-grid/loader');

applyPolyfills().then(() => defineCustomElements());

// TODO: Write tests for this
angular.module('esn.application-menu')
  .directive('applicationMenuToggler', function() {
    return {
      restrict: 'E',
      scope: true,
      replace: true,
      template: require("../../views/modules/application-menu/application-menu-toggler.pug"),
      link: function($scope) {
        $scope.appGridItems = process.env.APP_GRID_ITEMS;
      }
    };
  });
