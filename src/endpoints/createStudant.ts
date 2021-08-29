import { config } from "dotenv";
import { Request, Response } from "express-serve-static-core";
import { connection } from "../data/connection";
import { user } from "../types"
import moment from 'moment'

config()

export default async function createStudant(
    req: Request,
    res: Response
) : Promise<void> {
    try {
        const { name, email, birthdate } = req.body

        if ( !name || !email || !birthdate ){
            res.statusCode = 422
            throw "'name', 'email' e 'birthdate' são obrigátorios!"
        }

        // const newBirthdate = moment(birthdate, 'DD/MM/YYYY').format('YYYY-MM-DD')

        const newUser: user = { name, email, birthdate } 

        await connection('students').insert(newUser)

        res.status(201).send("Usuário criado!")

    } catch (error) {

        if ( typeof error === "string" ) {

            res.send(error)
        } else {

            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
}