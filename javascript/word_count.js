var text="hai hello hai hello";
// find word count 

// split text into words

var words=text.split(" ");  // text will split based on space and will return as an array
console.log(words); // words is an array
var count={}; // to store value of words

for(let word of words){  // word will have first value of the array words
    if(!(word in count)){ // if value in word is not in count  // third iteration value in word is in count jumb to else block
        count[word]=1;  // count {hai:1} //second iteration count {hai:1,hello1} 
    }

    else{
        count[word]+=1; // count {hai:1,hello:1} [hai]+=1 (hai already have value1 and it will add 1 and will become 2) => count {hai:2,hello1}  // fourth iteration count {hai:2,hellow:2}
    }
}

console.log(count);