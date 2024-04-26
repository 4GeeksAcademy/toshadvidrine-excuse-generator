/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    document.querySelector("#btn").addEventListener("click", () => {
        document.querySelector("#the-excuse").innerHTML = genrateExcuse();
    });
  
};

let genrateExcuse = () => {
    let who = ['My class', 'My kid', 'My sister', 'My boss'];
    let action = ['called', 'text', 'crushed', 'broke'];
    let what = ['my laptop', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch'];

    let whoIndex = Math.floor(Math.random() * who.length);
    let actIndex = Math.floor(Math.random() * action.length);
    let watIndex = Math.floor(Math.random() * what.length);
    let wenIndex = Math.floor(Math.random() * when.length);


return (
    who[whoIndex] +
    " " +
    action[actIndex] +
    " " +
    what[watIndex] +
    " " +
    when[wenIndex] 
);

};







