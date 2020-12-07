var toFind = 4;
var arr = [1,2,3,4,5,6,7,8,9,10];

var firstIndex = 0;
var lastIndex = arr.length-1;
var midIndex = 0;


while (firstIndex <= lastIndex){
    midIndex = parseInt((firstIndex+lastIndex)/2);
    if(arr[midIndex] == toFind){
        found = true;
        console.log("Found");
        break; 
    } else if(arr[midIndex] < toFind){
        firstIndex = ++midIndex;
        console.log("firstIndex" + firstIndex);
    } else {
        lastIndex = --midIndex;
        console.log("lastindex"+lastIndex);
     }
    }
    
    // if(found ++ = false {
        
    
   
