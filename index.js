// We create three functions named `multiplyBy2`, `add5`, `subtract3`
// We first subtract 3 from the number then add 5 to the result and multiply the result by 2

// The following is the functional programming way

const multiplyBy2 = (num) => num * 2;
const add5 = (num) => num + 5;
const subtract3 = (num) => num - 3;

// Following is the order how we want to calculate all three to get the result:
// number we received is `x`
// sub = x - 3
// add = s + 5
// mul = s * 2

const inputNumber = 20;

const result = multiplyBy2(add5(subtract3(inputNumber)));

console.log("Functional result: ", result); // Functional result: 44

const pipeResult = 
    inputNumber 
        |> subtract3(%) 
        |> add5(%) 
        |> multiplyBy2(%);

    // 20 --> subtract3(20) --> add5(17) --> multiplyBy2(22) --> 44

// % is called `topicToken` which you need to configure in .babelrc file
// Visit https://github.com/wajeshubham/js-pipe-operator for complete code

console.log("Pipeline operator result: ", pipeResult); // Pipeline operator result: 44
