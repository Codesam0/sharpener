doc1 = document.getElementById("main-header")
doc1.style.borderBottom = " solid 3px black "
doc2 = document.getElementsByClassName(" title ")
doc2[0].style.color = " orange "
doc3 = document.getElementsByClassName("list-group-item")
doc3[1].style.backgroundColor = "red"
for ( i=0 ; i<doc3.length ; i++){
    doc3[i].style.fontWeight = "bold"
}
doc4 = document.getElementById("items")
li = document.createElement("li")
li.textContent = " item 5 "
doc4.append(li)
newli = document.getElementsByTagName("li")
newli[4].style.fontWeight = "bold"
