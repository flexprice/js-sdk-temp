import * as z from "zod/v3";
import { TypesPaymentStatus } from "./typespaymentstatus.js";
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
//# sourceMappingURL=dtoupdatepaymentstatusrequest.d.ts.map