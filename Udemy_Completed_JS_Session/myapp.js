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

/*********************************************************************/

var engine = {
    maker: "Ford",
    headGasket:{
        maker: "Golf",
        pots:[
            "piston1",
            "piston2"
        ]
    }
};
/***********************************************************************************/

function runExpression()
{
    var a = 10;

    function add()
    {
        // Scoped engine
        // var engine = "New engine";

        // Inferred globals
        console.log( engine, a );

        // Clobbering the global scope
        test = "new stirng";
        test2 = "new string 2";
        test3 = "new string 3";
    }

    add();
}

/********************************************************************************/
//console.log( this );

var object = {
    prop: this,
    embed:
        {
            method: function(){ return this; }
        }
};

var arrayz = [
    this,
    function(){ return this; }
];

function global(){
    return this;
}

// Normal invocation
global();
object.embed.method();
arrayz[1]();

// Assign context
global.call( object );
object.embed.method.call( object );
arrayz[1].call( object );

// New context
new global();
new object.embed.method( object );
new arrayz[1]();

/*****************************************************************************/

function Apple( x, y, color, score )
{
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
}

var apple1 = new Apple( 10, 20, "red", 200 );
var apple2 = new Apple( 100, 200, "green", 50 );
var apple3 = new Apple( 20, 200, "pink", 10 );


/********************************************************************************************/

var winMatch  = 1,
    loseRight = 0,
    ManchesterUnited  = "yes";

//condition
if( ManchesterUnited === "yes" )
{
    console.log( 'cross the road' );
}
//this section is opportunity to ask series of question assuming the 1st condition doesn't workout
else if(
    //false or True = True , false && true = false (Operator Precedence- developer.mozilla.org)
    ManchesterUnited === "yes" && ( loseRight === 0 || winMatch === 0 )

)
{
    console.log( 'All clear! Cross the road' );
}
else
{
    console.log( "Stay where you are!" );
}

/****************************************************************************************************/


var classRegister = [ "Gordon", "Sharaf", "Kristine" ];

/*for( var i = 0; i < classRegister.length; i++ )
{
    console.log( classRegister[ i ] );
}*/
//Decrementing and we starting point
/*for( var i = classRegister.length - 1;   i >= 0;  i-- )
{
    console.log( classRegister[ i ] );
}*/

//in -> Is for incrementation
for( var index in classRegister )
{
     console.log( classRegister[ index ] );
}

/**************************************************************************************************/
var symbolName = "value reference in memory";

//let create symbols that respect the scope that they reside in,particularly conditional executional context
let letSymbol = "second value";

const symName = "constant value in memory";

/******************************************************************/

/*

//Example


if (true){
    //Variable don't respect conditional executional context
    var symbolNames = "value reference in memory";

//let create symbols that respect the scope that they reside in,particularly conditional executional context
    let letSymbol = "second value";

    //This also respect scope
    const symName = "constant value in memory";
}

for (var i=0; i <5; i++){

    //Variable don't respect conditional executional context
    var symbolNamex = "value reference in memory";

//let create symbols that respect the scope that they reside in,particularly conditional executional context
    let letSymbol = "second value";

    //This also respect scope
    const symName = "constant value in memory";

}

for (let i=0; i <5; i++){

    //Variable don't respect conditional executional context
    var symbolNamez = "value reference in memory";

//let create symbols that respect the scope that they reside in,particularly conditional executional context
    let letSymbol = "second value";

    //This also respect scope
    const symName = "constant value in memory";

}

//Variable only respect only function that it forms it scope within.
function check(){
    var varSymbol = "assign a value";
}*/
