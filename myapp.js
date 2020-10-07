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

//Variable name is a memory Pointer.This is an embeded array_Tutorial 14
var array = [
    "string",
    100,
    ["embeded", 200],
    {car: "ford"}, //object in array

    function ()
    {
    return "drive";
    },

    "New Value"
];


//Accessing member of the autoRide Object
console.log(autoRide.make);
console.log(autoRide.drive());


// Assignment

autoRide.make = "Ford";
autoRide.make += " Chevy";

autoRide.speed += 50;
autoRide.speed -= 10;
autoRide.speed *= 2;
autoRide.speed /= 2;
autoRide.speed **= 2;
autoRide.speed %= 33;

// Creation

autoRide.model = "v60";
autoRide.color = "red";

autoRide.stop = function(){ return "stop"; };

// Delete

delete autoRide.color;
delete autoRide.drive;


/**************************************************************/

var arrays = [
    "string",
    "hello",
    "world200",
    100,
    function(){ return "drive"; },
];

// Assignment
arrays[0] = "New string";

// Methods
arrays.shift(); // Delete's first element
arrays.pop(); // Delete's last element

// Add new values to the beginning of the array
arrays.unshift( "new", "values" );

// Add new values to the end of the array
arrays.push( "ending", "values" );

// Splice can do anything remember
// splice( point, delete, add values... )
arrays.splice( 2, 2, "new elemets", [], {}, 200, 300, function(){} );
/*********************************************************************************************/

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
/******************************************************************************/
// Where there are objects...
var name1 = { firstname: "Joyce", lastname: "Aryee"  };

const name2 = { firstname: "Patience", lastname: "Worlali"  };

console.log(
    name( name1 ),
    name( name2 )
);

/********************************************************************************/


function fname( AllName ) {

    return AllName();

}

console.log(
    fname(function (){

        return "Embed"; })
);



function accraEmbed( jump )
{
    return jump();
}

var name3 = function() { return "John Lock"  };

const name4 = function() { return "Stephanie Lock" };

console.log(
    accraEmbed( name3 ),
    accraEmbed( name4 )
);
/***********************************************************************************************/
/*Felix  Ackuayi myapp.js:73:9
Embed myapp.js:83:9
*/

//Memory Hoisting a feature in JS: hOISTING MEANING LIFITING UP

console.log(myName, printName());

var myName = "Felix Atsu Ackuayi";

function printName() {
    console.log(a,embed()); //this will hoist the memory pointer and will be
    var a = 100;

    function embed() {

        return "Hello"

    }
return " Eric Doe Ackuayi";
}


console.log( yourName, printAge() );

var yourName = "Lawrence";

function printAge()
{
    console.log( a, embeding() );

    var a = 100;

    function embeding(){ return "Jesus Christ"; }

    return "John Doe";
}