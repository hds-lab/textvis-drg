/**
 * Top level module for dimension application.
 */
(function () {
    'use strict';

    // Declare app level module which depends on other modules
    var app = angular
        .module('SparQs', [
            'SparQs.controllers',
            'ngCookies',
            'ngDragDrop'
        ]);

    //Fix CSRF
    //http://django-angular.readthedocs.org/en/latest/csrf-protection.html
    app.run(['$http', '$cookies', function ($http, $cookies) {
        $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
    }]);
})();