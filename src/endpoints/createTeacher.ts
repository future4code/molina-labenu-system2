import { teacher } from './../types';
import { connection } from './../data/connection';
import { Request, Response } from "express";

const createTeacher = async(req: Request, res: Response) =>{
    try {
        const {name, email, birthdate} = req.body

        if(!req.body.name || !req.body.email || !req.body.birthdate){
            throw new Error("Campos invalidos");
        }

        const newTeacher: teacher = {name, email, birthdate}

        await connection('teachers').insert(newTeacher)

        res.status(200).send('Criado com sucesso!')

    } catch (error) {
        res.status(400).send({
           message: error.message || error.sqlMessage
        })
    }
}

export default createTeacher