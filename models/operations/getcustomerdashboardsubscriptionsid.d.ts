import * as z from "zod/v3";
export type GetCustomerDashboardSubscriptionsIdSecurity = {
    bearerAuth: string;
};
export type GetCustomerDashboardSubscriptionsIdRequest = {
    /**
     * Subscription ID
     */
    id: string;
};
/** @internal */
export type GetCustomerDashboardSubscriptionsIdSecurity$Outbound = {
    BearerAuth: string;
};
/** @internal */
export declare const GetCustomerDashboardSubscriptionsIdSecurity$outboundSchema: z.ZodType<GetCustomerDashboardSubscriptionsIdSecurity$Outbound, z.ZodTypeDef, GetCustomerDashboardSubscriptionsIdSecurity>;
export declare function getCustomerDashboardSubscriptionsIdSecurityToJSON(getCustomerDashboardSubscriptionsIdSecurity: GetCustomerDashboardSubscriptionsIdSecurity): string;
/** @internal */
export type GetCustomerDashboardSubscriptionsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetCustomerDashboardSubscriptionsIdRequest$outboundSchema: z.ZodType<GetCustomerDashboardSubscriptionsIdRequest$Outbound, z.ZodTypeDef, GetCustomerDashboardSubscriptionsIdRequest>;
export declare function getCustomerDashboardSubscriptionsIdRequestToJSON(getCustomerDashboardSubscriptionsIdRequest: GetCustomerDashboardSubscriptionsIdRequest): string;
//# sourceMappingURL=getcustomerdashboardsubscriptionsid.d.ts.map