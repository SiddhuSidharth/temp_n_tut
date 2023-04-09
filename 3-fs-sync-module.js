const {readFileSync,writeFileSync} =require('fs');
//reading the text present in the file
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first,second);
//writing the text ->if there is no file present inside the directory it searches and creates a new one and it writes
writeFileSync(
      './content/result-sync.txt',
      `Here is the result : ${first},${second}`,
       {flag : 'a'}         
)
//in sync everything is done line by line