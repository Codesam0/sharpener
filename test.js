// doc1 = document.getElementById("main-header")
// doc1.style.borderBottom = " solid 3px black "
// newli = document.getElementsByTagName(" li ")
// newli[4].style.fontWeight = " bold "
// secondele = document.querySelector('.list-group-item:nth-child(2)');
// secondele.style.color = "red"
// Using QuerySelectorALL change the font color to green for 2nd item in the item list
// Choose all the odd elements and make their background green using QuerySelectorALL﻿

// secondele = document.querySelector('.list-group-item:nth-child(3)');
// console.log(secondele)
// secondele.style.color = "red";

// secondele = document.querySelector('.list-group-item:nth-child(3)');
// console.log(secondele)
// secondele.style.color = "white";
secquery = document.querySelectorAll(".list-group-item")
secquery[1].style.color = "green"
odd = document.querySelectorAll(".list-group-item:nth-child(odd")
for(i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = "green"
}
