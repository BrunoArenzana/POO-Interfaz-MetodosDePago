import  { IPago } from "./IPago";
export class TarjetaCredito implements IPago {
    private numeroTarjeta: number;
    private entidadBancaria: string;
    private cuotas: number;

    constructor(pNumeroTarjeta: number, pEntidadBancaria: string, pCuotas: number) {
        this.numeroTarjeta = pNumeroTarjeta;
        this.entidadBancaria = pEntidadBancaria;
        this.cuotas = pCuotas;
    }
    getNumeroTarjeta(): number {
        return this.numeroTarjeta;
    }
    getFechaVencimiento(): string {
        return this.entidadBancaria;
    }
    getCuotas(): number {
        return this.cuotas;
    }
    getEntidadBancaria(): string {
        return this.entidadBancaria;    
    }
   
    setNumeroTarjeta(pNumeroTarjeta: number): void {
        this.numeroTarjeta = pNumeroTarjeta;
    }
    setEntidadBancaria(pEntidadBancaria: string): void {
        this.entidadBancaria = pEntidadBancaria;
    }
    setCuotas(pCuotas: number): void {
        this.cuotas = pCuotas;
    }
    procesarPago(): void {
        console.log("El pago fue procesado con la tarjeta de perteneciente a la entidad: " + this.entidadBancaria + " numero de tarjeta: " + this.numeroTarjeta + ` en ${this.cuotas} cuotas`);
    }
    cancelarPago(): void {
        console.log("El pago fue cancelado con la tarjeta de credito numero " + this.numeroTarjeta + ", se Adjunta comprobante de cancelacion");
    }
    generarComprobante(): string {
        return "Comprobante de pago con tarjeta de credito numero " + this.numeroTarjeta + " en " + this.cuotas + " cuotas, perteneciente a la entidad bancaria " + this.entidadBancaria;
    }

}
