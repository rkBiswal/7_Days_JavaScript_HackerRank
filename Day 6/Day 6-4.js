// https://www.hackerrank.com/contests/7days-javascript/challenges/the-love-letter-mystery-2-js-only

function processData(input) {
    var string = input.split('\n');
    var t = parseInt(string[0]);
    for (var i = 0; i < t; i++) {
        var count = 0; var tmp = input.split('\n')[i + 1];
        var p = 0; var q = tmp.length - 1;
        while (p <= q) {
            count += Math.abs(tmp.charCodeAt(q) - tmp.charCodeAt(p));
            p++; q--;
        }
        console.log(count);
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
