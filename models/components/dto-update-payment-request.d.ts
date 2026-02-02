import * as z from "zod/v3";
export type DtoUpdatePaymentRequest = {
    errorMessage?: string | undefined;
    failedAt?: string | undefined;
    gatewayPaymentId?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    paymentGateway?: string | undefined;
    paymentMethodId?: string | undefined;
    paymentStatus?: string | undefined;
    succeededAt?: string | undefined;
};
/** @internal */
export type DtoUpdatePaymentRequest$Outbound = {
    error_message?: string | undefined;
    failed_at?: string | undefined;
    gateway_payment_id?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    payment_gateway?: string | undefined;
    payment_method_id?: string | undefined;
    payment_status?: string | undefined;
    succeeded_at?: string | undefined;
};
/** @internal */
export declare const DtoUpdatePaymentRequest$outboundSchema: z.ZodType<DtoUpdatePaymentRequest$Outbound, z.ZodTypeDef, DtoUpdatePaymentRequest>;
export declare function dtoUpdatePaymentRequestToJSON(dtoUpdatePaymentRequest: DtoUpdatePaymentRequest): string;
//# sourceMappingURL=dto-update-payment-request.d.ts.map