import { Request, Response } from "express";
import {getStudentById } from '../services/getStudentById'



export  const getStudentAgeById = async(
    req:Request,
    res:Response)=>{

    try {
        
        const id = req.params.id
        const result = await getStudentById(Number(id))
        
          let date = result.birthdate.toString()
         
          let formatedDate = date.substring(15,11)   

          let age = 2021 - Number(formatedDate)  

       
        res.status(200).send(`A idade de ${result.name} é ${age} anos`)
       
    } catch (error) {
        res.status(900).send('Error')
    }

}

