"use strict";
angular
    .module("app")
    .config(($routeProvider) => {
        $routeProvider
            .when("/cart", {
                template: `<cart></cart>`
            })
        });