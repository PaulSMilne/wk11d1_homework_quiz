# Quiz

### What does DOM stand for?    
```
Document Object Model
```
### What is the name of the object we can use to get information about the browser enviroment? 
```
window
```
### What is the name of the object that we can use to get access to the DOM representation of the page? 
```
document
```
### What type of files might we see in the Network tab for in Chrome devTools?
```
scripts, stylesheets, images, media, fonts, documents, websockets, manifests
```
### What version of HTML is document.querySelector from? 
```
HTML5
```
### Which event do we hook into when we want to know the DOM has loaded, window.onload or document.onload? 
```
window.onload
```
### We use window.createElement to make new DOM elements, true or false? 
```
true
```
### List two ways to get all the elements by class 'cat'
```
document.getElementsByClassName("cat")

document.querySelector(".cat")
```
### List two ways to retrieve the element with id "goat"
```
document.getElementbyID("goat")

document.querySelector("#goat")
```
### List two ways to get all the li elements
```
document.getElementsByTagName('li')

var lists = document.getElementsByTagName('ul');    
var listItems = lists.children;
```
### List two ways to get the first li element
```
var listItems = document.getElementsByTagName('li');

listItems[0];

listItems.shift();
```
### How can we set a given element to be hidden?
```
element.style.visibility = "hidden";

element.style.display = "none";


