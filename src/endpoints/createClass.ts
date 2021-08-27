/* import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function createClass(
    req: Request,
    res: Response
): Promise<void> {
    try {

        let { name, initial_date, final_date, module } = req.body

        if (!req.body.name || !req.body.initial_date || !req.body.final_date || !req.body.module) {
            res.status(400)
                .send('Os campos "name", "initial_date", "final_date" e "module" devem ser preenchidos!')
        }

        let id: number = Date.now() + Math.random()

        await connection('class')
            .insert({ id, name, initial_date, final_date, module })

        res.status(200).send('Turma criada com sucesso!')

    } catch (error) {
        res.status(500).end()
    }
} */