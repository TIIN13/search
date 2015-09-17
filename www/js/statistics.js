/**
 * Created by nielshansen on 17/09/15.
 */

angular.module('starter.statistics', [])


  .controller('GraphCtrl', function($scope) { // Add a simple controller
    $scope.graph = {};                        // Empty graph object to hold the details for this graph
    $scope.graph.data = [                     // Add bar data, this will set your bars height in the graph
      //Male
      [16, 15, 20, 12, 16, 12, 8],
      //Female
      [8, 9, 4, 12, 8, 12, 14]
    ];
    $scope.graph.labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];    // Add labels for the X-axis
    $scope.graph.series = ['Male', 'Female'];  // Add information for the hover/touch effect

  });
