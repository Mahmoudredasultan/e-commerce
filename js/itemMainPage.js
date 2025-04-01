async function itemPopep(
    arrayImage,
    mainImage,
    nameone = "",
    priceText = "",
    descripText = "",
    list2,
    specList,
    revList,
    arrayVideos,
    id
) {
    popep = document.createElement("div");
    document.body.appendChild(popep);
    popep.className = "popep";

    vars = document.getElementById("poped");
    vars.before(popep);
    cont = document.createElement("div");
    cont.className = "container";
    sec = document.createElement("div");
    sec.className = "section1";
    cont.appendChild(sec);
    popep.appendChild(cont);
    img = document.createElement("div");
    img.className = "img";
    sec.appendChild(img);
    img1 = document.createElement("div");
    img1.className = "img1";
    mainimg = document.createElement("img");
    img.appendChild(img1);
    mainimg.src = mainImage;
    img1.appendChild(mainimg);
    img2 = document.createElement("div");
    img2.className = "img2";
    img.appendChild(img2);
    for (var i = 0; i < arrayImage.length; i++) {
        img3 = document.createElement("img");
        img3.src = arrayImage[i].link;
        img2.appendChild(img3);
    }
    images = document.querySelectorAll(".img2 img");
    for (var n = 0; n < images.length; n++) {
        images[n].onclick = function () {
            mainimg.src = this.src;
        };
    }
    text2 = document.createElement("div");
    text2.className = "text";
    sec.appendChild(text2);
    hhe4 = document.createElement("div");
    hhe4.className = "header1";
    text2.appendChild(hhe4);
    hhead4 = document.createElement("h2");
    headna = document.createTextNode(nameone + ":");
    hhead4.appendChild(headna);
    hprice4 = document.createElement("h2");
    hpricetext = document.createTextNode(priceText);
    hprice4.appendChild(hpricetext);
    hhe4.appendChild(hhead4);
    hhe4.appendChild(hprice4);
    description = document.createElement("div");
    description.className = "description";
    text2.appendChild(description);
    deshead = document.createElement("h3");
    description.appendChild(deshead);
    despar = document.createElement("p");
    description.appendChild(despar);
    desht = document.createTextNode("Description");
    deshead.appendChild(desht);
    destex = document.createTextNode(descripText);
    despar.appendChild(destex);
    if (list2 !== undefined) {
        atrs = document.createElement("div");
        atrs.className = "atrs";
        ul1 = document.createElement("ul");
        atrhead = document.createElement("h3");
        atrt = document.createTextNode("product attributes :");
        atrs.appendChild(atrhead);
        atrhead.appendChild(atrt);
        atrs.appendChild(ul1);
        text2.appendChild(atrs);
        for (var g = 0; g < list2.length; g++) {
            atr = document.createElement("li");
            atr.className = "atr";
            ul1.appendChild(atr);
            atrText = document.createTextNode(
                `${g + 1} - ${list2[g].name} : ${list2[g].value}`
            );
            atr.appendChild(atrText);
        }
    }
    button1 = document.createElement("button");
    buttont1 = document.createTextNode("Cart");
    button1.onclick = function () {
        if (window.localStorage.getItem(`${id}`) !== "true") {
            array7.push(
                `{"link":"${mainImage}","name":"${nameone}","price":"${priceText}"}                                                                                   `
            );

            window.localStorage.setItem("array", array7);
            cartcount += 1;
            document.querySelector(
                ".header .container .icons .cart .conter"
            ).textContent = cartcount;
            button1.classList.add("aded");
            button1.textContent = "added";
            button1.style.backgroundColor = "#00FF00";
            window.localStorage.setItem(id, "true");
        }
    };
    if (window.localStorage.getItem(`${id}`) === "true") {
        button1.classList.add("aded");
        button1.textContent = "added";
        button1.style.backgroundColor = "#00FF00";
    }
    button1.appendChild(buttont1);
    text2.appendChild(button1);
    if (specList !== undefined) {
        spec = document.createElement("div");
        cont.appendChild(spec);
        spec.className = "specifications";
        spech = document.createElement("h1");
        spec.appendChild(spech);
        specht = document.createTextNode("specifications");
        spech.appendChild(specht);
        for (var p = 0; p < specList.length; p++) {
            specpar = document.createElement("div");
            specpar.className = "element";
            spec.appendChild(specpar);
            specp = document.createElement("p");
            specpt = document.createTextNode(
                `${p + 1} - ${specList[p].name} : `
            );
            specp.appendChild(specpt);
            specpar.appendChild(specp);
            specsec = document.createElement("p");
            specpar.appendChild(specsec);
            specsecp = document.createTextNode(specList[p].value);
            specsec.appendChild(specsecp);
        }
    }
    if (revList !== undefined) {
        rev = document.createElement("div");
        rev.className = "review";
        cont.appendChild(rev);
        revh = document.createElement("h1");
        revh.textContent = "reviews :";
        rev.appendChild(revh);

        for (var x = 0; x < revList.length; x++) {
            revBox = document.createElement("div");
            revBox.className = "revBox";
            rev.appendChild(revBox);
            if (typeof revList[x].profile.image === "string") {
                revImg = document.createElement("img");
                revImg.src = revList[x].profile.image;
                revBox.appendChild(revImg);
            } else {
                revImg = document.createElement("i");
                revImg.classList.add("fas");
                revImg.classList.add("fa-user");
                revBox.appendChild(revImg);
            }
            revText = document.createElement("div");
            revText.className = "revText";
            revBox.appendChild(revText);
            revTextHead = document.createElement("div");
            revTextHead.className = "revTextHead";
            revText.appendChild(revTextHead);
            revTextH3 = document.createElement("h3");
            revcont = document.createTextNode(revList[x].profile.name);
            revTextH3.appendChild(revcont);
            revTextHead.appendChild(revTextH3);
            stars = document.createElement("div");
            revTextHead.appendChild(stars);
            stars.className = "stars";
            for (var a = 0; a < revList[x].rating; a++) {
                icon = document.createElement("i");
                icon.classList.add("fas");
                icon.classList.add("fa-star");

                stars.appendChild(icon);
            }
            for (var o = revList[x].rating; o < 5; o++) {
                icon = document.createElement("i");
                icon.classList.add("far");
                icon.classList.add("fa-star");
                stars.appendChild(icon);
            }
            revTextPar = document.createElement("p");
            revcontp = document.createTextNode(revList[x].body);
            revTextPar.appendChild(revcontp);
            revText.appendChild(revTextPar);
        }
    }

    if (arrayVideos !== undefined) {
        vid = document.createElement("div");
        vid.className = "video";
        cont.appendChild(vid);
        vid1 = document.createElement("div");
        vid1.className = "vid1";
        mainvid = document.createElement("video");
        atrvid = document.createAttribute("controls");
        mainvid.setAttributeNode(atrvid);
        vid.appendChild(vid1);
        vid1.appendChild(mainvid);
        vid2 = document.createElement("div");
        vid2.className = "vid2";
        vid.appendChild(vid2);
        for (var z = 0; z < arrayVideos.length; z++) {
            if (z === 0) {
                mainvid.src = arrayVideos[0].link;
                mainvid.poster = arrayVideos[0].thumbnail;
            }
            vid3 = document.createElement("img");
            vid3.setAttribute("data-video", arrayVideos[z].link);
            vid3.src = arrayVideos[z].thumbnail;
            vid2.appendChild(vid3);
        }
        videos = document.querySelectorAll(".vid2 img");
        for (var d = 0; d < videos.length; d++) {
            videos[d].onclick = function () {
                mainvid.src = this.getAttribute("data-video");
                mainvid.poster = this.src;
            };
        }
    }

    botton = document.createElement("div");
    botton.className = "botton";
    bottonText = document.createTextNode("go back");
    botton.appendChild(bottonText);
    document.querySelector(".popep .container").appendChild(botton);
    botton.onclick = function () {
        document.querySelector(".popep").remove();
        if (document.querySelector(".search") !== null) {
            document.querySelector(".header").style.display = "block";
            document.querySelector(".search").style.display = "block";
            document.querySelector(".footer").style.display = "block";
        } else {
            bodych = document.body.children;
            for (var s = 1; s < bodych.length; s++) {
                bodych[s].style.display = "block";
            }
        }
    };
}
async function feachDataForeItem(asin) {
    copy = document.querySelector("#poped").cloneNode(true);
    copy2 = document.querySelector(".header").cloneNode(true);

    bodyArray = document.body.children;
    for (var l = 0; l < bodyArray.length; l++) {
        bodyArray[l].style.display = "none";
    }
    document.querySelector(".whait").style.display = "flex";

    response = await fetch(
        `https://api.asindataapi.com/request?api_key=05A0451844054104854C47AD8F736826&amazon_domain=amazon.com&asin=${asin}&type=product`
    );
    data = await response.json();
    finalData = data.product;

    const preo = finalData.buybox_winner.price.raw || "no price";

    if (finalData.bestsellers_rank !== undefined) {
        cato =
            finalData.bestsellers_rank[1].category ||
            finalData.bestsellers_rank[0].category;
    } else {
        cato = finalData.categories[0].name;
    }
    itemPopep(
        finalData.images,
        finalData.main_image.link,
        cato,
        preo,
        finalData.title,
        finalData.attributes,
        finalData.specifications,
        finalData.top_reviews,
        finalData.videos,
        asin
    );

    document.querySelector(".whait").style.display = "none";
    document.querySelector(".popep").appendChild(copy);
    document.querySelector(".popep .container").before(copy2);
    document.querySelector(".popep .header input").style.display = "none";
    document.querySelectorAll(".popep .header i")[1].style.display = "none";
}
if (window.localStorage.getItem("array") === null) {
    array7 = [];
    cartcount = 0;
    document.querySelector(
        ".header .container .icons .cart .conter"
    ).textContent = cartcount;
} else if (window.localStorage.getItem("array") === "") {
    cartcount = 0;
    window.localStorage.removeItem("array");
    document.querySelector(
        ".header .container .icons .cart .conter"
    ).textContent = cartcount;
    array7 = [];
} else {
    array7 = window.localStorage.getItem("array").split(" ,");

    cartcount = array7.length;
    document.querySelector(
        ".header .container .icons .cart .conter"
    ).textContent = cartcount;
}
ncart = 0;
function setNumberOfCart(price) {
    document.querySelectorAll(" .item .text .info p").forEach(function (el) {
        el.onclick = function () {
            if (
                window.localStorage.getItem(
                    `${el.parentElement.parentElement.parentElement.getAttribute(
                        "data"
                    )}`
                ) !== "true" &&
                el.parentElement.children[0].textContent !== "no price"
            ) {
                array7.push(
                    `{"link":"${el.parentElement.parentElement.parentElement.children[0].children[0].getAttribute(
                        "src"
                    )}","name":"${
                        el.parentElement.parentElement.children[0].textContent
                    }","price":"${
                        el.parentElement.children[0].textContent
                    }","data":"${el.parentElement.parentElement.parentElement.getAttribute(
                        "data"
                    )}"}                                                                                   `
                );

                window.localStorage.setItem("array", array7);
                cartcount += 1;
                document.querySelector(
                    ".header .container .icons .cart .conter"
                ).textContent = cartcount;
                el.classList.add("aded");
                el.textContent = "added";
                el.style.backgroundColor = "#00FF00";
                window.localStorage.setItem(
                    el.parentElement.parentElement.parentElement.getAttribute(
                        "data"
                    ),
                    "true"
                );
            }
        };
    });
}
async function createItem(
    lapel,
    explane,
    price,
    image,
    asine,
    place = ".list"
) {
    main = document.createElement("div");
    main.className = "item";
    main.setAttribute("data", asine);
    imgContainer = document.createElement("div");
    imgContainer.className = "img";
    imgContainer.onclick = function () {
        feachDataForeItem(this.parentElement.getAttribute("data"));
    };
    main.appendChild(imgContainer);
    img = document.createElement("img");
    img.src = image;
    imgContainer.appendChild(img);
    textContener = document.createElement("div");
    textContener.className = "text";
    main.appendChild(textContener);
    h3 = document.createElement("h3");
    h3one = document.createTextNode(lapel);
    h3.appendChild(h3one);
    textContener.appendChild(h3);
    p = document.createElement("p");
    p1text = document.createTextNode(explane);
    p.appendChild(p1text);
    textContener.appendChild(p);
    infoContainer = document.createElement("div");
    infoContainer.className = "info";
    textContener.appendChild(infoContainer);
    h3Info = document.createElement("h3");
    h32text = document.createTextNode(price);
    h3Info.appendChild(h32text);
    infoContainer.appendChild(h3Info);
    pInfo = document.createElement("p");
    p2text = document.createTextNode("add cart");
    pInfo.appendChild(p2text);
    infoContainer.appendChild(pInfo);
    if (
        window.localStorage.getItem(`${main.getAttribute("data")}`) === "true"
    ) {
        pInfo.textContent = "added";
        pInfo.style.backgroundColor = "#00FF00";
    }
    if (price === "no price") {
        pInfo.style.backgroundColor = "red";
        pInfo.textContent = "can,t pay";
        pInfo.style.width = "auto";
    }
    document.querySelector(place).appendChild(main);
    setNumberOfCart(price);
}
async function jsonitems(link) {
    response = await fetch(link);
    data = await response.json();
    return data;
}
itemscounter = 0;
async function itemsData() {
    botagas = await jsonitems("../json/botagas.json");
    cars = await jsonitems("../json/cars.json");
    clothes = await jsonitems("../json/clothes.json");
    computers = await jsonitems("../json/computers.json");
    fan = await jsonitems("../json/fan.json");
    fridge = await jsonitems("../json/Fridge.json");
    furniture = await jsonitems("../json/Furniture.json");
    icebox = await jsonitems("../json/icebox.json");
    gaming = await jsonitems("../json/list_gaming_labtops.json");
    phone = await jsonitems("../json/phone.json");
    television = await jsonitems("../json/Television.json");
    array = await [
        ...botagas,
        ...cars,
        ...clothes,
        ...computers,
        ...fan,
        ...fridge,
        ...furniture,
        ...icebox,
        ...gaming,
        ...phone,
        ...television
    ];

    return [array, computers, clothes, gaming, phone];
}
async function shuffleArray() {
    [array, computers, clothes, gaming, phone] = await itemsData();
    for (let i = (await array.length) - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = await [array[j], array[i]]; // تبديل العناصر
    }
    return [array, computers, clothes, gaming, phone];
}
async function appendData() {
    [array, computers, clothes, gaming, phone] = await shuffleArray();

    arrays = [];
    for (var j = 0; j < Math.floor(array.length / 6); j++) {
        bigarray = [];
        for (var h = 0; h < 6; h++) {
            bigarray.push(array.pop());
        }
        arrays.push(bigarray);
    }

    array = arrays[itemscounter];
    for (var i = 0; i < array.length; i++) {
        titlep = await array[i].title.split("");
        if (titlep.length > 100) {
            titlep.length = 100;
            titlep.join("");
        }
        if (array[i].price !== null) {
            priceg = array[i]["price"].split("");
            if (priceg.length > 15) {
                priceg = "no price";
            } else {
                priceg = priceg.join("");
            }
        } else {
            priceg = "no price";
        }

        createItem(
            array[i].category,
            titlep.join(""),
            priceg,
            array[i].image,
            array[i].asin
        );
    }
    return [arrays, computers, clothes, gaming, phone];
}
async function refreshData() {
    [rem, computers, clothes, gaming, phone] = await appendData();
    my = arrays;
    newAndBack(my);
    document.querySelector(".list .btncont .back").onclick = function () {
        if (itemscounter > 0) {
            items = document.querySelectorAll(".showitems .list .item");
            itemscounter -= 1;
            cloth = rem[itemscounter];
            for (var j = 0; j < items.length; j++) {
                items[j].remove();
            }
            for (var i = 0; i < cloth.length; i++) {
                titlep = cloth[i].title.split("");
                if (titlep.length > 100) {
                    titlep.length = 100;
                    titlep.join("");
                }
                if (cloth[i].price !== null) {
                    priceg = cloth[i]["price"].split("");
                    if (priceg.length > 15) {
                        priceg = "no price";
                    } else {
                        priceg = priceg.join("");
                    }
                } else {
                    priceg = "no price";
                }

                createItem(
                    cloth[i].category,
                    titlep.join(""),
                    priceg,
                    cloth[i].image,
                    cloth[i].asin
                );
            }
        }
    };
    return [rem, computers, clothes, gaming, phone];
}
async function handel(array) {
    arrays = [];
    for (var j = 0; j < Math.floor(array.length / 6); j++) {
        bigarray = [];
        for (var h = 0; h < 6; h++) {
            bigarray.push(array.pop());
        }
        arrays.push(bigarray);
    }
    return arrays;
}
/*bottom*/
function newAndBack(arrays) {
    document.querySelector(".list .btncont .new").onclick = function () {
        if (itemscounter < arrays.length - 1) {
            items = document.querySelectorAll(".showitems .list .item");
            itemscounter += 1;
            array = arrays[itemscounter];
            for (var j = 0; j < items.length; j++) {
                items[j].remove();
            }
            for (var i = 0; i < array.length; i++) {
                titlep = array[i].title.split("");
                if (titlep.length > 100) {
                    titlep.length = 100;
                    titlep.join("");
                }
                if (array[i].price !== null) {
                    priceg = array[i]["price"].split("");
                    if (priceg.length > 15) {
                        priceg = "no price";
                    } else {
                        priceg = priceg.join("");
                    }
                } else {
                    priceg = "no price";
                }
                createItem(
                    array[i].category,
                    titlep.join(""),
                    priceg,
                    array[i].image,
                    array[i].asin
                );
            }
        }
    };

    document.querySelector(".list .btncont .back").onclick = function () {
        if (itemscounter > 0) {
            items = document.querySelectorAll(".showitems .list .item");
            itemscounter -= 1;
            array = arrays[itemscounter];
            for (var j = 0; j < items.length; j++) {
                items[j].remove();
            }
            for (var i = 0; i < array.length; i++) {
                titlep = array[i].title.split("");
                if (titlep.length > 100) {
                    titlep.length = 100;
                    titlep.join("");
                }
                if (array[i].price !== null) {
                    priceg = array[i]["price"].split("");
                    if (priceg.length > 15) {
                        priceg = "no price";
                    } else {
                        priceg = priceg.join("");
                    }
                } else {
                    priceg = "no price";
                }

                createItem(
                    array[i].category,
                    titlep.join(""),
                    priceg,
                    array[i].image,
                    array[i].asin
                );
            }
        }
    };
}
/*bottom*/
async function filtring() {
    [arrays, computers, clothes, gaming, phone] = await refreshData();
    random = arrays;
    cloth = await handel(clothes);
    computer = await handel(computers);
    laptop = await handel(gaming);
    telefone = await handel(phone);
    activeElements = document.querySelectorAll(".showitems .container ul li");
    activeElements.forEach(function (el) {
        el.onclick = function () {
            itemscounter = 0;
            items = document.querySelectorAll(".showitems .list .item");
            for (var j = 0; j < items.length; j++) {
                items[j].remove();
            }
            activeElements.forEach(function (ele) {
                ele.classList.remove("active");
            });
            el.classList.add("active");
            if (el.getAttribute("filter") === "electronics") {
                array = computer[itemscounter];
                for (var i = 0; i < array.length; i++) {
                    titlep = array[i].title.split("");
                    if (titlep.length > 100) {
                        titlep.length = 100;
                        titlep.join("");
                    }
                    if (array[i].price !== null) {
                        priceg = array[i]["price"].split("");
                        if (priceg.length > 15) {
                            priceg = "no price";
                        } else {
                            priceg = priceg.join("");
                        }
                    } else {
                        priceg = "no price";
                    }

                    createItem(
                        array[i].category,
                        titlep.join(""),
                        priceg,
                        array[i].image,
                        array[i].asin
                    );
                }
                newAndBack(computer);
            }
            if (el.getAttribute("filter") === "clothes") {
                array = cloth[itemscounter];
                for (var i = 0; i < array.length; i++) {
                    titlep = array[i].title.split("");
                    if (titlep.length > 100) {
                        titlep.length = 100;
                        titlep.join("");
                    }
                    if (array[i].price !== null) {
                        priceg = array[i]["price"].split("");
                        if (priceg.length > 15) {
                            priceg = "no price";
                        } else {
                            priceg = priceg.join("");
                        }
                    } else {
                        priceg = "no price";
                    }

                    createItem(
                        array[i].category,
                        titlep.join(""),
                        priceg,
                        array[i].image,
                        array[i].asin
                    );
                }
                newAndBack(cloth);
            }
            if (el.getAttribute("filter") === "labtop") {
                array = laptop[itemscounter];
                for (var i = 0; i < array.length; i++) {
                    titlep = array[i].title.split("");
                    if (titlep.length > 100) {
                        titlep.length = 100;
                        titlep.join("");
                    }
                    if (array[i].price !== null) {
                        priceg = array[i]["price"].split("");
                        if (priceg.length > 15) {
                            priceg = "no price";
                        } else {
                            priceg = priceg.join("");
                        }
                    } else {
                        priceg = "no price";
                    }

                    createItem(
                        array[i].category,
                        titlep.join(""),
                        priceg,
                        array[i].image,
                        array[i].asin
                    );
                }
                newAndBack(laptop);
            }
            if (el.getAttribute("filter") === "phone") {
                array = telefone[itemscounter];
                for (var i = 0; i < array.length; i++) {
                    titlep = array[i].title.split("");
                    if (titlep.length > 100) {
                        titlep.length = 100;
                        titlep.join("");
                    }
                    if (array[i].price !== null) {
                        priceg = array[i]["price"].split("");
                        if (priceg.length > 15) {
                            priceg = "no price";
                        } else {
                            priceg = priceg.join("");
                        }
                    } else {
                        priceg = "no price";
                    }

                    createItem(
                        array[i].category,
                        titlep.join(""),
                        priceg,
                        array[i].image,
                        array[i].asin
                    );
                }
                newAndBack(telefone);
            }
            if (el.getAttribute("filter") === "all") {
                array = random[itemscounter];
                for (var i = 0; i < array.length; i++) {
                    titlep = array[i].title.split("");
                    if (titlep.length > 100) {
                        titlep.length = 100;
                        titlep.join("");
                    }
                    if (array[i].price !== null) {
                        priceg = array[i]["price"].split("");
                        if (priceg.length > 15) {
                            priceg = "no price";
                        } else {
                            priceg = priceg.join("");
                        }
                    } else {
                        priceg = "no price";
                    }

                    createItem(
                        array[i].category,
                        titlep.join(""),
                        priceg,
                        array[i].image,
                        array[i].asin
                    );
                }
                newAndBack(random);
            }
        };
    });
}
filtring();
async function search(catigary) {
    document.querySelector(".whait").style.display = "flex";
    link = `https://api.asindataapi.com/request?api_key=05A0451844054104854C47AD8F736826&type=search&amazon_domain=amazon.com&search_term=${catigary}&output=json`;
    response = await fetch(link);
    maindata = await response.json();
    data = await maindata.search_results;
    main = document.createElement("div");
    main.className = "search";
    document.body.children[3].style.display = "none";
    document.body.children[2].style.display = "none";
    document.body.children[4].style.display = "none";
    document.querySelector(".header").after(main);
    container = document.createElement("div");
    container.className = "container";
    main.appendChild(container);
    list = document.createElement("div");
    list.className = "list1";
    container.appendChild(list);

    for (var i = 0; i < data.length; i++) {
        titlep = data[i].title.split("");
        if (titlep.length > 100) {
            titlep.length = 100;
            titlep.join("");
        }
        if (data[i].price !== null && data[i].price !== undefined) {
            priceg = data[i].price.raw.split("");
            if (priceg.length > 15) {
                priceg = "no price";
            } else {
                priceg = priceg.join("");
            }
        } else {
            priceg = "no price";
        }
        createItem(
            catigary,
            titlep.join(""),
            priceg,
            data[i].image,
            data[i].asin,
            ".list1"
        );
    }
    btn8 = document.createElement("p");
    btn8.className = "btn";
    btn8.textContent = "go back";
    list.after(btn8);
    btn8.onclick = function () {
        document.querySelector(".search").remove();
        document.body.children[2].style.display = "block";
        document.body.children[3].style.display = "block";
        document.body.children[4].style.display = "block";
    };
    document.querySelector(".whait").style.display = "none";
}
function clickedSearch() {
    document.querySelector(".icons .input button").onclick = function () {
        search(document.querySelector(".icons .input input").value);
    };
}
async function sendCategarySelected() {
    elements = document.querySelectorAll(".sumaru .box .categares .categare");
    for (var i = 0; i < elements.length; i++) {
        elements[i].onclick = function () {
            name = this.textContent
                .split("-")[1]
                .split("")
                .slice(1)
                .slice(0, -7)
                .join("");
            search(name);
        };
    }
}
clickedSearch();
sendCategarySelected();
