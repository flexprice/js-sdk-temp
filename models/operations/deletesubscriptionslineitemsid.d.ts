import * as z from "zod/v3";
import * as components from "../components/index.js";
export type DeleteSubscriptionsLineitemsIdRequest = {
    /**
     * Line Item ID
     */
    id: string;
    /**
     * Delete Line Item Request
     */
    body: components.DtoDeleteSubscriptionLineItemRequest;
};
/** @internal */
export type DeleteSubscriptionsLineitemsIdRequest$Outbound = {
    id: string;
    body: components.DtoDeleteSubscriptionLineItemRequest$Outbound;
};
/** @internal */
export declare const DeleteSubscriptionsLineitemsIdRequest$outboundSchema: z.ZodType<DeleteSubscriptionsLineitemsIdRequest$Outbound, z.ZodTypeDef, DeleteSubscriptionsLineitemsIdRequest>;
export declare function deleteSubscriptionsLineitemsIdRequestToJSON(deleteSubscriptionsLineitemsIdRequest: DeleteSubscriptionsLineitemsIdRequest): string;
//# sourceMappingURL=deletesubscriptionslineitemsid.d.ts.map