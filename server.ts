import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./src/routes";

const app: Express = express();

app.use(router);
app.use(cors());

// setting db
const port: string | number = process.env.PORT || 4000;
const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.zbgdp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const options: object = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set("useFindAndModify", false);
//connecting db

mongoose
  .connect(uri, options)
  .then(() => {
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  })
  .catch((err) => {
    throw err;
  });
