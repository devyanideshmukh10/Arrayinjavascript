/**
 * Created by devya on 5/24/2017.
 */


function func(){

    var x = parseInt(document.getElementById("number").value);
var d = parseInt((x+'').replace(/[^01]/gi,''),2);

    var digit = Math.random(x);

document.getElementById("demo").innerHTML = d;
}

function array(){

//var arrayA = document.getElementById("number2").elements["name[]"];

//var arrayA = document.querySelectorAll("#number2 input[name='name[]']");
  var arrayA = document.getElementById("number2").value;
 // var array = [];
var  array = arrayA.split(" ");
var largest = Math.max.apply(Math,array);
alert(largest);

  // alert(array);
  // for(var i=i; i<array.length; i++){
  //     array.push(arrayA[i]);
  // }

//     var largest = array[0];
//
//     for(var i=0; i<array.length; i++) {
//
//       if (array[i] > largest){
//      largest = array[i];
// }
//
//     }


    //alert(largest);
    //document.getElementById("demo").innerHTML = arrayA;
}

function fullname(){
    alert("hi");
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var name = first + " " + last;
    document.getElementById("demo").innerHTML = name;

}

function prompt(){
    var f = document.getElementById("fname").value;
    var l = document.getElementById("lname").value;
    var total = f + " " + l;
document.getElementById("full").value = total;
}

function removeOption() {
    var x = document.getElementById("DD1");
    x.remove(x.selectedIndex);
}
