   (function () {
     'use strict';

      angular.module('userApp', ['ngMaterial'])
       .config(function($mdIconProvider, $mdThemingProvider){
         // Register the user `avatar` icons
            $mdIconProvider
              .defaultIconSet("./assets/svg/avatars.svg", 128)
              .icon("menu"       , "./assets/svg/menu.svg", 24);
              
              $mdThemingProvider.theme('default')
                          .primaryPalette('grey')
                          .accentPalette('red');

        });

   })();