import { config } from "dotenv";
import { Request, Response } from "express-serve-static-core";
import { connection } from "../data/connection";
import { update } from "../types"

config()

export default async function addStudantInClass(
    req: Request,
    res: Response
) : Promise<void> {
    try {
        const { id, class_id } = req.body

        if ( !id || !class_id ){
            res.statusCode = 422
            throw new Error("'id' e 'class_id' é obrigátorios!");
        }

        // const classId: update = { class_id }
        // const studantId: update = { id }

        await connection.raw(`
        UPDATE students 
        SET class_id = '${class_id}' 
        WHERE (id = '${id}');`)

        res.status(201).send("Usuário atualizado!")

    } catch (error) {

        if ( typeof error === "string" ) {

            res.send(error)
        } else {

            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
}