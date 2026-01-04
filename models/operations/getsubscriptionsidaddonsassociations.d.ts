import * as z from "zod/v3";
export type GetSubscriptionsIdAddonsAssociationsRequest = {
    /**
     * Subscription ID
     */
    id: string;
};
/** @internal */
export type GetSubscriptionsIdAddonsAssociationsRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetSubscriptionsIdAddonsAssociationsRequest$outboundSchema: z.ZodType<GetSubscriptionsIdAddonsAssociationsRequest$Outbound, z.ZodTypeDef, GetSubscriptionsIdAddonsAssociationsRequest>;
export declare function getSubscriptionsIdAddonsAssociationsRequestToJSON(getSubscriptionsIdAddonsAssociationsRequest: GetSubscriptionsIdAddonsAssociationsRequest): string;
//# sourceMappingURL=getsubscriptionsidaddonsassociations.d.ts.map