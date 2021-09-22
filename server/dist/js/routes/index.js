"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Setting all the routes
const express_1 = __importStar(require("express"));
const todos_1 = require("../controllers/todos");
const router = express_1.Router();
// using express middleware to read body
router.use(express_1.default.json());
//get all todos
router.get("/todos", todos_1.getTodo);
//add todo
router.post("/addTodo", todos_1.addTodo);
//updateTodo
router.put("/updateTodo/:id", todos_1.updateTodo);
//delete todo
router.delete("/deleteTodo/:_id", todos_1.deleteTodo);
exports.default = router;
