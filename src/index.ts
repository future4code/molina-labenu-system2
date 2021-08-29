import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import createStudant from "./endpoints/createStudant"
import addStudantInClass from "./endpoints/addStudantInClass"
import createClass from "./endpoints/createClass"
import { getStudentAgeById }from './endpoints/getStudentAgeById'


export const app = express()

app.use(express.json())
app.use(cors())

app.post("/createstudant", createStudant)
app.put('/create', createClass)
app.get("/student/age/:id", getStudentAgeById)
app.put("/addstudantinclass", addStudantInClass)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})