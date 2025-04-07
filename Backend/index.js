
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const bookRoutes = require("./bookRoutes");
const userRoutes = require("./routes/userRoutes"); 
const app = express();
const PORT = 5000;


app.use(cors());
app.use(bodyParser.json());


app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/booknest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("DB Error:", err));


app.use("/api/books", bookRoutes); 
app.use("/api/users", userRoutes); 


app.use((req, res, next) => {
  console.log(`Invalid route accessed: ${req.originalUrl}`);
  res.status(404).json({ message: "Route not found!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
