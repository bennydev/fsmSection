'use strict';
angular.module('fsmSection', ['ui.router'])
    .directive('fsmSection', ['$state', function ($state) {
        return {
            restrict: 'E',
            scope: {
                id:'@',
                section: '='
            },
            templateUrl: 'fsmSection.tpl.html'
        };
    }]);