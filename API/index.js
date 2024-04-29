import express from "express"
import router from "./routes/router.js";
import connection from "./connection/connection.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use("/api", router);
app.use((req,res)=>{res.status(400).send('EndPoint Not Found')})

await connection.sync({ force: false });

app.listen(8080, () => {
    console.log("El servidor esta funcionando")
});
