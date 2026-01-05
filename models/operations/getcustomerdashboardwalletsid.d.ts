import * as z from "zod/v3";
export type GetCustomerDashboardWalletsIdSecurity = {
    bearerAuth: string;
};
export type GetCustomerDashboardWalletsIdRequest = {
    /**
     * Wallet ID
     */
    id: string;
};
/** @internal */
export type GetCustomerDashboardWalletsIdSecurity$Outbound = {
    BearerAuth: string;
};
/** @internal */
export declare const GetCustomerDashboardWalletsIdSecurity$outboundSchema: z.ZodType<GetCustomerDashboardWalletsIdSecurity$Outbound, z.ZodTypeDef, GetCustomerDashboardWalletsIdSecurity>;
export declare function getCustomerDashboardWalletsIdSecurityToJSON(getCustomerDashboardWalletsIdSecurity: GetCustomerDashboardWalletsIdSecurity): string;
/** @internal */
export type GetCustomerDashboardWalletsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetCustomerDashboardWalletsIdRequest$outboundSchema: z.ZodType<GetCustomerDashboardWalletsIdRequest$Outbound, z.ZodTypeDef, GetCustomerDashboardWalletsIdRequest>;
export declare function getCustomerDashboardWalletsIdRequestToJSON(getCustomerDashboardWalletsIdRequest: GetCustomerDashboardWalletsIdRequest): string;
//# sourceMappingURL=getcustomerdashboardwalletsid.d.ts.map