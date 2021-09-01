/*************** global init **************/
const port = 3000
const express = require('express')
const app = express()
const path = require('path')

// console.log( path.join(...인자) )	// join()은 상대경로, 절대경로
console.log( __dirname )		// C:\Users\user\Desktop\코딩\2021-14-ejs
console.log( __filename )		// C:\Users\user\Desktop\코딩\2021-14-ejs\06.path.js
console.log( path.join(__dirname, '../', 'wonbin') )	// join()은 상대경로, 절대경로
console.log( path.join(__dirname, 'public') )


app.use('/', express.static( path.join(__dirname, 'public') ))


/*************** server init **************/
app.listen(port, () => {console.log('http://127.0.0.1:'+port)})