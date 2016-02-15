// https://www.hackerrank.com/contests/7days-javascript/challenges/generate-a-pattern-using-javascript

//Write a JavaScript program to generate the pattern below, composed of the following characters: ╱ and ╲.
//╱╲╱╲╱╲╱╲╱╲╱╲╱╲
//╱╲╱╲╱╲╱╲╱╲╱╲╱╲
//╱╲╱╲╱╲╱╲╱╲╱╲╱╲
//╱╲╱╲╱╲╱╲╱╲╱╲╱╲
//╱╲╱╲╱╲╱╲╱╲╱╲╱╲
//╱╲╱╲╱╲╱╲╱╲╱╲╱╲
//╱╲╱╲╱╲╱╲╱╲╱╲╱╲
//╱╲╱╲╱╲╱╲╱╲╱╲╱╲
//╱╲╱╲╱╲╱╲╱╲╱╲╱╲
//╱╲╱╲╱╲╱╲╱╲╱╲╱╲
//╱╲╱╲╱╲╱╲╱╲╱╲╱╲
//╱╲╱╲╱╲╱╲╱╲╱╲╱╲
//╱╲╱╲╱╲╱╲╱╲╱╲╱╲
//╱╲╱╲╱╲╱╲╱╲╱╲╱╲

console.log(Array(15).join(Array(8).join("\u2571\u2572") + '\n'));