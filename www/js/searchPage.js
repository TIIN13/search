/**
 * Created by nielshansen on 16/09/15.
 */

angular.module('starter.searchPage', [])

.controller('SearchCtrl', function ($scope, SearchList) {

    $scope.listOfStuff = SearchList.getAll();


  })
  .filter('lookup', function($log) {
    return function(items, query) {
      if (!query) return items; // return all items if nothing in query box

      var terms = query.split(' ');
      var arrayToReturn = [];

      items.forEach(function(item){ // iterate through array of items

        var passTest = true;
        terms.forEach(function(term){ // iterate through terms found in query box
          // if any terms aren't found, passTest becomes and remains false
          passTest = passTest && (item.name.toLowerCase().indexOf(term.toLowerCase()) > -1) || (item.uni.toLowerCase().indexOf(term.toLowerCase()) > -1) || (item.title.toLowerCase().indexOf(term.toLowerCase()) > -1);
        });
        // Add item to return array only if passTest is true -- all search terms were found in item
        if (passTest) { arrayToReturn.push(item); }
      });

      //console.log(arrayToReturn);
      return arrayToReturn;
    }
  });
