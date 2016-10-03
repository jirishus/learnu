app.factory('Resty', function($http) {

  let baseUrl = 'http://content.guardianapis.com';
  let testy = `${baseUrl}`;

  return {
    getResource: function(term) {
      return $http.get( baseUrl + '/search?q=' + term + '&show-blocks=all&page=1&api-key=test')
    },
    getSections: function() {
      return $http.get( baseUrl + '/sections?&api-key=test');
    }
  }
  
});