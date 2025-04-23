import { IPago } from "./IPago";
export class TransferenciaBancaria implements IPago {
    private cuentaOrigen: string;
    private cuentaDestino: string;
    private monto: number;

    constructor(pCuentaOrigen: string, pCuentaDestino: string, pMonto: number) {
        this.cuentaOrigen = pCuentaOrigen;
        this.cuentaDestino = pCuentaDestino;
        this.monto = pMonto;
    }

    procesarPago(): void {
        console.log(`El pago de ${this.monto} fue transferido desde la cuenta ${this.cuentaOrigen} hacia la cuenta ${this.cuentaDestino}.`);
    }

    cancelarPago(): void {
        console.log(`El pago por transferencia de ${this.monto} desde la cuenta ${this.cuentaOrigen} fue cancelado.`);
    }

    generarComprobante(): string {
        return `Comprobante de transferencia: ${this.monto} desde ${this.cuentaOrigen} hacia ${this.cuentaDestino}. Realizado con éxito.`;
    }
}
