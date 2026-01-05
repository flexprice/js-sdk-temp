import * as z from "zod/v3";
export type GetCustomerDashboardInvoicesIdSecurity = {
    bearerAuth: string;
};
export type GetCustomerDashboardInvoicesIdRequest = {
    /**
     * Invoice ID
     */
    id: string;
};
/** @internal */
export type GetCustomerDashboardInvoicesIdSecurity$Outbound = {
    BearerAuth: string;
};
/** @internal */
export declare const GetCustomerDashboardInvoicesIdSecurity$outboundSchema: z.ZodType<GetCustomerDashboardInvoicesIdSecurity$Outbound, z.ZodTypeDef, GetCustomerDashboardInvoicesIdSecurity>;
export declare function getCustomerDashboardInvoicesIdSecurityToJSON(getCustomerDashboardInvoicesIdSecurity: GetCustomerDashboardInvoicesIdSecurity): string;
/** @internal */
export type GetCustomerDashboardInvoicesIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetCustomerDashboardInvoicesIdRequest$outboundSchema: z.ZodType<GetCustomerDashboardInvoicesIdRequest$Outbound, z.ZodTypeDef, GetCustomerDashboardInvoicesIdRequest>;
export declare function getCustomerDashboardInvoicesIdRequestToJSON(getCustomerDashboardInvoicesIdRequest: GetCustomerDashboardInvoicesIdRequest): string;
//# sourceMappingURL=getcustomerdashboardinvoicesid.d.ts.map