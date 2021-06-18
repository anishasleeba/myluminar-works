var arr = [3, 4, 3, 2];
arr.sort((a, b) => a - b);
var c = 0;
var elmnt = 6;
var low = 0, up = arr.length - 1;
while (low < up) {
    let tot = arr[low] + arr[up]
    if (elmnt == tot) {
        console.log(`pairs ${arr[low]} ${arr[up]}`);
        low++;
    }
    else if (elmnt > tot) {
        low++;
    }
    else if (elmnt < tot) {
        up--;
    }
}
console.log("counter"+ cnt);