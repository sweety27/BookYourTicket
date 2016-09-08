angular.module("bookYourTicket")
	.controller('selectSeatController', ['$scope','seatsManagement', function($scope, seatsManagement){
		var init = function(){
			$scope.seats = seatsManagement;
			$scope.seats.result = seatsManagement.result;
			$scope.quantities = [1,2,3,4,5,6,7,8,9,10,11,12]
			$scope.selectedQuantity = $scope.quantities[0];
			$scope.showSeatSelection = false;
			$scope.isDisabled = false;
			$scope.selectedSeatCount = 0;
			$scope.showTableData = false;
      $scope.showErrorMessage = false;
      $scope.showMessage = false;
		};
		$scope.startSelection = function(name){
			if(name == undefined){
				$scope.showSeatSelection = false;
			}
			else{
				$scope.showSeatSelection = true;
			}
		}	
		$scope.chooseSeat = function(selection){
        if (!selection.seat) {
		      if (selection.check) {
		        selection.check = false;
		        $scope.selectedSeatCount--;
		      } else if ($scope.selectedSeatCount < $scope.selectedQuantity) {
		        selection.check = true;
		        $scope.selectedSeatCount++;
		      }
          else{
            $scope.showMessage = true;
          }
		    }
      }
      $scope.confirmSelection = function(name, quantity, dataObj){
      	$scope.name = name;
      	$scope.quantity = quantity;
      	$scope.seatSelectionObj = [];
      	angular.forEach(dataObj, function(obj, index){
      		angular.forEach(obj, function(innerObj, i){
      			if(innerObj.check === true){
      				$scope.letter = innerObj.letter
      				$scope.value = innerObj.val;
      				$scope.seatSelectionObj.push({letter: $scope.letter, val: $scope.value});
              if($scope.selectedSeatCount == $scope.selectedQuantity){
      				  innerObj.seat = true;
              }
      				$scope.showTableData = true;
      			}
      		});
      	});
      	if($scope.selectedSeatCount < $scope.selectedQuantity){
          $scope.showErrorMessage = true; 
      		$scope.showTableData = false;
      	}
        else{
          $scope.showErrorMessage = false;
          $scope.showMessage = false;
        }
      }

		init();
	}])