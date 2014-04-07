'use strict';
auth
  .filter('checkElementPermission',
    ['AuthenticationService',
      function(AuthenticationService){
        return function(elements, dashboard){
          return elements.filter(
            function(element, index, array){
              if(AuthenticationService.hasPermission(element.slug, 'element', dashboard))
                return element;
            }
          );
        }
      }
    ]
  )
;