import { connection } from "../data/connection"

export const getStudentById = async (
    id: number

) => {

    const result = await connection("students")
        .select('*')
        .where({ id })

    return result[0]
}