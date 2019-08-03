var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
function add(n) {
    return (n<10)?"0"+String(n):String(n);
}
function work() {
    var d = new Date();
    document.getElementById("hms").innerHTML = add(d.getHours())+":"+add(d.getMinutes())+":"+add(d.getSeconds());
    document.getElementById("date").innerHTML = days[d.getDay()]+", "+months[d.getMonth()]+" "+d.getDate();
    document.getElementById("year").innerHTML = d.getFullYear();
}
setInterval(work,1000);
