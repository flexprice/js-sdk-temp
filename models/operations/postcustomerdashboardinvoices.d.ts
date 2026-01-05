import * as z from "zod/v3";
export type PostCustomerDashboardInvoicesSecurity = {
    bearerAuth: string;
};
/** @internal */
export type PostCustomerDashboardInvoicesSecurity$Outbound = {
    BearerAuth: string;
};
/** @internal */
export declare const PostCustomerDashboardInvoicesSecurity$outboundSchema: z.ZodType<PostCustomerDashboardInvoicesSecurity$Outbound, z.ZodTypeDef, PostCustomerDashboardInvoicesSecurity>;
export declare function postCustomerDashboardInvoicesSecurityToJSON(postCustomerDashboardInvoicesSecurity: PostCustomerDashboardInvoicesSecurity): string;
//# sourceMappingURL=postcustomerdashboardinvoices.d.ts.map