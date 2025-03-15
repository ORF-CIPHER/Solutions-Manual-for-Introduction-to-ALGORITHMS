/*
    Problem Statment - 
    For each function f(n) and time t in the following table, determine the largest 
    size n of a problem that can be solved in time t, assuming that the algorithm to 
    solve the problem takes f(n) microseconds
    
*/

let second2micro = 1000000;
let word_time_limit = ["1 second", "1 minute", "1 hour"];
let time_limit = [second2micro, 60*second2micro, 3600*second2micro];
let max_size = 0;


let functionsObject = {
    nlogn : function(size) {
        return (size*Math.log2(size));
    },
    n_squared : function(size) {
        return size*size;
    },
    n_cubed : function(size){
        return size*size*size;
    },
    power : function(size){
        return (Math.pow(2, size));
    },
    factorial : function(size){
        let res = 1;
        for (let i = 1; i <= size; i++) {
            res *= i;
        }
        return res;
    }
};

// function iterator
for(let f = 0; f<5; f++){
    console.log(`Function = ${Object.keys(functionsObject)[f]}`);
    // timelimit iterator
    for(let t = 0; t<3; t++){
        for(let i = 1; functionsObject[`${Object.keys(functionsObject)[f]}`](i)<time_limit[t];i++){
            max_size = i;
        }
        console.log(`For ${word_time_limit[t]}, Max Size =  ${max_size}`);
    }
    console.log("\n");
}

/*
    Output - 
        Function = nlogn
        For 1 second, Max Size =  62746
        For 1 minute, Max Size =  2801417
        For 1 hour, Max Size =  133378058


        Function = n_squared
        For 1 second, Max Size =  999
        For 1 minute, Max Size =  7745
        For 1 hour, Max Size =  59999


        Function = n_cubed
        For 1 second, Max Size =  99
        For 1 minute, Max Size =  391
        For 1 hour, Max Size =  1532


        Function = power
        For 1 second, Max Size =  19
        For 1 minute, Max Size =  25
        For 1 hour, Max Size =  31


        Function = factorial
        For 1 second, Max Size =  9
        For 1 minute, Max Size =  11
        For 1 hour, Max Size =  12

*/
