import { IPago } from "./IPago";
export class MercadoPago implements IPago {
    private emailUsuario: string;

    constructor(pEmailUsuario: string) {
        this.emailUsuario = pEmailUsuario;
    }

    procesarPago(): void {
        console.log(`El pago fue procesado con la cuenta de MercadoPago asociada al correo electrónico: ${this.emailUsuario}.`);
    }

    cancelarPago(): void {
        console.log(`El pago realizado con la cuenta de MercadoPago asociada al correo ${this.emailUsuario} ha sido cancelado.`);
    }

    generarComprobante(): string {
        return `Comprobante de pago realizado con MercadoPago desde la cuenta: ${this.emailUsuario}. Enviado con éxito`;
    }
}
