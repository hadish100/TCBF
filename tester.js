const { exec } = require('child_process');
console.log(" ");


exec(`javac Wrong.java && javac Right.java`,(d,dd,ddd) => 
{

	for(var i=0;i<50;i++)
	{
	var x = get_test_case();
		exec(`node main.js ${x}`,(t,tt,ttt) => 
		{
		console.log(tt.replace("\n",""));
		});
	}

});

function rand_int(min,max) 
{
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function get_test_case()
{
var letters = ["G","R","r","L","l","O","M","D","E"];

var res = "";

	for(var i=0;i<10;i++)
	{
	res += letters[rand_int(0,8)];
	}

return res;
}