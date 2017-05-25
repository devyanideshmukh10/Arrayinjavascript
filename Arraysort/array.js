/**
 * Created by devya on 5/24/2017.
 */
//alert("hi");

// var title = ["The Road Ahead","Walter Isaacson", "Mockingjay"];
// //document.document.getElementById("demo").innerHTML = title;
// function array(){
// //alert("hi");
// title.sort();
// alert(title);
//     document.getElementById("demo").innerHTML = title;
// }

    alert("hi");
var library = [
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];
//alert(library);
//document.getElementById("demo").innerHTML = library;

//console.log(sortByAttribute(library, 'title'));
//alert("hello");
// var a = library.sortBy("title");

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const genreA = a.title.toUpperCase();
    const genreB = b.title.toUpperCase();

    var comparison = 0;
    if (genreA > genreB) {
        comparison = 1;
    } else if (genreA < genreB) {
        comparison = -1;
    }
    return comparison;
}

console.log(library.sort(compare));
