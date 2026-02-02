import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutSubscriptionsLineitemsIdRequest = {
    /**
     * Line Item ID
     */
    id: string;
    /**
     * Update Line Item Request
     */
    body: components.DtoUpdateSubscriptionLineItemRequest;
};
/** @internal */
export type PutSubscriptionsLineitemsIdRequest$Outbound = {
    id: string;
    body: components.DtoUpdateSubscriptionLineItemRequest$Outbound;
};
/** @internal */
export declare const PutSubscriptionsLineitemsIdRequest$outboundSchema: z.ZodType<PutSubscriptionsLineitemsIdRequest$Outbound, z.ZodTypeDef, PutSubscriptionsLineitemsIdRequest>;
export declare function putSubscriptionsLineitemsIdRequestToJSON(putSubscriptionsLineitemsIdRequest: PutSubscriptionsLineitemsIdRequest): string;
//# sourceMappingURL=put-subscriptions-lineitems-id.d.ts.map