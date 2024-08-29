const express = require("express");
const dotenv = require("dotenv");
const morgan=require('morgan')
const cors=require('cors')
const apiError = require("./utils/apiError");
dotenv.config({
  path: ".env",
});
const dbConnection = require("./config/database.js");
//routes
const skillsRoute = require("./routes/skillRoute");
const expRoute = require("./routes/expRoute.js");
const educationRoute = require("./routes/educationRoute.js");
const aboutRoute = require("./routes/aboutRoute.js");
const projectRoute = require("./routes/projectRoute.js");
const contactRoute = require("./routes/contactRoute.js");
const userRoute=require('./routes/userRoute.js');


const globalError = require("./middleware/errorMiddleware");
const port = 3000;
dbConnection();
const app = express();
app.use(express.json());
app.use(morgan('dev'))
app.use(cors())

//Mount Routes
app.use("/api/v1/skills", skillsRoute);
app.use("/api/v1/exp", expRoute);
app.use("/api/v1/edu", educationRoute);
app.use("/api/v1/about", aboutRoute);
app.use("/api/v1/project", projectRoute);
app.use("/api/v1/contact", contactRoute);
app.use("/api/v1/user",userRoute);

app.all("*", (req, res, next) => {
  next(new apiError(`can't find ${req.originalUrl} on this server`, 404));
});
app.use(globalError);

app.listen(3000, () => console.log(`listening on port ${port}`));
