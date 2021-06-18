var arr=[8,10,9,12,7,13];
var elmnt=12;
arr.sort((num1,num2)=>num1-num2)
console.log(arr);
var low=0;up=arr.length-1;
var flag=0;
while (low<up) {
    let mid=Math.floor((low+up)/2);
    if (elmnt>arr[mid]) {
        low=mid+1;
    } 
    else if (elmnt<arr[mid]){
        up=mid-1;
    }
    else if(elmnt==arr[mid]){
        flag++;
        break;
    }
}
console.log(flag==0?"not found":"found");