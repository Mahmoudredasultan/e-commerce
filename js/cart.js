let tirn = true
async function create(link="",name="",price="",data="") {
  let item=document.createElement("div")
  item.className="item"
  let mainPrice=price
  let num=1
  let imgd=document.createElement("div")
  imgd.className="img"
  item.appendChild(imgd)
  let img=document.createElement("img")
  img.src=link
  imgd.appendChild(img)
  let text=document.createElement("div")
  text.className="text"
  item.appendChild(text)
  let cont1=document.createElement("div")
  cont1.className="cont1"
  text.appendChild(cont1)
  let h51=document.createElement("h5")
  cont1.appendChild(h51)
  let ht51=document.createTextNode(name)
  h51.appendChild(ht51)
  let icons=document.createElement("div")
  icons.className="icons"
  cont1.appendChild(icons)
  let s1=document.createElement("span")
  icons.appendChild(s1)
  s1.onclick=function () {
    if (num > 1) {
      num -= 1
      s2.textContent = num
      mainPrice = ["$ ",(Number((h25.textContent).split("$")[1])-Number(price.split("$")[1])).toFixed(2)].join("")
      h25.textContent = mainPrice
      var prie = document.querySelector(".total h2")
      prie.textContent = ["$", (Number(prie.textContent.split("$")[1]) - Number(price.split("$")[1])).toFixed(2)].join("")
    }
  }
  let s1t=document.createTextNode("-")
  s1.appendChild(s1t)
  let s2=document.createElement("span")
  icons.appendChild(s2)
  
  let s3=document.createElement("span")
  s3.onclick=function () {
    num+=1
    
    s2.textContent=num
    mainPrice=["$",(num*(Number(price.split("$")[1]))).toFixed(2).toString()].join("")
    h25.textContent=mainPrice
    var prie = document.querySelector(".total h2")
    prie.textContent=["$",(Number(prie.textContent.split("$")[1])+Number(price.split("$")[1])).toFixed(2)].join("")
    
  }
  icons.appendChild(s3)
  let st2 = document.createTextNode(num)
  s2.appendChild(st2)
  let st3=document.createTextNode("+")
  s3.appendChild(st3)
  let cont2=document.createElement("div")
  cont2.className="cont2"
  text.appendChild(cont2)
  let h25=document.createElement("h5")
  cont2.appendChild(h25)
  
  let ht25=document.createTextNode(mainPrice)
  h25.appendChild(ht25)
  let sp=document.createElement("span")
  cont2.appendChild(sp)
  let i=document.createElement("i")
  sp.appendChild(i)
  i.classList.add("fa-solid")
  i.classList.add("fa-trash-arrow-up")
  document.querySelector(".cart .container .items").appendChild(item)
  i.onclick=function () {
    
    window.localStorage.removeItem(data)
    var ignored =Number(this.parentElement.parentElement.children[0].textContent.split("$")[1])
    var tools = Number(document.querySelector(".total h2").textContent.split("$")[1])
    var newTotal =document.querySelector(".total h2").textContent=`$${(tools - ignored).toFixed(2)}`
    
    
    var array12=window.localStorage.getItem("array").split(" ,")
    
    
    var final=[]
    for (var ml = 0; ml < array12.length; ml++) {
      var obj = JSON.parse(array12[ml])
      if(obj.link !== this.parentElement.parentElement.parentElement.parentElement.children[0].children[0].src){
        final.push(`{"link":"${obj.link}","name":"${obj.name}","price":"${obj.price}"}                                                                                   `)
      }
    }
    window.localStorage.setItem("array", final)
    var log=this.parentElement.parentElement.parentElement.parentElement
    if(tirn){
      log.style.cssText = "position:relative;left:100%;"
      setTimeout(function() {
        log.style.cssText = "display:none;"
      }, 400)
      tirn=false
    } else {
      log.style.cssText = "position:relative;left:-100%;"
      setTimeout(function() {
        log.style.cssText = "display:none;"
      }, 400)
      tirn = true
    }
  }
}
async function show() {
  var array = window.localStorage.getItem("array")
  if (array !== null) {
    let ar = array.split(" ,")
    for (var i = 0; i < ar.length; i++) {
      var ob = JSON.parse(ar[i])
      var oky = ob.price.split(",").join("")
    
      create(ob.link, ob.name, oky,ob.data)
    }
  }
  return 1
}
async function total() {
  let my = await show()
  let pri = document.querySelector(".total h2")
  let array9=document.querySelectorAll(".cart .item .text .cont2 h5")
  let gulp=0
  for (var i = 0; i < array9.length; i++) {
    var ber=Number((array9[i].textContent).split("$")[1])
    gulp=gulp+ber
  }
  pri.textContent=["$ ",gulp.toFixed(2)].join("")
  return 1
}
total()
