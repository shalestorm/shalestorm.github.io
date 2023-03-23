var $ = function (id) {
    return document.getElementById(id);
}
var calculateMpg = function () {
    var miles = parseFloat($("miles").value);
    var gallons = parseFloat($("gallons").value);
    
    
    if (isNaN(miles)) {
        alert("Miles must be numeric");
    } else if (miles < 0) {
        alert("Miles must be greater than zero");
    } else if (miles == 0) {
        alert("Miles cannot be zero");
    } else if (isNaN(gallons)) {
        alert("Gallons must be numeric");
    } else if (gallons < 0) {
        alert("Gallons must be greater than zero");
    } else if (gallons == 0) {
        alert("Gallons cannot be zero");
    } else {
        var mpg = miles / gallons;
        $("mpg").value = mpg.toFixed(1);
    }
}
var clear = function () {
    $("miles").value = "";
    $("gallons").value = "";
    $("mpg").value = "";
    $("miles").focus();
}
window.onload = function () {
    $("calculate").onclick = calculateMpg;
    $("miles").focus();
    $("clear").onclick = clear;
    $("miles").ondblclick = clear;
}