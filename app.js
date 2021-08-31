/*************** global init *****************/
const port = 3000
const express = require('express')
const app = express()


/*************** view engine *****************/
app.set('view engine', 'ejs')
app.set('views', './views')


/*************** Middleware *****************/
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


/*************** router init *****************/
app.use('/',express.static('./public'))
app.get('/about', (req, res, next) =>{
    const title = 'About Me'
    const file = 'about'
    const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repellendus. Possimus beatae itaque repellendus veniam sapiente qui ullam necessitatibus ex ab? Voluptatibus, doloribus molestias ut obcaecati dolor quae dignissimos maiores.'
    res.render('about', { title, file, content })
} )

app.get('/pf', (req, res, next) =>{
    const title = 'Portfolio'
    const file = 'pf'
    const lists = [
        { title: 'PF_01', src: 'fi.jpg' },
        { title: 'PF_02', src: 'f2.jpg' },
        { title: 'PF_03', src: 'f3.jpg' },
    ]
    res.render('about', { title, file, content })
} )


/*************** server init  *****************/
app.listen(port, () => { console.log('http://127.0.0.1:' + port) }) 

