//path module
const path = require('path')
console.log(path.sep)
//printing the normalized path
const filePath =path.join('/content','/subfolder','text.txt')
console.log(filePath)
//to print the text.txt alone
const base =path.basename(filePath)
console.log(base)
console.log(__dirname)
//joining the path where this folder is located with the content folder
const abs =path.resolve(__dirname,'content','subfolder','text.txt')
console.log(abs)