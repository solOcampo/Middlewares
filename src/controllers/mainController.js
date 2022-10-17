module.exports={
    main: (req,res)=>{
        res.render('index')
    },
    about: (req,res)=>{
        res.send('Bienvenido a la vista about')
    },
    login: (req,res)=>{
        res.render('login')       
    },
    processLogin: (req,res)=>{
        res.redirect('/')
    },
    register: (req,res)=>{
        res.send('Bienvenido a la vista Register ')
    },
    processRegister: (req,res)=>{
        res.redirect('/')
    },
}