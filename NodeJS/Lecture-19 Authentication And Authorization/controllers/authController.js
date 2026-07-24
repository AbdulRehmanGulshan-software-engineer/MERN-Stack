const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

// GET LOGIN
exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        pageTitle: 'Login',
        currentPage: 'login',
        isLoggedIn: req.session.isLoggedIn || false,
        oldInput: {
            email: ''
        }
    });
};


// GET SIGNUP
exports.getSignup = (req, res, next) => {
    res.render('auth/signup', {
        pageTitle: 'SignUp',
        currentPage: 'signup',
        isLoggedIn: req.session.isLoggedIn || false,
        oldInput: {
            firstName: '',
            lastName: '',
            email: '',
            userType: ''
        }
    });
};


// POST SIGNUP
exports.postSignup = [

    // First name validation
    check('firstName')
        .notEmpty()
        .withMessage('First name is required')
        .trim()
        .isLength({ min: 2 })
        .withMessage('First name must be at least 2 characters long')
        .matches(/^[a-zA-Z\s]+$/)
        .withMessage('First name can only contain letters'),

    // Last name validation
    check('lastName')
        .isLength({ min: 2 })
        .withMessage('Last name must be at least 2 characters long')
        .matches(/^[a-zA-Z\s]+$/)
        .withMessage('Last name can only contain letters'),

    // Email validation
    check('email')
        .isEmail()
        .withMessage('Enter a valid email')
        .normalizeEmail(),

    // Password validation
    check('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long')
        .matches(/[a-z]/)
        .withMessage('Password must contain at least one lowercase character')
        .matches(/[A-Z]/)
        .withMessage('Password must contain at least one uppercase character')
        .matches(/^(?=.*[!@#$%^&*()_+=\-[\]{}|;:',.<>/?]).*$/)
        .withMessage('Password must contain at least one special character')
        .trim(),

    // Confirm password validation
    check('confirmPassword')
        .trim()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords do not match');
            }
            return true;
        }),

    // User type validation
    check('userType')
        .notEmpty()
        .withMessage('Please select a user type')
        .isIn(['guest', 'host'])
        .withMessage('Invalid user type'),

    // Terms validation
    check('termsAccepted')
        .equals('on')
        .withMessage('You must accept the terms and conditions'),

    // Final signup controller
    async (req, res, next) => {

        const {
            firstName,
            lastName,
            email,
            password,
            userType
        } = req.body;

        const errors = validationResult(req);

        // If validation errors exist
        if (!errors.isEmpty()) {
            return res.status(422).render('auth/signup', {
                pageTitle: 'Sign Up',
                currentPage: 'signup',
                isLoggedIn: false,

                errorMessages: errors.array().map(err => err.msg),

                oldInput: {
                    firstName,
                    lastName,
                    email,
                    userType
                }
            });
        }

        try {

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 12);

            // Create user
            const user = new User({
                firstName,
                lastName,
                email,
                password: hashedPassword,
                userType
            });

            // Save user
            await user.save();

            // Signup successful
            res.redirect('/login');

        } catch (err) {

            console.log('Error while signing up:', err);

            return res.status(422).render('auth/signup', {
                pageTitle: 'Sign Up',
                currentPage: 'signup',
                isLoggedIn: false,

                errorMessages: [err.message],

                oldInput: {
                    firstName,
                    lastName,
                    email,
                    userType
                }
            });
        }
    }
];


// POST LOGIN
exports.postLogin = async (req, res, next) => {

    try {

        const {
            email,
            password
        } = req.body;


        // Find user by email
        const user = await User.findOne({ email });


        // User does not exist
        if (!user) {

            return res.status(422).render('auth/login', {
                pageTitle: 'Login',
                currentPage: 'login',
                isLoggedIn: false,

                errorMessages: [
                    'Invalid Email or Password'
                ],

                oldInput: {
                    email
                }
            });
        }


        // Compare entered password
        // with hashed password stored in database
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );


        // Password is incorrect
        if (!isMatch) {

            return res.status(422).render('auth/login', {
                pageTitle: 'Login',
                currentPage: 'login',
                isLoggedIn: false,

                errorMessages: [
                    'Invalid Email or Password'
                ],

                oldInput: {
                    email
                }
            });
        }


        // LOGIN SUCCESS

        // Set session data
        req.session.isLoggedIn = true;

        // Store only user ID
        req.session.userId = user._id.toString();


        // Explicitly save session
        req.session.save((err) => {

            if (err) {
                console.log('Error while saving session:', err);
                return next(err);
            }

            console.log('Session saved successfully');

            // Redirect only after session is saved
            res.redirect('/');
        });


    } catch (err) {

        console.log('Error while logging in:', err);

        next(err);
    }
};


// POST LOGOUT
exports.postLogout = (req, res, next) => {

    req.session.destroy((err) => {

        if (err) {
            console.log('Error while destroying session:', err);
            return next(err);
        }

        res.redirect('/login');
    });
};