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
//setTimeout(function( ) { clearInterval( myVar ); }, 5000);
function myTimer() {
  if (document.getElementById("test").innerHTML == "_") {
    document.getElementById("test").innerHTML = "   ";
  } else {
    document.getElementById("test").innerHTML = "_";
  }
}

var myVar2 = setInterval(myTimer2, 900);
//setTimeout(function( ) { clearInterval( myVar2 ); }, 11000);

function myTimer2() {
  if (document.getElementById("test2").innerHTML == "_") {
    document.getElementById("test2").innerHTML = "   ";
  } else {
    document.getElementById("test2").innerHTML = "_";
  }
}

var myVar3 = setInterval(myTimer3, 900);
//setTimeout(function( ) { clearInterval( myVar3 ); }, 11000);

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
var txt1 = "$ linkt.tk: a custom taskbar for saving website urls!";
var txt2 = "$ made by: max ficco 07-2020";
var txt3 = "$ how to use: ↓ enter your website's url and click the button! ↓";
var txt4 = "$ to share: ↓ click the other button ↓";
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
  setTimeout(type5, 11000);
  setTimeout(type6, 11000);
  setTimeout(type, 11000);
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
      document.getElementById("img2").src =
        "http://icons.duckduckgo.com/ip2/" + myurlname + ".ico";
    } else if (document.getElementById("three").innerHTML == "") {
      document.getElementById("three").innerHTML = myurlname;
      document.getElementById("three").href = myurl;
      document.getElementById("img3").src =
        "http://icons.duckduckgo.com/ip2/" + myurlname + ".ico";
    } else if (document.getElementById("four").innerHTML == "") {
      document.getElementById("four").innerHTML = myurlname;
      document.getElementById("four").href = myurl;
      document.getElementById("img4").src =
        "http://icons.duckduckgo.com/ip2/" + myurlname + ".ico";
    } else if (document.getElementById("five").innerHTML == "") {
      document.getElementById("five").innerHTML = myurlname;
      document.getElementById("five").href = myurl;
      document.getElementById("img5").src =
        "http://icons.duckduckgo.com/ip2/" + myurlname + ".ico";
    } else if (document.getElementById("six").innerHTML == "") {
      document.getElementById("six").innerHTML = myurlname;
      document.getElementById("six").href = myurl;
      document.getElementById("img6").src =
        "http://icons.duckduckgo.com/ip2/" + myurlname + ".ico";
    } else if (document.getElementById("seven").innerHTML == "") {
      document.getElementById("seven").innerHTML = myurlname;
      document.getElementById("seven").href = myurl;
      document.getElementById("img7").src =
        "http://icons.duckduckgo.com/ip2/" + myurlname + ".ico";
    } else if (document.getElementById("eight").innerHTML == "") {
      document.getElementById("eight").innerHTML = myurlname;
      document.getElementById("eight").href = myurl;
      document.getElementById("img8").src =
        "http://icons.duckduckgo.com/ip2/" + myurlname + ".ico";
    } else if (document.getElementById("nine").innerHTML == "") {
      document.getElementById("nine").innerHTML = myurlname;
      document.getElementById("nine").href = myurl;
      document.getElementById("img9").src =
        "http://icons.duckduckgo.com/ip2/" + myurlname + ".ico";
    } else {
      alert("You Have Reached the Maximum Amount of Links!");
    }
    website1 = document.getElementById("one").innerHTML;
    href1 = document.getElementById("one").href;
    localStorage.website1 = website1
    localStorage.href1 = href1
    website2 = document.getElementById("two").innerHTML;
    href2 = document.getElementById("two").href;
    localStorage.website2 = website2
    localStorage.href2 = href2
    website3 = document.getElementById("three").innerHTML;
    href3 = document.getElementById("three").href;
    localStorage.website3 = website3
    localStorage.href3 = href3
    website4 = document.getElementById("four").innerHTML;
    href4 = document.getElementById("four").href;
    localStorage.website4 = website4
    localStorage.href4 = href4
    website5 = document.getElementById("five").innerHTML;
    href5 = document.getElementById("five").href;
    localStorage.website5 = website5
    localStorage.href5 = href5
    website6 = document.getElementById("six").innerHTML;
    href6 = document.getElementById("six").href;
    localStorage.website6 = website6
    localStorage.href6 = href6
    website7 = document.getElementById("seven").innerHTML;
    href7 = document.getElementById("seven").href;
    localStorage.website7 = website7
    localStorage.href7 = href7
    website8 = document.getElementById("eight").innerHTML;
    href8 = document.getElementById("eight").href;
    localStorage.website8 = website8
    localStorage.href8 = href8
    website9 = document.getElementById("nine").innerHTML;
    href9 = document.getElementById("nine").href;
    localStorage.website9 = website9
    localStorage.href9 = href9
    console.log(localStorage.website1);
    console.log(localStorage.href1);
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
if (queryString == "") {
  // do nothing
  for (let finger=1; finger<10; finger++;) {
  if (localStorage.website[finger] == "undefined") { website[finger] = ""
  } else {website[finger] = localStorage.website[finger];}
  if (localStorage.href[finger] == "undefined") { href[finger] = ""
  } else {href[finger] = localStorage.href[finger];}
  console.log(finger);
  }
  /*if (localStorage.website2 == "undefined") {let website2 = ""
  } else {let website2 = localStorage.website2;}
  if (localStorage.href2 == "undefined") { let href2 = ""
  } else {let href2 = localStorage.href2;}
  
  if (localStorage.website3 == "undefined") {let website3 = ""
  } else {let website3 = localStorage.website3;}
  if (localStorage.href3 == "undefined") { let href3 = ""
  } else {let href3 = localStorage.href3;}
  
  if (localStorage.website4 == "undefined") {let website4 = ""
  } else {let website4 = localStorage.website4;}
  if (localStorage.href4 == "undefined") { let href4 = ""
  } else {let href4 = localStorage.href4;}
  
  if (localStorage.website5 == "undefined") {let website5 = ""
  } else {let website5 = localStorage.website5;}
  if (localStorage.href5 == "undefined") { let href5 = ""
  } else {let href5 = localStorage.href5;}
  
  if (localStorage.website6 == "undefined") {let website6 = ""
  } else {let website6 = localStorage.website6;}
  if (localStorage.href6 == "undefined") { let href6 = ""
  } else {let href6 = localStorage.href6;}
  
  if (localStorage.website7 == "undefined") {let website7 = ""
  } else {let website7 = localStorage.website7;}
  if (localStorage.href7 == "undefined") { let href7 = ""
  } else {let href7 = localStorage.href7;}
  
  if (localStorage.website8 == "undefined") {let website8 = ""
  } else {let website8 = localStorage.website8;}
  if (localStorage.href8 == "undefined") { let href8 = ""
  } else {let href8 = localStorage.href8;}
  
  if (localStorage.website9 == "undefined") {let website9 = ""
  } else {let website9 = localStorage.website9;}
  if (localStorage.href9 == "undefined") { let href9 = ""
  } else {let href9 = localStorage.href9;}
  */
  
  
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
  document.getElementById("img1").src =  "http://icons.duckduckgo.com/ip1/" + website2 + ".ico";
  }
  if (website3 == "") {
  } else {
  document.getElementById("img1").src =  "http://icons.duckduckgo.com/ip1/" + website3 + ".ico";
  }
  if (website4 == "") {
  } else {
  document.getElementById("img1").src =  "http://icons.duckduckgo.com/ip1/" + website4 + ".ico";
  }
  if (website5 == "") {
  } else {
  document.getElementById("img1").src =  "http://icons.duckduckgo.com/ip1/" + website5 + ".ico";
  }
  if (website6 == "") {
  } else {
  document.getElementById("img1").src =  "http://icons.duckduckgo.com/ip1/" + website6 + ".ico";
  }
  if (website7 == "") {
  } else {
  document.getElementById("img1").src =  "http://icons.duckduckgo.com/ip1/" + website7 + ".ico";
  }
  if (website8 == "") {
  } else {
  document.getElementById("img1").src =  "http://icons.duckduckgo.com/ip1/" + website8 + ".ico";
  }
  if (website9 == "") {
  } else {
  document.getElementById("img1").src =  "http://icons.duckduckgo.com/ip1/" + website9 + ".ico";
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

} else {
  const urlParams = new URLSearchParams(queryString);
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
  document.getElementById("img1").src =  "http://icons.duckduckgo.com/ip1/" + website2 + ".ico";
  }
  if (website3 == "") {
  } else {
  document.getElementById("img1").src =  "http://icons.duckduckgo.com/ip1/" + website3 + ".ico";
  }
  if (website4 == "") {
  } else {
  document.getElementById("img1").src =  "http://icons.duckduckgo.com/ip1/" + website4 + ".ico";
  }
  if (website5 == "") {
  } else {
  document.getElementById("img1").src =  "http://icons.duckduckgo.com/ip1/" + website5 + ".ico";
  }
  if (website6 == "") {
  } else {
  document.getElementById("img1").src =  "http://icons.duckduckgo.com/ip1/" + website6 + ".ico";
  }
  if (website7 == "") {
  } else {
  document.getElementById("img1").src =  "http://icons.duckduckgo.com/ip1/" + website7 + ".ico";
  }
  if (website8 == "") {
  } else {
  document.getElementById("img1").src =  "http://icons.duckduckgo.com/ip1/" + website8 + ".ico";
  }
  if (website9 == "") {
  } else {
  document.getElementById("img1").src =  "http://icons.duckduckgo.com/ip1/" + website9 + ".ico";
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
