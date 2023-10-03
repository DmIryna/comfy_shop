import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import path from "path"
import router from "./src/routes/router.js"
dotenv.config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database successfully connected"))
  .catch((err) => console.log(err))

const app = express()
app.use(express.json())

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use("/", router)

const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, "/client/public")))
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "client/dist/index.html"))
)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
