import * as z from "zod/v3";
export type DtoDeleteSubscriptionLineItemRequest = {
    effectiveFrom?: string | undefined;
};
/** @internal */
export type DtoDeleteSubscriptionLineItemRequest$Outbound = {
    effective_from?: string | undefined;
};
/** @internal */
export declare const DtoDeleteSubscriptionLineItemRequest$outboundSchema: z.ZodType<DtoDeleteSubscriptionLineItemRequest$Outbound, z.ZodTypeDef, DtoDeleteSubscriptionLineItemRequest>;
export declare function dtoDeleteSubscriptionLineItemRequestToJSON(dtoDeleteSubscriptionLineItemRequest: DtoDeleteSubscriptionLineItemRequest): string;
//# sourceMappingURL=dto-delete-subscription-line-item-request.d.ts.map