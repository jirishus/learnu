app.controller('mainCtrl', function($scope,$http,Resty) {
  
  $scope.searchForm = {};

  $scope.formSubmit = function(searchForm) {   
    let userInput = searchForm.searchText;

    Resty
    .getResource(userInput)
    .then((payload) => {      
      $scope.stories = payload.data.response.results;
    });
  }

});
