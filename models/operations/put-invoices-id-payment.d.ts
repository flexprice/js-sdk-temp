import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutInvoicesIdPaymentRequest = {
    /**
     * Invoice ID
     */
    id: string;
    /**
     * Payment Status Update Request
     */
    body: components.DtoUpdatePaymentStatusRequest;
};
/** @internal */
export type PutInvoicesIdPaymentRequest$Outbound = {
    id: string;
    body: components.DtoUpdatePaymentStatusRequest$Outbound;
};
/** @internal */
export declare const PutInvoicesIdPaymentRequest$outboundSchema: z.ZodType<PutInvoicesIdPaymentRequest$Outbound, z.ZodTypeDef, PutInvoicesIdPaymentRequest>;
export declare function putInvoicesIdPaymentRequestToJSON(putInvoicesIdPaymentRequest: PutInvoicesIdPaymentRequest): string;
//# sourceMappingURL=put-invoices-id-payment.d.ts.map