import './style.css';
import  home  from "./home.js";   
import recipes from './recipes.js'

let div = document.querySelector('#content');


function header() {
    let header = document.createElement("div");
    div.append(header);
    header.textContent = "Ferrari's Fantastic Failures";
    header.id = "header";
}

function navBar() { 
    let navBar = document.createElement("div");
    div.append(navBar);
    navBar.id = "navbar";

    let home = document.createElement("div");
    navBar.append(home);
    home.id = "home";
    home.className = "navitem"
    home.textContent= "home";

    let recipes = document.createElement("div");
    navBar.append(recipes);
    recipes.id = "recipes";
    recipes.className = "navitem"
    recipes.textContent = "Recipes";

    let contact = document.createElement("div");
    navBar.append(contact);
    contact.id = "contact";
    contact.className = "navitem"
    contact.textContent = "Contact";    
}


function switchNavItems() {
    const item = document.getElementsByClassName("navitem");
    const child = document.getElementById("navbar");

    item[0].addEventListener('click', function(e){
       while (child.nextSibling) {
        div.removeChild(child.nextSibling);
       }
        home();
    })

    item[1].addEventListener('click', function(e){
        while (child.nextSibling) {
            div.removeChild(child.nextSibling);
           }
            recipes();
    })
    
    
    
    
    
    
    
    
    
    /*for (i = 0; i < item.length; i++) {
        item[i].addEventListener('click', function(e) {
            e.target = document.location.reload()
            return false
        })

    }*/
}









header();
navBar();
switchNavItems();







