angular.module('fsmSectionTemplates', ['fsmSection.tpl.html']);

angular.module("fsmSection.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("fsmSection.tpl.html",
    "<div id=\"slidedown-wrapper-{{id}}\" class=\"form-section slidedown-wrapper\" ng-class=\"{'slidedown-open': section.status === 'OPEN'}\">\n" +
    "    <h2 class=\"form-section__heading\" ng-class=\"{'slidedown-toggle slidedown-toggle--arrow': section.status === 'OPEN' || section.status === 'ENABLED'}\"\n" +
    "        ng-click=\"section.open();\">\n" +
    "        {{section.title}}\n" +
    "    </h2>\n" +
    "\n" +
    "    <div class=\"slidedown\" >\n" +
    "        <form novalidate name=\"section{{id}}Form\" placeholder-polyfill>\n" +
    "            <ng-include src=\"section.templateUrl\" ng-if=\"section.status !== 'DISABLED'\"></ng-include>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

'use strict';
angular.module('fsmSection', [])
    .directive('fsmSection', [function () {
        return {
            restrict: 'E',
            scope: {
                id:'@',
                section: '='
            },
            templateUrl: 'fsmSection.tpl.html',
            link: function(scope, element, attributes){

            }
        };
    }]);