/*console.log("Hello World");

console.log(200);
console.log(true);
console.log(null);

var num = "Kofi Nimo"

console.log("string",10.10,true,false,null, num);*/

var car = {

    color : "Red",
    speed : 200,
    drive : function (){return "drive"}

};

//Array Literal
var shoppinglist =[


]
var sugar = "grannules";
//Embedded Object
var autoRide = {

      make : "volve",
      speed: 160,
      engine: {
          size: 2.0,
          make: "BMW",
          fuel: "petrol",
          pistons:[{ maker: "BMW"}, {maker: sugar}]
      },
      drive: function (){return "drive"}//this is called method in a Car object
};

//Variable name is a memory Pointer.This is an embeded array
var array = [
    "string",
    100,
    ["embeded", 200],
    {car: "ford"}, //object in array
    function (){
    return "drive";
    },

    "New Value"
]


//Accessing member of the autoRide Object
console.log(autoRide.make);
console.log(autoRide.drive());

/*
function name(){
    var fullName = "Felix Atsu Ackuayi";

    function concat(name) {
        return "Mr." + name;

    }
    return fullName;
}*/


function name(fullName) {
    return fullName.firstname + fullName.lastname;
}

console.log(name({firstname: "Felix ", lastname: " Ackuayi"}));



function fname(AllName) {

    return AllName;


}

console.log (fname(function (){
return "Embed";
}));