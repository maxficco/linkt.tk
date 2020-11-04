let website1;
let website2;
let website3;
let website4;
let website5;
let website6;
let website7;
let website8;
let website9;
let href1;
let href2;
let href3;
let href4;
let href5;
let href6;
let href7;
let href8;
let href9;
let urlString;

var myVar = setInterval(myTimer, 900);
function myTimer() {
  if (document.getElementById("test").innerHTML == "_") {
    document.getElementById("test").innerHTML = "   ";
  } else {
    document.getElementById("test").innerHTML = "_";
  }
}

var myVar2 = setInterval(myTimer2, 900);

function myTimer2() {
  if (document.getElementById("test2").innerHTML == "_") {
    document.getElementById("test2").innerHTML = "   ";
  } else {
    document.getElementById("test2").innerHTML = "_";
  }
}

var myVar3 = setInterval(myTimer3, 900);


function myTimer3() {
  if (document.getElementById("test3").innerHTML == ".") {
    document.getElementById("test3").innerHTML = "..";
  } else if (document.getElementById("test3").innerHTML == "..") {
    document.getElementById("test3").innerHTML = "...";
  } else if (document.getElementById("test3").innerHTML == "...") {
    document.getElementById("test3").innerHTML = "";
  } else {
    document.getElementById("test3").innerHTML = ".";
  }
}

var z = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;

var txt = "your save link:";
var txt1 = "$ linkt.tk: a custom taskbar for saving website links!";
var txt2 = "$ made by: max ficco 07-2020";
var txt3 = "$ how to use: ↓ enter your favorite websites and click the button! ↓";
var txt4 = "$ to share: ↓ click the other button! ↓";
var txt5 = "more projects: ";
var txt6 = "github: ";
var speed = 40;

function type() {
  if (z < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(z);
    z++;
    setTimeout(type, speed);
  }
}
function type1() {
  if (a < txt1.length) {
    document.getElementById("type1").innerHTML += txt1.charAt(a);
    a++;
    setTimeout(type1, speed);
  }
}
function type2() {
  if (b < txt2.length) {
    document.getElementById("type2").innerHTML += txt2.charAt(b);
    b++;
    setTimeout(type2, speed);
  }
}
function type3() {
  if (c < txt3.length) {
    document.getElementById("type3").innerHTML += txt3.charAt(c);
    c++;
    setTimeout(type3, speed);
  }
}
function type4() {
  if (d < txt4.length) {
    document.getElementById("type4").innerHTML += txt4.charAt(d);
    d++;
    setTimeout(type4, speed);
  }
}
function type5() {
  if (e < txt5.length) {
    document.getElementById("type5").innerHTML += txt5.charAt(e);
    e++;
    setTimeout(type5, speed);
  }
}
function type6() {
  if (f < txt6.length) {
    document.getElementById("type6").innerHTML += txt6.charAt(f);
    f++;
    setTimeout(type6, speed);
  }
}

function gogogo() {
  setTimeout(type1, 1000);
  setTimeout(type2, 3000);
  setTimeout(type3, 5000);
  setTimeout(type4, 8000);
  setTimeout(type5, 10000);
  setTimeout(type6, 10000);
  setTimeout(type, 10000);
}

gogogo();

//ANIMATION STUFF ABOVE^^^

function is_url(str) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}

let myurl;

function biggofunc() {
  myurl = document.getElementById("textbox").value;
  document.getElementById("textbox").value = "";
  let yesno = is_url(myurl);

  if (yesno == true) {
    console.log("yes");
    if (
      myurl.substring(0, 7) == "http://" ||
      myurl.substring(0, 8) == "https://"
    ) {
      console.log(myurl);
    } else {
      myurl = "http://" + myurl;
      console.log(myurl);
    }

    let parser = document.createElement("a");
    parser.href = myurl;
    let myurlname = parser.hostname; // => "example.com"
    if (myurlname.substring(0, 4) == "www.") {
      myurlname = myurlname.substring(4);
    }
    console.log(myurlname);

    if (document.getElementById("one").innerHTML == "") {
      document.getElementById("one").innerHTML = myurlname;
      document.getElementById("one").href = myurl;
      document.getElementById("deletebutton").style.opacity = 1;
      document.getElementById("img1").src =
        "http://icons.duckduckgo.com/ip2/" + myurlname + ".ico";
    } else if (document.getElementById("two").innerHTML == "") {
      document.getElementById("two").innerHTML = myurlname;
      document.getElementById("two").href = myurl;
      document.getElementById("deletebutton").style.opacity = 1;
      document.getElementById("img2").src =
        "http://icons.duckduckgo.com/ip2/" + myurlname + ".ico";
    } else if (document.getElementById("three").innerHTML == "") {
      document.getElementById("three").innerHTML = myurlname;
      document.getElementById("three").href = myurl;
      document.getElementById("deletebutton").style.opacity = 1;
      document.getElementById("img3").src =
        "http://icons.duckduckgo.com/ip2/" + myurlname + ".ico";
    } else if (document.getElementById("four").innerHTML == "") {
      document.getElementById("four").innerHTML = myurlname;
      document.getElementById("four").href = myurl;
      document.getElementById("deletebutton").style.opacity = 1;
      document.getElementById("img4").src =
        "http://icons.duckduckgo.com/ip2/" + myurlname + ".ico";
    } else if (document.getElementById("five").innerHTML == "") {
      document.getElementById("five").innerHTML = myurlname;
      document.getElementById("five").href = myurl;
      document.getElementById("deletebutton").style.opacity = 1;
      document.getElementById("img5").src =
        "http://icons.duckduckgo.com/ip2/" + myurlname + ".ico";
    } else if (document.getElementById("six").innerHTML == "") {
      document.getElementById("six").innerHTML = myurlname;
      document.getElementById("six").href = myurl;
      document.getElementById("deletebutton").style.opacity = 1;
      document.getElementById("img6").src =
        "http://icons.duckduckgo.com/ip2/" + myurlname + ".ico";
    } else if (document.getElementById("seven").innerHTML == "") {
      document.getElementById("seven").innerHTML = myurlname;
      document.getElementById("seven").href = myurl;
      document.getElementById("deletebutton").style.opacity = 1;
      document.getElementById("img7").src =
        "http://icons.duckduckgo.com/ip2/" + myurlname + ".ico";
    } else if (document.getElementById("eight").innerHTML == "") {
      document.getElementById("eight").innerHTML = myurlname;
      document.getElementById("eight").href = myurl;
      document.getElementById("deletebutton").style.opacity = 1;
      document.getElementById("img8").src =
        "http://icons.duckduckgo.com/ip2/" + myurlname + ".ico";
    } else if (document.getElementById("nine").innerHTML == "") {
      document.getElementById("nine").innerHTML = myurlname;
      document.getElementById("nine").href = myurl;
      document.getElementById("deletebutton").style.opacity = 1;
      document.getElementById("img9").src =
        "http://icons.duckduckgo.com/ip2/" + myurlname + ".ico";
    } else {
      alert("You Have Reached the Maximum Amount of Links!");
    }
    website1 = document.getElementById("one").innerHTML;
    href1 = document.getElementById("one").href;
    localStorage.setItem("website1one", website1);
    localStorage.setItem("href1one", href1);
    website2 = document.getElementById("two").innerHTML;
    href2 = document.getElementById("two").href;
    localStorage.setItem("website2two", website2);
    localStorage.setItem("href2two", href2);
    website3 = document.getElementById("three").innerHTML;
    href3 = document.getElementById("three").href;
    localStorage.setItem("website3three", website3);
    localStorage.setItem("href3three", href3);
    website4 = document.getElementById("four").innerHTML;
    href4 = document.getElementById("four").href;
    localStorage.setItem("website4four", website4);
    localStorage.setItem("href4four", href4);
    website5 = document.getElementById("five").innerHTML;
    href5 = document.getElementById("five").href;
    localStorage.setItem("website5five", website5);
    localStorage.setItem("href5five", href5);
    website6 = document.getElementById("six").innerHTML;
    href6 = document.getElementById("six").href;
    localStorage.setItem("website6six", website6);
    localStorage.setItem("href6six", href6);
    website7 = document.getElementById("seven").innerHTML;
    href7 = document.getElementById("seven").href;
    localStorage.setItem("website7seven", website7);
    localStorage.setItem("href7seven", href7);
    website8 = document.getElementById("eight").innerHTML;
    href8 = document.getElementById("eight").href;
    localStorage.setItem("website8eight", website8);
    localStorage.setItem("href8eight", href8);
    website9 = document.getElementById("nine").innerHTML;
    href9 = document.getElementById("nine").href;
    localStorage.setItem("website9nine", website9);
    localStorage.setItem("href9nine", href9);
    console.log(localStorage.website1one);
    console.log(localStorage.href1one);
    let urlString =
      "https://linkt.tk?website1=" +
      website1 +
      "&href1=" +
      href1 +
      "&website2=" +
      website2 +
      "&href2=" +
      href2 +
      "&website3=" +
      website3 +
      "&href3=" +
      href3 +
      "&website4=" +
      website4 +
      "&href4=" +
      href4 +
      "&website5=" +
      website5 +
      "&href5=" +
      href5 +
      "&website6=" +
      website6 +
      "&href6=" +
      href6 +
      "&website7=" +
      website7 +
      "&href7=" +
      href7 +
      "&website8=" +
      website8 +
      "&href8=" +
      href8 +
      "&website9=" +
      website9 +
      "&href9=" +
      href9;
    document.getElementById("hide").innerHTML = urlString;
  } else {
    console.log("no");
    alert("Please Enter A Valid URL!");
  }
}

function delet() {
  document.getElementById("b1").style.display = "inline";
  document.getElementById("b2").style.display = "inline";
  document.getElementById("b3").style.display = "inline";
  document.getElementById("b4").style.display = "inline";
  document.getElementById("b5").style.display = "inline";
  document.getElementById("b6").style.display = "inline";
  document.getElementById("b7").style.display = "inline";
  document.getElementById("b8").style.display = "inline";
  document.getElementById("b9").style.display = "inline";
}
function b1() {
  document.getElementById("img1").src = "";
  document.getElementById("one").innerHTML = "";
  document.getElementById("one").href = "";
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "none";
  document.getElementById("b4").style.display = "none";
  document.getElementById("b5").style.display = "none";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b7").style.display = "none";
  document.getElementById("b8").style.display = "none";
  document.getElementById("b9").style.display = "none";
}
function b2() {
  document.getElementById("img2").src = "";
  document.getElementById("two").innerHTML = "";
  document.getElementById("two").href = "";
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "none";
  document.getElementById("b4").style.display = "none";
  document.getElementById("b5").style.display = "none";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b7").style.display = "none";
  document.getElementById("b8").style.display = "none";
  document.getElementById("b9").style.display = "none";
}
function b3() {
  document.getElementById("img3").src = "";
  document.getElementById("three").innerHTML = "";
  document.getElementById("three").href = "";
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "none";
  document.getElementById("b4").style.display = "none";
  document.getElementById("b5").style.display = "none";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b7").style.display = "none";
  document.getElementById("b8").style.display = "none";
  document.getElementById("b9").style.display = "none";
}
function b4() {
  document.getElementById("img4").src = "";
  document.getElementById("four").innerHTML = "";
  document.getElementById("four").href = "";
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "none";
  document.getElementById("b4").style.display = "none";
  document.getElementById("b5").style.display = "none";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b7").style.display = "none";
  document.getElementById("b8").style.display = "none";
  document.getElementById("b9").style.display = "none";
}
function b5() {
  document.getElementById("img5").src = "";
  document.getElementById("five").innerHTML = "";
  document.getElementById("five").href = "";
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "none";
  document.getElementById("b4").style.display = "none";
  document.getElementById("b5").style.display = "none";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b7").style.display = "none";
  document.getElementById("b8").style.display = "none";
  document.getElementById("b9").style.display = "none";
}
function b6() {
  document.getElementById("img6").src = "";
  document.getElementById("six").innerHTML = "";
  document.getElementById("six").href = "";
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "none";
  document.getElementById("b4").style.display = "none";
  document.getElementById("b5").style.display = "none";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b7").style.display = "none";
  document.getElementById("b8").style.display = "none";
  document.getElementById("b9").style.display = "none";
}
function b7() {
  document.getElementById("img7").src = "";
  document.getElementById("seven").innerHTML = "";
  document.getElementById("seven").href = "";
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "none";
  document.getElementById("b4").style.display = "none";
  document.getElementById("b5").style.display = "none";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b7").style.display = "none";
  document.getElementById("b8").style.display = "none";
  document.getElementById("b9").style.display = "none";
}
function b8() {
  document.getElementById("img8").src = "";
  document.getElementById("eight").innerHTML = "";
  document.getElementById("eight").href = "";
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "none";
  document.getElementById("b4").style.display = "none";
  document.getElementById("b5").style.display = "none";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b7").style.display = "none";
  document.getElementById("b8").style.display = "none";
  document.getElementById("b9").style.display = "none";
}
function b9() {
  document.getElementById("img9").src = "";
  document.getElementById("nine").innerHTML = "";
  document.getElementById("nine").href = "";
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "none";
  document.getElementById("b4").style.display = "none";
  document.getElementById("b5").style.display = "none";
  document.getElementById("b6").style.display = "none";
  document.getElementById("b7").style.display = "none";
  document.getElementById("b8").style.display = "none";
  document.getElementById("b9").style.display = "none";
}

function copyfunc() {
  let copyText = document.getElementById("hide");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied!");
}

const queryString = window.location.search;
console.log(queryString);
if (queryString == "") {
  // do nothing
  document.getElementById("deletebutton").style.opacity = 1;
  if (localStorage.getItem("website1one") == "undefined") { website1 = ""
  } else {website1 = localStorage.getItem("website1one");}
  if (localStorage.getItem("href1one") == "undefined") { href1 = ""
  } else {href1 = localStorage.getItem("href1one");}
  
  if (localStorage.getItem("website2two") == "undefined") { website2 = ""
  } else { website2 = localStorage.getItem("website2two")}
  if (localStorage.getItem("website2two") == "undefined") {  href2 = ""
  } else { href2 = localStorage.getItem("website2two");}
  
  if (localStorage.getItem("website3three") == "undefined") { website3 = ""
  } else { website3 = localStorage.getItem("website3three");}
  if (localStorage.getItem("href3three") == "undefined") {  href3 = ""
  } else { href3 = localStorage.getItem("href3three");}
  
  if (localStorage.getItem("website4four") == "undefined") { website4 = ""
  } else { website4 = localStorage.getItem("website4four")}
  if (localStorage.getItem("href4four") == "undefined") {  href4 = ""
  } else { href4 = localStorage.getItem("href4four");}
  
  if (localStorage.getItem("website5five") == "undefined") { website5 = ""
  } else { website5 = localStorage.getItem("website5five");}
  if (localStorage.getItem("href5five") == "undefined") {  href5 = ""
  } else { href5 = localStorage.getItem("href5five");}
  
  if (localStorage.getItem("website6six") == "undefined") { website6 = ""
  } else { website6 = localStorage.getItem("website6six");}
  if (localStorage.getItem("href6six") == "undefined") {  href6 = ""
  } else { href6 = localStorage.getItem("href6six");}
  
  if (localStorage.getItem("website7seven") == "undefined") { website7 = ""
  } else { website7 = localStorage.getItem("website7seven");}
  if (localStorage.getItem("href7seven") == "undefined") {  href7 = ""
  } else { href7 = localStorage.getItem("href7seven");}
  
  if (localStorage.getItem("website8eight") == "undefined") { website8 = ""
  } else { website8 = localStorage.getItem("website8eight");}
  if (localStorage.getItem("href8eight") == "undefined") {  href8 = ""
  } else { href8 = localStorage.getItem("href8eight");}
  
  if (localStorage.getItem("website9nine") == "undefined") { website9 = ""
  } else { website9 = localStorage.getItem("website9nine");}
  if (localStorage.getItem("href9nine") == "undefined") {  href9 = ""
  } else { href9 = localStorage.getItem("href9nine");}

  
  
  document.getElementById("one").innerHTML = website1;
  document.getElementById("one").href = href1;
  document.getElementById("two").innerHTML = website2;
  document.getElementById("two").href = href2;
  document.getElementById("three").innerHTML = website3;
  document.getElementById("three").href = href3;
  document.getElementById("four").innerHTML = website4;
  document.getElementById("four").href = href4;
  document.getElementById("five").innerHTML = website5;
  document.getElementById("five").href = href5;
  document.getElementById("six").innerHTML = website6;
  document.getElementById("six").href = href6;
  document.getElementById("seven").innerHTML = website7;
  document.getElementById("seven").href = href7;
  document.getElementById("eight").innerHTML = website8;
  document.getElementById("eight").href = href8;
  document.getElementById("nine").innerHTML = website9;
  document.getElementById("nine").href = href9;
  
  if (website1 == "") {
  } else {
  document.getElementById("img1").src =  "http://icons.duckduckgo.com/ip1/" + website1 + ".ico";
  }
  if (website2 == "") {
  } else {
  document.getElementById("img2").src =  "http://icons.duckduckgo.com/ip1/" + website2 + ".ico";
  }
  if (website3 == "") {
  } else {
  document.getElementById("img3").src =  "http://icons.duckduckgo.com/ip1/" + website3 + ".ico";
  }
  if (website4 == "") {
  } else {
  document.getElementById("img4").src =  "http://icons.duckduckgo.com/ip1/" + website4 + ".ico";
  }
  if (website5 == "") {
  } else {
  document.getElementById("img5").src =  "http://icons.duckduckgo.com/ip1/" + website5 + ".ico";
  }
  if (website6 == "") {
  } else {
  document.getElementById("img6").src =  "http://icons.duckduckgo.com/ip1/" + website6 + ".ico";
  }
  if (website7 == "") {
  } else {
  document.getElementById("img7").src =  "http://icons.duckduckgo.com/ip1/" + website7 + ".ico";
  }
  if (website8 == "") {
  } else {
  document.getElementById("img8").src =  "http://icons.duckduckgo.com/ip1/" + website8 + ".ico";
  }
  if (website9 == "") {
  } else {
  document.getElementById("img9").src =  "http://icons.duckduckgo.com/ip1/" + website9 + ".ico";
  }
  
  urlString =
    "https://linkt.tk?website1=" +
    website1 +
    "&href1=" +
    href1 +
    "&website2=" +
    website2 +
    "&href2=" +
    href2 +
    "&website3=" +
    website3 +
    "&href3=" +
    href3 +
    "&website4=" +
    website4 +
    "&href4=" +
    href4 +
    "&website5=" +
    website5 +
    "&href5=" +
    href5 +
    "&website6=" +
    website6 +
    "&href6=" +
    href6 +
    "&website7=" +
    website7 +
    "&href7=" +
    href7 +
    "&website8=" +
    website8 +
    "&href8=" +
    href8 +
    "&website9=" +
    website9 +
    "&href9=" +
    href9;
  console.log(urlString);
  document.getElementById("hide").innerHTML = urlString;

} else if (queryString != "?website1=null&href1=null&website2=null&href2=null&website3=null&href3=null&website4=null&href4=null&website5=null&href5=null&website6=null&href6=null&website7=null&href7=null&website8=null&href8=null&website9=null&href9=null") {
  const urlParams = new URLSearchParams(queryString);
  document.getElementById("deletebutton").style.opacity = 1;
  let website1 = urlParams.get("website1");
  let href1 = urlParams.get("href1");
  let website2 = urlParams.get("website2");
  let href2 = urlParams.get("href2");
  let website3 = urlParams.get("website3");
  let href3 = urlParams.get("href3");
  let website4 = urlParams.get("website4");
  let href4 = urlParams.get("href4");
  let website5 = urlParams.get("website5");
  let href5 = urlParams.get("href5");
  let website6 = urlParams.get("website6");
  let href6 = urlParams.get("href6");
  let website7 = urlParams.get("website7");
  let href7 = urlParams.get("href7");
  let website8 = urlParams.get("website8");
  let href8 = urlParams.get("href8");
  let website9 = urlParams.get("website9");
  let href9 = urlParams.get("href9");
  document.getElementById("one").innerHTML = website1;
  document.getElementById("one").href = href1;
  document.getElementById("two").innerHTML = website2;
  document.getElementById("two").href = href2;
  document.getElementById("three").innerHTML = website3;
  document.getElementById("three").href = href3;
  document.getElementById("four").innerHTML = website4;
  document.getElementById("four").href = href4;
  document.getElementById("five").innerHTML = website5;
  document.getElementById("five").href = href5;
  document.getElementById("six").innerHTML = website6;
  document.getElementById("six").href = href6;
  document.getElementById("seven").innerHTML = website7;
  document.getElementById("seven").href = href7;
  document.getElementById("eight").innerHTML = website8;
  document.getElementById("eight").href = href8;
  document.getElementById("nine").innerHTML = website9;
  document.getElementById("nine").href = href9;
  
  if (website1 == "") {
  } else {
  document.getElementById("img1").src =  "http://icons.duckduckgo.com/ip1/" + website1 + ".ico";
  }
  if (website2 == "") {
  } else {
  document.getElementById("img2").src =  "http://icons.duckduckgo.com/ip1/" + website2 + ".ico";
  }
  if (website3 == "") {
  } else {
  document.getElementById("img3").src =  "http://icons.duckduckgo.com/ip1/" + website3 + ".ico";
  }
  if (website4 == "") {
  } else {
  document.getElementById("img4").src =  "http://icons.duckduckgo.com/ip1/" + website4 + ".ico";
  }
  if (website5 == "") {
  } else {
  document.getElementById("img5").src =  "http://icons.duckduckgo.com/ip1/" + website5 + ".ico";
  }
  if (website6 == "") {
  } else {
  document.getElementById("img6").src =  "http://icons.duckduckgo.com/ip1/" + website6 + ".ico";
  }
  if (website7 == "") {
  } else {
  document.getElementById("img7").src =  "http://icons.duckduckgo.com/ip1/" + website7 + ".ico";
  }
  if (website8 == "") {
  } else {
  document.getElementById("img8").src =  "http://icons.duckduckgo.com/ip1/" + website8 + ".ico";
  }
  if (website9 == "") {
  } else {
  document.getElementById("img9").src =  "http://icons.duckduckgo.com/ip1/" + website9 + ".ico";
  }
  
  urlString =
    "https://linkt.tk?website1=" +
    website1 +
    "&href1=" +
    href1 +
    "&website2=" +
    website2 +
    "&href2=" +
    href2 +
    "&website3=" +
    website3 +
    "&href3=" +
    href3 +
    "&website4=" +
    website4 +
    "&href4=" +
    href4 +
    "&website5=" +
    website5 +
    "&href5=" +
    href5 +
    "&website6=" +
    website6 +
    "&href6=" +
    href6 +
    "&website7=" +
    website7 +
    "&href7=" +
    href7 +
    "&website8=" +
    website8 +
    "&href8=" +
    href8 +
    "&website9=" +
    website9 +
    "&href9=" +
    href9;
  console.log(urlString);
  document.getElementById("hide").innerHTML = urlString;
}
