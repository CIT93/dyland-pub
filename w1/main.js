console.log("Hello World")

//let myVar;

const myVar = "dylan";
const myVarType = typeof(myVar);

console.log("myVarType " + myVarType);
console.log(`myVarType ${myVarType}`);

function runNOW() {
    if (myVarType === "string") {
        console.log(`line 13`);
    } else { 
        console.log(`line 15`);
    }
}

runNOW();
