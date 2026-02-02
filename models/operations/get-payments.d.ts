import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const GetPaymentsOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type GetPaymentsOrder = ClosedEnum<typeof GetPaymentsOrder>;
export declare const GetPaymentsStatus: {
    readonly Published: "published";
    readonly Deleted: "deleted";
    readonly Archived: "archived";
};
export type GetPaymentsStatus = ClosedEnum<typeof GetPaymentsStatus>;
export type GetPaymentsRequest = {
    currency?: string | undefined;
    destinationId?: string | undefined;
    destinationType?: string | undefined;
    endTime?: string | undefined;
    expand?: string | undefined;
    gatewayPaymentId?: string | undefined;
    /**
     * For filtering by gateway tracking ID
     */
    gatewayTrackingId?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: GetPaymentsOrder | undefined;
    paymentGateway?: string | undefined;
    paymentIds?: Array<string> | undefined;
    paymentMethodType?: string | undefined;
    paymentStatus?: string | undefined;
    sort?: string | undefined;
    startTime?: string | undefined;
    status?: GetPaymentsStatus | undefined;
};
/** @internal */
export declare const GetPaymentsOrder$outboundSchema: z.ZodNativeEnum<typeof GetPaymentsOrder>;
/** @internal */
export declare const GetPaymentsStatus$outboundSchema: z.ZodNativeEnum<typeof GetPaymentsStatus>;
/** @internal */
export type GetPaymentsRequest$Outbound = {
    currency?: string | undefined;
    destination_id?: string | undefined;
    destination_type?: string | undefined;
    end_time?: string | undefined;
    expand?: string | undefined;
    gateway_payment_id?: string | undefined;
    gateway_tracking_id?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    payment_gateway?: string | undefined;
    payment_ids?: Array<string> | undefined;
    payment_method_type?: string | undefined;
    payment_status?: string | undefined;
    sort?: string | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const GetPaymentsRequest$outboundSchema: z.ZodType<GetPaymentsRequest$Outbound, z.ZodTypeDef, GetPaymentsRequest>;
export declare function getPaymentsRequestToJSON(getPaymentsRequest: GetPaymentsRequest): string;
//# sourceMappingURL=get-payments.d.ts.map