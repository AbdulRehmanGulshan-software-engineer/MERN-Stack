const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getHomes = (req, res, next) => {
    Home.find()
        .then(registeredHomes => {
            res.render('store/home-list', {
                registeredHomes: registeredHomes, pageTitle: 'Homes List', currentPage: 'Home',
                isLoggedIn: req.isLoggedIn
            });
        });
}

exports.getIndex = (req, res, next) => {
    Home.find()
        .then(registeredHomes => {
            res.render('store/index', {
                registeredHomes: registeredHomes,
                pageTitle: 'airbnb Home',
                currentPage: 'index',
                isLoggedIn: req.isLoggedIn
            });
            console.log(registeredHomes)
        });
};

exports.getBookings = (req, res, next) => {
    res.render('store/bookings',
        {
            pageTitle: 'My Bookings',
            currentPage: 'bookings',
            isLoggedIn: req.isLoggedIn
        });
}

exports.getFavouriteList = (req, res, next) => {
    Favourite.find()
        .populate("houseId")
        .then(favourites => {
            const favouritesWithDetails = favourites
                .map(favourite => favourite.houseId)
                .filter(Boolean);

            res.render("store/favourite-list", {
                favourites: favouritesWithDetails,
                pageTitle: "My Favourites",
                currentPage: "favourites",
                isLoggedIn: req.isLoggedIn
            });
        })
        .catch(err => {
            console.log("Error while getting favourites:", err);
            next(err);
        });
};

exports.postAddtoFavourite = (req, res, next) => {
    const homeId = req.body.id;

    // Check if this house is already a favourite
    Favourite.findOne({ houseId: homeId })
        .then(existingFavourite => {

            // If already exists, don't add it again
            if (existingFavourite) {
                console.log("Already added to favourites");
                return res.redirect("/favourites");
            }

            // If it doesn't exist, create a new favourite
            const fav = new Favourite({
                houseId: homeId
            });

            // return means wait for save() to execute and return promise to .then()
            return fav.save();
        })
        .then(result => {
            if (result) {
                console.log("Favourite added:", result);
                res.redirect("/favourites");
            }
        })
        .catch(err => {
            console.log("Error while marking favourite:", err);
            next(err);
        });
};

exports.postRemoveFromFavourite = (req, res, next) => {
    const homeId = req.params.homeId;

    Favourite.deleteOne({
        houseId: homeId
    })
        .then(result => {
            console.log('deleted from favourite', result)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            res.redirect("/favourites");
        })
}

exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeId;
    Home.findById(homeId).then(home => {
        if (!home) {
            console.log("Home not found");
            res.redirect("/homes");
        }
        else {
            console.log("Home Details Found:", home);
            res.render('store/home-detail',
                {
                    home: home,
                    pageTitle: 'Home Detail',
                    currentPage: 'Home',
                    isLoggedIn: req.isLoggedIn
                });
        }
    })
}