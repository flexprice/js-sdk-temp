import * as z from "zod/v3";
export type PutCustomerDashboardInfoSecurity = {
    bearerAuth: string;
};
/** @internal */
export type PutCustomerDashboardInfoSecurity$Outbound = {
    BearerAuth: string;
};
/** @internal */
export declare const PutCustomerDashboardInfoSecurity$outboundSchema: z.ZodType<PutCustomerDashboardInfoSecurity$Outbound, z.ZodTypeDef, PutCustomerDashboardInfoSecurity>;
export declare function putCustomerDashboardInfoSecurityToJSON(putCustomerDashboardInfoSecurity: PutCustomerDashboardInfoSecurity): string;
//# sourceMappingURL=putcustomerdashboardinfo.d.ts.map