const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getHomes = (req, res, next) => {
    Home.fetchAll()
        .then(registeredHomes => {
            res.render('store/home-list', { registeredHomes: registeredHomes, pageTitle: 'Homes List', currentPage: 'Home' });
        });
}

exports.getIndex = (req, res, next) => {
    Home.fetchAll()
        .then(registeredHomes => {
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
    Favourite.getFavourites()
        .then((favourites) => {
            Home.fetchAll()
                .then(registeredHomes => {
                    console.log(favourites, registeredHomes)
                    const favouritesWithDetails = favourites.map(({ houseId }) =>
                        registeredHomes.find(home => home._id.toString() === houseId.toString())
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
    const fav = new Favourite(homeId);
    fav.save().
        then(result => {
            console.log('Fav added: ', result);
        })
        .catch(err => {
            console.log('Error while marking favorite: ', error);
        })
        .finally(() => {
            res.redirect("/favourites");
        })
};

exports.postRemoveFromFavourite = (req, res, next) => {
    const homeId = req.params.homeId;

    Favourite.deleteById(homeId)
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
                    currentPage: 'Home'
                });
        }
    })
}