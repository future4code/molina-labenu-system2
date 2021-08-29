import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import createClass from "./endpoints/createClass"


export const app = express()

app.use(express.json())
app.use(cors())

app.put('/create', createClass)
/* app.get('/students/:id') */



const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})