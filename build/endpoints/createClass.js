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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../data/connection");
const moment_1 = __importDefault(require("moment"));
function createClass(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let { name, inicial_date, final_date, module, type } = req.body;
            if (!req.body.name || !req.body.inicial_date || !req.body.final_date || !req.body.module || !req.body.type) {
                res.status(400)
                    .send('Os campos "name", "inicial_date", "final_date", "module" e "type" devem ser preenchidos!').end();
            }
            if (req.body.type === 'Noturno') {
                name = name + "-na-night";
            }
            if (req.body.module !== "0" || "1" || "2" || "3" || "4" || "5" || "6" || "7") {
                res.status(400);
            }
            const initialDate = moment_1.default(inicial_date, 'DD/MM/YYYY').format('YYYY-MM-DD');
            const finalDate = moment_1.default(final_date, 'DD/MM/YYYY').format('YYYY-MM-DD');
            yield connection_1.connection("class")
                .insert({ name, inicial_date: initialDate, final_date: finalDate, module, type });
            res.status(200).send('Turma criada com sucesso!');
        }
        catch (error) {
            res.status(900).end();
        }
    });
}
exports.default = createClass;
