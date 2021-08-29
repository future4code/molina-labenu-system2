import { connection } from './../data/connection';
import { Request, Response } from 'express';


const addTeacherInClass = async(req: Request, res: Response): Promise<void> =>{
    try {
        const {id, class_id} = req.body

        if(!id || !class_id){
            throw new Error("Campos invalidos");
        }

        await connection.raw(`
            UPDATE teachers
            SET class_id = ${class_id}
            WHERE id = ${id}
        `)

        res.status(200).send('Atualizado com sucesso!')
        
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
         })
    }
}

export default addTeacherInClass