import { connection } from "./connection"


const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`

      
   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)



const closeConnection = () => { connection.destroy() }

createTables()
   
   .finally(closeConnection)