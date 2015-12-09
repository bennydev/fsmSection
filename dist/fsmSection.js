angular.module('fsmSectionTemplates', ['fsmSection.tpl.html']);

angular.module("fsmSection.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("fsmSection.tpl.html",
    "<div id=\"slidedown-wrapper-{{id}}\" class=\"form-section slidedown-wrapper\" ng-class=\"{'slidedown-open': section.status === 'OPEN'}\">\n" +
    "    <h2 class=\"form-section__heading\" ng-class=\"{'slidedown-toggle slidedown-toggle--arrow': section.status === 'OPEN' || section.status === 'ENABLED'}\"\n" +
    "        ng-click=\"section.open();\">\n" +
    "        {{section.title | fsmTranslate}}\n" +
    "    </h2>\n" +
    "\n" +
    "    <div class=\"slidedown\" >\n" +
    "        <form novalidate name=\"section{{id}}Form\" placeholder-polyfill>\n" +
    "            <ng-include src=\"section.template\" ng-if=\"section.status !== 'DISABLED'\"></ng-include>\n" +
    "            <div>{{footer}}</div>\n" +
    "            <ng-include src=\"'navigation/navigationButtons.tpl.html'\" ng-if=\"section.next\"></ng-include>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

'use strict';
angular.module('directives')
    .directive('fsmSection', [function () {
        return {
            restrict: 'E',
            scope: {
                id:'@',
                sections: '='
            },
            templateUrl: 'fsmSection/fsmSection.tpl.html',
            link: function(scope, element, attributes){
                scope.section = scope.sections[scope.id];
               scope.next = scope.section.next;
            }
        };
    }]);