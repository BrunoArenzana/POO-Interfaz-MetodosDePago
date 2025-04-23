export interface IPago {
    procesarPago(): void;
    cancelarPago(): void;
    generarComprobante(): string;
    }