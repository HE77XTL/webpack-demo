import _ from 'lodash'
import './style.css'
import './iconfont/iconfont.css'
import Icon from './a01.jpeg';

import './iconfont/iconfont.js'

import printMe from './print.js';


function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}

function componentImg() {
    const element = document.createElement('div');
    element.classList.add('myImg');
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    return element;
}
function componentFont() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'myFont'], ' ');
    element.classList.add('myFont');
    return element;
}


document.body.appendChild(component());
document.body.appendChild(componentImg());
document.body.appendChild(componentFont());
