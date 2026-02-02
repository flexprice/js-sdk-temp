import * as z from "zod/v3";
import { TypesPaymentStatus } from "./types-payment-status.js";
export type DtoUpdatePaymentStatusRequest = {
    /**
     * amount is the optional payment amount to record
     */
    amount?: string | undefined;
    paymentStatus: TypesPaymentStatus;
};
/** @internal */
export type DtoUpdatePaymentStatusRequest$Outbound = {
    amount?: string | undefined;
    payment_status: string;
};
/** @internal */
export declare const DtoUpdatePaymentStatusRequest$outboundSchema: z.ZodType<DtoUpdatePaymentStatusRequest$Outbound, z.ZodTypeDef, DtoUpdatePaymentStatusRequest>;
export declare function dtoUpdatePaymentStatusRequestToJSON(dtoUpdatePaymentStatusRequest: DtoUpdatePaymentStatusRequest): string;
//# sourceMappingURL=dto-update-payment-status-request.d.ts.map