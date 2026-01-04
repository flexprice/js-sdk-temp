import * as z from "zod/v3";
export type GetCustomersIdEntitlementsRequest = {
    /**
     * Customer ID
     */
    id: string;
    featureIds?: Array<string> | undefined;
    subscriptionIds?: Array<string> | undefined;
};
/** @internal */
export type GetCustomersIdEntitlementsRequest$Outbound = {
    id: string;
    feature_ids?: Array<string> | undefined;
    subscription_ids?: Array<string> | undefined;
};
/** @internal */
export declare const GetCustomersIdEntitlementsRequest$outboundSchema: z.ZodType<GetCustomersIdEntitlementsRequest$Outbound, z.ZodTypeDef, GetCustomersIdEntitlementsRequest>;
export declare function getCustomersIdEntitlementsRequestToJSON(getCustomersIdEntitlementsRequest: GetCustomersIdEntitlementsRequest): string;
//# sourceMappingURL=getcustomersidentitlements.d.ts.map