import * as z from "zod/v3";
export type GetCustomerDashboardUsageSecurity = {
    bearerAuth: string;
};
export type GetCustomerDashboardUsageRequest = {
    customerId?: string | undefined;
    customerLookupKey?: string | undefined;
    featureIds?: Array<string> | undefined;
    featureLookupKeys?: Array<string> | undefined;
    subscriptionIds?: Array<string> | undefined;
};
/** @internal */
export type GetCustomerDashboardUsageSecurity$Outbound = {
    BearerAuth: string;
};
/** @internal */
export declare const GetCustomerDashboardUsageSecurity$outboundSchema: z.ZodType<GetCustomerDashboardUsageSecurity$Outbound, z.ZodTypeDef, GetCustomerDashboardUsageSecurity>;
export declare function getCustomerDashboardUsageSecurityToJSON(getCustomerDashboardUsageSecurity: GetCustomerDashboardUsageSecurity): string;
/** @internal */
export type GetCustomerDashboardUsageRequest$Outbound = {
    customer_id?: string | undefined;
    customer_lookup_key?: string | undefined;
    feature_ids?: Array<string> | undefined;
    feature_lookup_keys?: Array<string> | undefined;
    subscription_ids?: Array<string> | undefined;
};
/** @internal */
export declare const GetCustomerDashboardUsageRequest$outboundSchema: z.ZodType<GetCustomerDashboardUsageRequest$Outbound, z.ZodTypeDef, GetCustomerDashboardUsageRequest>;
export declare function getCustomerDashboardUsageRequestToJSON(getCustomerDashboardUsageRequest: GetCustomerDashboardUsageRequest): string;
//# sourceMappingURL=getcustomerdashboardusage.d.ts.map