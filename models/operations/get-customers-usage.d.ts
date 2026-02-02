import * as z from "zod/v3";
export type GetCustomersUsageRequest = {
    customerId?: string | undefined;
    customerLookupKey?: string | undefined;
    featureIds?: Array<string> | undefined;
    featureLookupKeys?: Array<string> | undefined;
    subscriptionIds?: Array<string> | undefined;
};
/** @internal */
export type GetCustomersUsageRequest$Outbound = {
    customer_id?: string | undefined;
    customer_lookup_key?: string | undefined;
    feature_ids?: Array<string> | undefined;
    feature_lookup_keys?: Array<string> | undefined;
    subscription_ids?: Array<string> | undefined;
};
/** @internal */
export declare const GetCustomersUsageRequest$outboundSchema: z.ZodType<GetCustomersUsageRequest$Outbound, z.ZodTypeDef, GetCustomersUsageRequest>;
export declare function getCustomersUsageRequestToJSON(getCustomersUsageRequest: GetCustomersUsageRequest): string;
//# sourceMappingURL=get-customers-usage.d.ts.map