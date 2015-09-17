/**
 * Created by nielshansen on 16/09/15.
 */

angular.module('starter.searchFactory', [])

.factory('SearchList', function () {


    var searchList =
      [
        {name: "Bob", title: "Msc Science", uni: "KU" },
        {name: "Alice", title: "Msc Science", uni: "CBS" },
        {name: "Django", title: "Phd Python", uni: "DTU" },
        {name: "Ove", title: "Phd Economics", uni: "CBS" },
        {name: "Angular", title: "Phd JavaScript", uni: "DTU" },
        {name: "Alex", title: "Bsc Science", uni: "KU" },
        {name: "Bo", title: "Bsc Arts", uni: "RUC" },
        {name: "Ibi", title: "Msc Arts", uni: "RUC" },
        {name: "Bob", title: "Msc Math", uni: "DTU" },


      ];


    return {
      getAll: function() {
        return searchList;
      }
    }

  })
