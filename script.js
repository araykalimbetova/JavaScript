/*var x,y,z;
//result
var result;
x=10.45;
y='50.5';
z=21.57;
y=parseFloat(y);
result=x+y+z;
document.write('<p>Результат сложения чисел:' + x + ' + ' + y + ' + ' + z + ' = ' + '<span style="color:red">' + result + '</span></p>');*/
/*var test,result;
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
*/
var x = 1024;

while (x > 0) {
	x = x / 2;

	if (x%2 !=0){
		continue;
	}
	if(x == 0) {
		break;
	}
	document.write(x + "<br>");
}
  var color_tr,color_td;
document.write("<table border='1px'>");

for(var i = 1; i < 10; i++) {
	
	if(i == 1) {
		color_tr = "#c3c3c3";
	}
	else {
		color_tr = "#ffffff";
	}
	
	document.write("<tr style='height:30px;background-color:" + color_tr + "'>");

	for(var j = 1; j < 10; j++) {
		
		if(j == 1 || i == 1) {
			color_td = "#c3c3c3";
		}
		else {
			color_td = "#ffffff";
		}
			
		document.write("<td style='width:30px;background-color:" + color_td + "'>" + i*j + "</td>");
	}
	document.write("</tr>");
}

document.write("</table>");