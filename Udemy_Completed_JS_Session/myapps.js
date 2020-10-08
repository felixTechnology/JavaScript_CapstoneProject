
/*var doc = document.getElementById('hello');
console.log(doc);

var docs = document.getElementById('hello');

var docss = document.getElementById('hellos');

console.dir(doc);

document.getElementById('hello').innerText = "Atsu Ackuayi";

document.getElementById('hello').innerText += " is from Ghana ";

document.getElementById('hello').innerText += " is from Ghana <span> where Accra is beautiful </span>";

document.getElementById('hello').innerHTML += " is from Ghana <span> where Accra is beautiful </span>";

docss.outerHTML = ' <h2 id="hellos"> new world order <span> Hello World</span></h2>';
var spanH1 = document.querySelectorAll('h1 span')*/;

/*spanH1[0].innerHTML = "new text here!!";*/

// Any method with element will return a single object.
// Any method with elements will return an array.

/*
console.log( document.getElementsByTagName('p') );

console.log( document.getElementById('hello') );

console.log( document.getElementsByClassName('pClass') );

console.log(
    document.querySelectorAll(
        ' p[data-content="123"], body > h1.pClass > span '
    )
);
*/


/*****************************************************************/
/*var el = document.getElementById('style');*/
/*el.style.background = "blue";
el.style.color ="white";
el.style.width = "200px";*/

/*el.style.cssText ="background: blue; color: white; width: 200px";

el.style.cssText += "height: 100px;"*/

/*console.log(getComputedStyle(el));*/

/*
document.getElementById('style');*/
/*******************************************************************/

/*var select = document.getElementsByName('cars')[0];
select.onclick = function (event) {
    console.log(event);
    
}

function ClickCallback(event) {
    console.log('clicked by add event listener');
};




select.addEventListener('click', ClickCallback);
select.removeEventListener('click', ClickCallback)*/

/***********************************************************************************/

/*
var element = document.createElement('div');
element.style.cssText ="width:200px; height:20px; background:blue;";

element.onclick = function (){
    alert('hello');
}


//document.body.appendChild(element);

var target = document.getElementById('yellow');

document.body.insertBefore(element, target)*/

/*************************************************************************/
let elements = document.getElementsByName('cssProperty');
let div = document.getElementById('modify');

function set(){


    for (let index = 0; index < elements.length; index = index +1){

       /* console.log(elements[index].getAttribute('id'));*/
        let cssProperty =  elements[index].getAttribute('id');

        /*console.log(elements[index].value);*/
        let cssValue = elements[index].value;

        //console.log(cssProperty,cssValue);

      /*  let div = document.getElementById('modify');*/

        div.style[cssProperty] = cssValue;
    }
}

/*First of all the button has been targeted and an event Listener has been added so when you click on it
* the said subroutine.
* Then it a variable is created that stores the array of all the selected dropdowns which has it individual names called CSS property
* The we iterate through the selected arrays to target each individual select dropdown
* Then we look at each element with it ID attribute
* then we get each value
* then grab the div element
*  */
document.getElementById('set').addEventListener('click',set)