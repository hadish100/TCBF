const { spawn } = require('child_process');
const { exec } = require('child_process');


	var flag = 0;
	var child1 = spawn('java',["Right"]);

	child1.stdin.write(process.argv[2]);
	child1.stdin.end();

	var output1 = "";

		child1.stdout.on('data', data => 
		{
		output1 += data;
		});

		child1.on('exit', code => 
		{
		flag = 1;
		});

	var child2 = spawn('java',["Wrong"]);

	child2.stdin.write(process.argv[2]);
	child2.stdin.end();

	var output2 = "";

		child2.stdout.on('data', data => 
		{
		output2 += data;
		});

		child2.on('exit', code => 
		{

		(function compare(){
			if(flag) 
			{


			if(output1 == output2) console.log('\x1b[32m', 'CORRECT OUTPUT !','\x1b[0m','TEST CASE : ' + process.argv[2]);
			else console.log('\x1b[31m', 'INCORRECT OUTPUT !','\x1b[0m','TEST CASE : ' + process.argv[2] + ' | SHOULD BE : ' + output1);
			//else console.log('\x1b[31m', 'INCORRECT OUTPUT !','\x1b[0m','TEST CASE : ' + process.argv[2]);

			}
			else
			{
				setTimeout(function()
				{
				compare();
				},1000);
			}
		})();

			
		
		});









