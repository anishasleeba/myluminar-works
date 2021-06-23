var state={name:"Kerala",confirmed_cases:12000,cured:5000}

//state name

console.log(state["name"]);

// number of confirmed cases

console.log(state.confirmed_cases);

// if death is not exisit, add death=100

if(!("death" in state)){
    state["death"]=100;
}
console.log(state);

// add 500 to cured cases

state["cured"]+=500;

console.log(state);