const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const userDB = require('./db.json');

const server = jsonServer.create()

server.use(jsonServer.defaults());
const SECRET_KEY = '123456789'
const expiresIn = '1h'

server.options('*', cors());
server.use(cors());
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

// Create a token from a payload
function createToken(payload) {
    return jwt.sign(payload, SECRET_KEY, {expiresIn})
}

// Check if the user exists in database
function isAuthenticated({email, password}) {
    return userDB.users.findIndex(user => user.email === email && user.password === password) !== -1
}

server.post('/signin', (req, res) => {
    const {email, password} = req.body
    console.log(email, password);
    let a = isAuthenticated({email, password})
    console.log(a);

    if (!isAuthenticated({email, password})) {
        const status = 401
        const message = 'Incorrect email or password'
        res.status(status).json({status, message})
    } else {
        const access_token = createToken({email, password})
        console.log("Access Token:" + access_token);
        res.status(200).json({access_token})
    }

})

server.listen(8000, () => {
    console.log("Node Server at http://localhost:" + 8000);
    console.log("Hour: " + Date());
})

