app.controller('mainCtrl', function($scope, Resty, $timeout) {
  
  $scope.searchForm = {};
  $scope.isLoading = false;
  $scope.resultsFound = false;

  $scope.formSubmit = function(searchForm) {   
    // debugger;
    let userInput = searchForm.searchText;
    $scope.isLoading = true;
    $scope.stories = [];

    Resty
    .getResource(userInput)
    .then((payload) => {                 
      // $scope.stories = payload.data.response.results;            
      $timeout(function () {
        console.log('Results Successfully Loaded');
        $scope.isLoading = false;
        $scope.resultsFound = true;
        $scope.stories = (payload.data.response.results.length > 0) ? payload.data.response.results : [{ webTitle: 'No Results Found' }];            
      }, 3000);
      
    });
  }

});
