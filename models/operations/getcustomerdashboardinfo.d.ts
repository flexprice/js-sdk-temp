import * as z from "zod/v3";
export type GetCustomerDashboardInfoSecurity = {
    bearerAuth: string;
};
/** @internal */
export type GetCustomerDashboardInfoSecurity$Outbound = {
    BearerAuth: string;
};
/** @internal */
export declare const GetCustomerDashboardInfoSecurity$outboundSchema: z.ZodType<GetCustomerDashboardInfoSecurity$Outbound, z.ZodTypeDef, GetCustomerDashboardInfoSecurity>;
export declare function getCustomerDashboardInfoSecurityToJSON(getCustomerDashboardInfoSecurity: GetCustomerDashboardInfoSecurity): string;
//# sourceMappingURL=getcustomerdashboardinfo.d.ts.map