class homeControllers {

    show(req, res, next) {
        res.render('home')
    }

}
module.exports = new homeControllers()