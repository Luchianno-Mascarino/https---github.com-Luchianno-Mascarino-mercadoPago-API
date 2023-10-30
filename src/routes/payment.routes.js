import { Router } from "express";

const router = Router()

//Creacion de la orden de pago
router.get('/create-order', (req, res) => ('Creating order'));

//Cuando se completa el pago
router.get('/success', (req, res) => res.send('Creating order'));

//Cuando la transaccion esta en espera
router.get('/webhook', (req, res) => res.send('webhook'))


export default router