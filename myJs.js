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