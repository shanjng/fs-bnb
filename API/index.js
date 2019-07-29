// pulls in express library
const express = require('express');

// instance of express made
const app = express();
var cors = require('cors');

app.use(cors()); // cross-origin resource sharing
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.use(middleware function)
//Middleware function (logs the URL):
const logger = (req,res,next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

//Middleware execute:
app.use(logger)

// ROUTES MIDDLEWARE
// app.use access the middleware functions via the router matched
// app.use(x, y) concatenates the url and gets the middleware functions
app.use("/api/user", require("./src/api/user-routes")); // imports user router
app.use("/api/listing", require("./src/api/listing-routes"));
app.use("/api/auth", require("./src/api/auth-routes"));
app.use("/api/booking", require("./src/api/booking-routes"));
app.use("/api/provider", require("./src/api/provider-routes"));

app.use(function(req, res, next) {
    res.status(404);
    res.json({status:404,title:"Not Found",msg:"Route not found"});
    next();
});

// gets access to environment variables on the computer. if there is one called PORT, const PORT is set to it; otherwise 5000 is set 
const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server running on port ${PORT}`));

