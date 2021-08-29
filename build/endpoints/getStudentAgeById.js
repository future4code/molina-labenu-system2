"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentAgeById = void 0;
const getStudentById_1 = require("../services/getStudentById");
exports.getStudentAgeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield getStudentById_1.getStudentById(Number(id));
        /* let age: number = 2021 - Number(formatedDate)  */
        let date = result.birthdate.toString();
        let formatedDate = date.substring(15, 11);
        let age = 2021 - Number(formatedDate);
        /* const teste = "teste"
        const newTeste = teste.substr(2) */
        res.status(200).send(`A idade de ${result.name} é ${age}`);
    }
    catch (error) {
        res.status(900).send('Error');
    }
});
/* é ${age} */ 
