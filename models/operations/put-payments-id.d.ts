import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutPaymentsIdRequest = {
    /**
     * Payment ID
     */
    id: string;
    /**
     * Payment configuration
     */
    body: components.DtoUpdatePaymentRequest;
};
/** @internal */
export type PutPaymentsIdRequest$Outbound = {
    id: string;
    body: components.DtoUpdatePaymentRequest$Outbound;
};
/** @internal */
export declare const PutPaymentsIdRequest$outboundSchema: z.ZodType<PutPaymentsIdRequest$Outbound, z.ZodTypeDef, PutPaymentsIdRequest>;
export declare function putPaymentsIdRequestToJSON(putPaymentsIdRequest: PutPaymentsIdRequest): string;
//# sourceMappingURL=put-payments-id.d.ts.map