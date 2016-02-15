function displayInformation() {
    // var library is defined, use it to print the information
    for (b in library) {
        if (library[b].readingStatus == true) console.log("Already read '" + library[b].title + "' by " + library[b].author + ".");
        else console.log("You still need to read '" + library[b].title + "' by " + library[b].author + ".");
    }
}
//https://www.hackerrank.com/contests/7days-javascript/challenges/display-infromation-from-an-object

// tail starts here
var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

displayInformation();