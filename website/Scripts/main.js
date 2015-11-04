/// <reference path="angular.js" />

  (function () {
      var app = angular.module('myView', []);
      app.controller('AboutController', function ($scope) {

          var learnedSkills = [
            {
                name: 'Html5',
                imgSrc: '/Img/Html5.png'
            },
            {
                name: 'Css3',
                imgSrc: '/Img/css3.png'
            },
            {
                name: 'Javascript',
                imgSrc: '/Img/javascript.png'
            },
            {
                name: 'jQuery',
                imgSrc: '/Img/jQuery.png'
            },
            {
                name: 'Angular',
                imgSrc: '/Img/Angular.png'
            },
            {
                name: 'Responsive',
                imgSrc: '/Img/responsiveWeb.png'
            }
          ]

          $scope.skills = learnedSkills;
      });
 
      }());

$('body').scrollspy({ target: '#navbar-scrollspy' });

//first jquery ui 
    $('#github, #linkedin').tooltip();

//Second jquery ui
    $(function () {
        $("#contactBtn")
          .button()
          .click(function (event) {
              event.preventDefault();
          });
    });

    $('#contactBtn').click(function () {
        $('#contacts').slideDown();
    });

  

 





