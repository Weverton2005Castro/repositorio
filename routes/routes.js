const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    res.send('Bem Vindos')
})

router.get('/',(req,res) => {
    res.send('vc esta na pagina principal')
})

router.get('/teste',(req,res) => {
    res.send('teste')
})

router.use(function (req,res,next){
    res.status(404).send ('rota nao encontrada')
})
    
 



module.exports = router