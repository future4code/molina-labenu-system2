"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const createClass_1 = __importDefault(require("./endpoints/createClass"));
const getStudentAgeById_1 = require("./endpoints/getStudentAgeById");
exports.app = express_1.default();
exports.app.use(express_1.default.json());
exports.app.use(cors_1.default());
exports.app.put('/create', createClass_1.default);
exports.app.get("/student/age/:id", getStudentAgeById_1.getStudentAgeById);
const server = exports.app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
