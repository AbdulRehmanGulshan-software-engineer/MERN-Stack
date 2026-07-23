exports.getLogin = (req, res, next) => {
    res.render('auth/login',
        {
            pageTitle: 'Login',
            currentPage: 'login',
            isLoggedIn: false
        });
}

exports.postLogin = (req, res, next) => {
    console.log(req.body);
    req.session.isLoggedIn = true;
    //now on redirect it will go to client browser and will be save there , then will come in all requests
    res.redirect('/');
}

exports.postLogout = (req, res, next) => {
    req.session.destroy(() => {
        // This callback runs after the session is destroyed
        res.redirect("/login");
    });
};

//now register authRouter in app.js