app.controller('mainCtrl', function($scope,$http,Resty) {
  
  $scope.searchForm = {};

  $scope.formSubmit = function(searchForm) {
    // $scope.searchForm = {};
    let userInput = searchForm.searchText;

    Resty
    .getResource(userInput)
    .then((payload) => {
      // $scope.imagePath = payload.data.response.results[0].blocks.main.elements[0].assets[0].file;
      $scope.stories = payload.data.response.results;
    });
  }

});