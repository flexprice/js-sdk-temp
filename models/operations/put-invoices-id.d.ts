import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutInvoicesIdRequest = {
    /**
     * Invoice ID
     */
    id: string;
    /**
     * Invoice Update Request
     */
    body: components.DtoUpdateInvoiceRequest;
};
/** @internal */
export type PutInvoicesIdRequest$Outbound = {
    id: string;
    body: components.DtoUpdateInvoiceRequest$Outbound;
};
/** @internal */
export declare const PutInvoicesIdRequest$outboundSchema: z.ZodType<PutInvoicesIdRequest$Outbound, z.ZodTypeDef, PutInvoicesIdRequest>;
export declare function putInvoicesIdRequestToJSON(putInvoicesIdRequest: PutInvoicesIdRequest): string;
//# sourceMappingURL=put-invoices-id.d.ts.map