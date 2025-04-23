import { TarjetaCredito } from "./tarjetaCredito";
import { MercadoPago } from "./mercadoPago";
import { TransferenciaBancaria } from "./transferenciaBancaria";


const mercadoPago = new MercadoPago("brunoarenzana@gmail.com");
const transferencia = new TransferenciaBancaria("00112233", "99887766", 1000);
const tarjetaCredito = new TarjetaCredito(1234567812345678, "Banco Nación", 12);
console.log("----  ----");
console.log("---- Prueba de MercadoPago ----");//Prueba del método procesarPago, CancelarPago y generarComprobante
mercadoPago.procesarPago(); 
mercadoPago.cancelarPago(); 
console.log(mercadoPago.generarComprobante());
console.log("----  ----");


console.log("---- Prueba de Transferencia Bancaria ----");//Prueba del método procesarPago, CancelarPago y generarComprobante
transferencia.procesarPago(); 
transferencia.cancelarPago(); 
console.log(transferencia.generarComprobante());
console.log("----  ----");

console.log("---- Prueba de Tarjeta de Crédito ----");//Prueba del método procesarPago, CancelarPago y generarComprobante
tarjetaCredito.procesarPago(); 
tarjetaCredito.cancelarPago();
console.log(tarjetaCredito.generarComprobante());
console.log("----  ----");
console.log("----Accedo y modifico Valores con Get´s y Set´s ----");
// Accedo y modifico valores  de atributos con los get y set -
console.log(`Número de tarjeta inicial: ${tarjetaCredito.getNumeroTarjeta()}`);
tarjetaCredito.setNumeroTarjeta(8765432187654321); // Modifico número de tarjeta
console.log(`Número de tarjeta actualizado: ${tarjetaCredito.getNumeroTarjeta()}`);

console.log(`Entidad bancaria inicial: ${tarjetaCredito.getEntidadBancaria()}`);
tarjetaCredito.setEntidadBancaria("Banco Provincia"); // Modifico la entidad bancaria
console.log(`Entidad bancaria actualizada: ${tarjetaCredito.getEntidadBancaria()}`);

console.log(`Cuotas iniciales: ${tarjetaCredito.getCuotas()}`);
tarjetaCredito.setCuotas(24); // cambio la cantidad de cuotas
console.log(`Cuotas actualizadas: ${tarjetaCredito.getCuotas()}`);

