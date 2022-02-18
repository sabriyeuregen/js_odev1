/*Basitçe sizden girişte isminizi isteyip sonra
 bu ismi karşılama ekranına yerleştirerek o anki saati ve günü gösteren bir ekran. */


//  let nameGet=prompt("Lütfen adınızı giriniz")
//  let myName=document.querySelector("#myName")
//  myName.innerHTML=`${myName.innerHTML} <small atyle="color:red">${nameGet}</small>`

let person = prompt("Please enter your name");
  
document.querySelector("#myName").innerHTML =person 


var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
let date = new Date()
document.querySelector("#myDay").innerHTML = gunler[date.getDay()]
let datt=date.getDay()
let month=date.getMonth()+1
let year=date.getFullYear()
let hour = date.getHours()
let minutes=date.getMinutes()
let d=date.getDate()
document.querySelector("#myClock").innerHTML = d+"."+month+"."+year+" "+hour+":"+minutes