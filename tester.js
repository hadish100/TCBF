const randexp = require('randexp');
const { exec } = require('child_process');

console.log(" ");



var test_case_number = 5;

exec(`javac Wrong.java && javac Right.java`,(d,dd,ddd) => 
{

	for(var i=0;i<test_case_number;i++)
	{

	var x = new randexp(/\d{3}/).gen();

		exec(`node main.js ${x}`,(t,tt,ttt) => 
		{
		console.log(tt.replace("\n",""));
		});
	}

});
