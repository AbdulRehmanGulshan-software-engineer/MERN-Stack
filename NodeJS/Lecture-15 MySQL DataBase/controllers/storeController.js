const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getHomes = (req, res, next) => {
    Home.fetchAll()
        .then(([registeredHomes]) => {
            res.render('store/home-list', { registeredHomes: registeredHomes, pageTitle: 'Homes List', currentPage: 'Home' });
        });
}

exports.getIndex = (req, res, next) => {
    Home.fetchAll()
        .then(([registeredHomes]) => {
            res.render('store/index', {
                registeredHomes: registeredHomes,
                pageTitle: 'airbnb Home',
                currentPage: 'index'
            });
            console.log(registeredHomes)
        });
};

exports.getBookings = (req, res, next) => {
    res.render('store/bookings',
        {
            pageTitle: 'My Bookings',
            currentPage: 'bookings'
        });
}

exports.getFavouriteList = (req, res, next) => {
    Favourite.getFavourites((favourites) => {
        Home.fetchAll()
            .then(([registeredHomes]) => {
                const favouritesWithDetails = favourites
                    .map(homeId =>
                        registeredHomes.find(home => home.id === homeId)
                    )
                    .filter(Boolean);

                console.log("Rendering:", favouritesWithDetails);

                res.render('store/favourite-list', {
                    favourites: favouritesWithDetails,
                    pageTitle: 'My Favourites',
                    currentPage: 'favourites'
                });
            });
    });
};

exports.postAddtoFavourite = (req, res, next) => {
    const homeId = req.body.id;

    Favourite.addToFavourite(homeId, (error) => {
        if (error) {
            console.log(error);
        }
        res.redirect("/favourites");
    });
};

exports.postRemoveFromFavourite = (req, res, next) => {
    const homeId = req.params.homeId;

    Favourite.deleteById(homeId, (error) => {
        if (error) {
            console.log(error);
        }
        res.redirect("/favourites");
    });
};

exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeId;
    Home.findById(homeId).then(([homes]) => {
        const home = homes[0];
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
                    currentPage: 'Home'
                });
        }
    })
}