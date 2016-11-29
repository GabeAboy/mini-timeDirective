angular.module('miniApp').directive('showTime', function(){
return {
      restrict:'E',
      template:'<div> The current time is {{time}} </div>',
      link: function(scope,element,attrs) {//@param put all DOM manipulation for Js
        var currentTime = new Date();
        scope.time = currentTime.toString();
      }
}
});
