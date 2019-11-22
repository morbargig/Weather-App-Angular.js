var myControllers = angular.module('myControllers', []);


myControllers.controller('SearchController',
  function MyController($scope, $http) {
    // let query = "london"
    // console.log("jbhbnhbj")
    // $http.get(`
    // http://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=4d725b2f41f2c98eca468ee939737fcb
    // `).then(function (response) {
    // console.log(response.data)
    $scope.citeis = [{ country: "GB", name: "London", id: 2643743 },
    { name: "Moscow", country: "RU", id: 524901 },
    { name: "New York", country: "US", id: 5128581 },
    { name: "Marino", country: "IT", id: 6539761 }, // 
    { name: "Madrid", country: "ES", id: 3117735 },
    { name: "Tokyo", country: "JP", id: 1850147 },
    { name: "Kiev", country: "UA", id: 703448 },
    { name: "Tehran", country: "IR", id: 112931 },
    { name: "Berlin", country: "DE", id: 2950159 },
    { name: "Minsk", country: "BY", id: 625144 },
    { name: "Warsaw", country: "PL", id: 756135 },
    { name: "Bucharest", country: "RO", id: 683506 },
    { name: "Lima", country: "PE", id: 3936456 },
    { name: "Wellington", country: "NZ", id: 2179537 },
    { name: "Tripoli", country: "GR", id: 252601 },
    { name: "Paris", country: "FR", id: 2988507 },
    { name: "Beijing", country: "CN", id: 1816670 },
    { name: "Brasilia", country: "BR", id: 3459342 },
    { name: "Canberra", country: "AU", id: 2172517 },
    
    
    
    
    
    
    
    
    
    { name: "Jerusalem", country: "PS", id: 281184 }
  ];
    $scope.citiesOrder = 'city';
    // });
    // }
  });

myControllers.controller('DetailsController',
  function MyController($scope, $http, $routeParams) {
    console.log((43 * 34) -98 )
    console.log($routeParams.itemId)
    $http.get(`
    http://api.openweathermap.org//data/2.5/forecast?id=${$routeParams.itemId}&appid=4d725b2f41f2c98eca468ee939737fcb
    `).then(function (response) {
      // console.log(response.data.list)
      let myWhater = []
      for (let i of response.data.list) {
        // console.log(i.dt_txt.slice(11, 13))
        if (i.dt_txt.slice(11, 13) == "12") {
          myWhater.push(i)
        }
      }
      console.log(myWhater)

      $scope.city = response.data;
      $scope.next6days = myWhater;


      // if ($routeParams.itemId > 0) {
      //   $scope.prevItem = Number($routeParams.itemId) - 1;
      // } else {
      //   $scope.prevItem = $scope.artists.length - 1;
      // }

      // if ($routeParams.itemId < $scope.artists.length - 1) {
      //   $scope.nextItem = Number($routeParams.itemId) + 1;
      // } else {
      //   $scope.nextItem = 0;
      // }

    });
  });