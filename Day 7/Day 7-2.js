// https://www.hackerrank.com/contests/7days-javascript/challenges/generate-a-christmas-tree-in-javascript

//Write a JavaScript program to generate the Christmas Tree pattern below. The tree should be composed of zeroes (0), and it must be topped with an asterisk (*). 
//        *
//        0
//       000
//      00000
//     0000000
//    000000000
//   00000000000
//  0000000000000
// 000000000000000
//00000000000000000


function processData(input) {
    for (var i = 0; i < 9; i++) {
        var str = ''; var space = (7 - i);
        if (i == 0) str += ' '.repeat(space + 1) + '*\n';
        str += ' '.repeat(space + 1);
        var zero = 2 * i + 1;
        str += '0'.repeat(zero);

        console.log(str);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});


//function processData(input) {
//   var loveTree = `        *
//        0
//       000
//      00000
//     0000000
//    000000000
//   00000000000
//  0000000000000
// 000000000000000
//00000000000000000
//`
//    console.log(loveTree);  
//}  