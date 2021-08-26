import { connection } from "./connection"


const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`

   CREATE TABLE IF NOT EXISTS class(
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      inicial_date DATE NOT NULL,
      final_date DATE NOT NULL,
      module ENUM ('0', '1', '2', '3', '4', '5', '6', '7')
   );
   CREATE TABLE IF NOT EXISTS teachers(
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      birthdate DATE NOT NULL,
      class_id INT NOT NULL,
      FOREIGN KEY(class_id) REFERENCES class(id) 
   );
   CREATE TABLE IF NOT EXISTS students(
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      birthdate DATE NOT NULL,
      class_id INT NOT NULL,
      FOREIGN KEY(class_id) REFERENCES class(id) 
   );
   CREATE TABLE IF NOT EXISTS hobbies(
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL
   );
   CREATE TABLE IF NOT EXISTS skill(
      id INT PRIMARY KEY AUTO_INCREMENT,
      name ENUM ("React" , "Redux", "CSS", "Testes", "Typescript", "Programação Orientada a Objetos", "Backend") NOT NULL
   );
   CREATE TABLE IF NOT EXISTS student_hobbies(
      fk_student INT,
      fk_hobbie INT,   
      PRIMARY KEY (fk_hobbie, fk_student),
      FOREIGN KEY(fk_hobbie) REFERENCES students(id),
      FOREIGN KEY(fk_student) REFERENCES hobbies(id)
   );
   CREATE TABLE IF NOT EXISTS teacher_skill(
      fk_teacher INT,
      fk_skill INT,
      PRIMARY KEY (fk_teacher, fk_skill),
      FOREIGN KEY(fk_skill) REFERENCES teachers(id),
      FOREIGN KEY(fk_teacher) REFERENCES skill(id)
   );

     
   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)


const closeConnection = () => { connection.destroy() }

createTables()
   
   .finally(closeConnection)