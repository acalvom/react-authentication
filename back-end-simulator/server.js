const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const userDB = require('./db.json');

const server = jsonServer.create();

const port = 8000;
const SECRET_KEY = '123456789'
const expiresIn = '1h'

server.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);

server.use(cookieParser('secret'));
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

function createToken(payload) {
    return jwt.sign(payload, SECRET_KEY, {expiresIn})
}

function isAuthenticated({email, password}) {
    console.log(email, password)
    return userDB.users.findIndex(user => user.email === email && user.password === password) !== -1
}

function getRole(email) {
    return userDB.users.find(user => user.email === email).role;
}

server.get("/signin", (req, res) => {
    if (req.signedCookies.user) {
        res.send({loggedIn: true, user: req.signedCookies.user});
    } else {
        res.send({loggedIn: false});
    }
});

server.post('/signin', (req, res) => {
    const {email, password} = req.body;
    const options = {
        signed: true,
        httpOnly: true,
        sameSite: 'strict'
    }

    if (!isAuthenticated({email, password})) {
        const status = 401
        const message = 'Incorrect email or password'
        res.status(status).json({status, message})
    } else {
        const role = getRole(email);
        const access_token = createToken({email, password})
        res.cookie('user', {access_token, role, email}, options).send({role: role, status: 200});
    }

});

server.get('/logout', (req, res) => {
    res.clearCookie('user').end();
});

server.listen(port, () => {
    console.log("Node Server at http://localhost:" + port);
    console.log("Hour: " + Date());
})

