import { Titular, buscarTitulares } from "./model/Titular.js";
import { Conta } from "./model/Conta.js";

let titulares = buscarTitulares()

let c1 = new Conta(500, 1234, 543, 2598, titulares[0])
let c2 = new Conta(400, 12345, 5432, 25987, titulares[1])
let c3 = new Conta(300, 123456, 54321, 259876, titulares[2])

let contas = [c1, c2, c3]
