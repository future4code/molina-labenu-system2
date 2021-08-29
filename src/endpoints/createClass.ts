import { Request, Response } from "express"
import { connection } from "../data/connection"
import moment from 'moment'

export default async function createClass(
    req: Request,
    res: Response,
): Promise<void> {
    try {
        let { name, inicial_date, final_date, module, type } = req.body
        
         if (!req.body.name || !req.body.inicial_date || !req.body.final_date || !req.body.module || !req.body.type) {
            res.status(400)
                .send('Os campos "name", "inicial_date", "final_date", "module" e "type" devem ser preenchidos!') .end()
        } 

           if (req.body.type === 'Noturno'){
            name = name + "-na-night"    
        }   

         if (req.body.module !== "0" || "1" || "2" || "3" || "4" || "5" || "6" || "7") {
            res.status(400)
        }
         
      
        const initialDate = moment(inicial_date, 'DD/MM/YYYY').format('YYYY-MM-DD')
        const finalDate = moment(final_date, 'DD/MM/YYYY').format('YYYY-MM-DD') 

        await connection("class")
            .insert({name, inicial_date:initialDate, final_date:finalDate , module, type})

        res.status(200).send('Turma criada com sucesso!')

    } catch (error) {
        res.status(900).end()
    }
}