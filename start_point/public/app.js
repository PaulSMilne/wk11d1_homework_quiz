window.onload = function(){

var catList = document.createElement('ul');
catList.classList.add('cat');

var nameItem = document.createElement('li');
nameItem.innerText = "Name: Minnie";

var foodItem = document.createElement('li');
foodItem.innerText = "Favorite food: Electrical cables";

var catPic = document.createElement('img');
catPic.src = "images/minnie.jpg";
catPic.width = "500"

catList.appendChild(nameItem);
catList.appendChild(foodItem);
catList.appendChild(catPic);

var cats = document.querySelector('#cats');
cats.appendChild(catList);

}