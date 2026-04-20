const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

require('./config/passport')(passport);
app.use(passport.initialize());

const SECRET = "mysecretkey";

const user = {
    id: 1,
    username: "admin",
    password: "1234"
};

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === user.username && password === user.password) {
        const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '1h' });

        return res.json({
            message: "Login successful",
            token: token
        });
    } else {
        return res.status(401).json({ message: "Invalid credentials" });
    }
});

app.get('/dashboard',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        res.json({
            message: "Welcome to dashboard",
            user: req.user
        });
    }
);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
