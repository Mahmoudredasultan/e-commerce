



count = 0

images=["../images/product-01.jpg","../images/product-02.jpg","../images/product-03.jpg","../images/product-04.jpg","../images/product-05.jpg","../images/product-06.jpg","../images/product-08.jpg","../images/product-09.jpg","../images/product-10.jpg","../images/product-12.jpg","../images/product-13.jpg","../images/product-14.jpg","../images/product-15.jpg","../images/product-16.jpg" ]

setInterval(function () {
  
  backgroundImage.src=images[Math.floor(Math.random()*images.length)]
},6000)
function butomFilter() {
  btncont = document.createElement("div")
  btncont.className = "btncont"
  botton1 = document.createElement("h5")
  botton1.className = "back"
  bottonText1 = document.createTextNode("back")
  btncont.appendChild(botton1)
  botton1.appendChild(bottonText1)
  botton2 = document.createElement("h5")
  bottonText2 = document.createTextNode("New")
  botton2.className = "new"
  botton2.appendChild(bottonText2)
  btncont.appendChild(botton2)
  document.querySelector(".list").appendChild(btncont)
}
document.querySelector(".container .icons .ser i").onclick=function () {
  document.querySelector("input").focus()
}

butomFilter()