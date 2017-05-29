/*var x,y,z;
//result
var result;
x=10.45;
y='50.5';
z=21.57;
y=parseFloat(y);
result=x+y+z;
document.write('<p>Результат сложения чисел:' + x + ' + ' + y + ' + ' + z + ' = ' + '<span style="color:red">' + result + '</span></p>');*/
var test,result;
var type;
test = 10;
type = typeof(test);
if (type == "number"){
	result = "в переменной test содержит в себе число-" 
	+ (++test);
}
else if (type == "string"){
	result = "переменная test содержит в себе строку-" + test;
}
else{
	result = " в переменной test ничего не записано";
}
document.write("<p>" + result +"</p>");
//2.
var date = 20;
var e_m, res, last_n;
e_m = 31 - date;
if (e_m < 0){
	alert("введена не корректгная дата");
}

res = String(e_m);
last_n = res[res.length-1];

if(e_m > 4 && e_m < 21) {
	e_m = e_m + " дней";
}
else if (last_n == 1){
	e_m = e_m + " день";
}
else if (last_n = 2|| last_n == 3 || last_n == 4){
	e_m = e_m + " дня";
	
}
else{
	e_m = e_m + "дней";
}
alert(e_m);