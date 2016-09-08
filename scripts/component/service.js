angular.module('bookYourTicket')
    .factory('seatsManagement', SeatsFactory);
    function SeatsFactory(){
        var dataArray = [];
        var result = []
        totalSeatsWithLabel = function(letter, rows, columns){
            for(var i = 0, j = letter; i < rows; i++, j++){
                for(var k = 1; k <= columns; k++){
                    dataArray.push({
                        val:k,
                        letter:String.fromCharCode(j),
                        check:false,
                        seat:false
                    })
                }
                result.push(dataArray);
                dataArray = [];
            }
        }
      
        totalSeatsWithLabel(65, 10, 12);

        return {
            totalSeatsWithLabel: totalSeatsWithLabel,
            result: result
        };
    }