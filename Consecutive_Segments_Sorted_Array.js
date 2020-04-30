function compressArr (arr) {
    var start = arr[0];
    var stop = start;
    var arrLength = arr.length;
    var result = '';
    
    for (var i = 1; i < arrLength; i++) {   	
        
        if (arr[i] === stop+1) {
          stop = arr[i];
        } else {
        	
            if (start === stop) {
	        result += start + ', ';            
            } else {
            	result += start + '-' + stop + ', ';
            }
            // reset the start and stop pointers
            start = arr[i];
            stop = start;
        }
    }

    if (start === stop) {
        result += start;            
    } else {
        result += start + '-' + stop;
    }
    
    console.log(result);
}

var arr = [1, 2, 3, 10, 25, 26, 30, 31, 32, 33];

compressArr(arr);