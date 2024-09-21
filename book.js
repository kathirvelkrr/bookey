
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var add1 = document.querySelector(".add-button")

add1.addEventListener("click",function(){
    popupbox.style.display="block"
    popupoverlay.style.display="block"
})
  

var cancelbutton=document.getElementById("Cancel-book")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var addbook=document.getElementById("Add-book")
addbook.addEventListener("click",function(event){
    event.preventDefault()
})


//contaiber

// book-title,book-author,book-description,Add-book,Cancel-book
var booktitle=document.getElementById("book-title");
var boolauthor=document.getElementById("book-author");
var bookdescription=document.getElementById("book-description");
var addbook=document.getElementById("Add-book");
var container=document.querySelector(".container")


addbook.addEventListener("click",function(){
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2> 
    <h5>${boolauthor.value}</h5>
    <p>
        ${bookdescription.value}
    </p> <button onclick="deletee(event)"> Delete</button>`
   
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"


})


 function deletee(event){
    event.target.parentElement.remove()
}



