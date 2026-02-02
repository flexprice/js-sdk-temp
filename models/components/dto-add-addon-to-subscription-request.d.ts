import * as z from "zod/v3";
import { DtoLineItemCommitmentConfig, DtoLineItemCommitmentConfig$Outbound } from "./dto-line-item-commitment-config.js";
export type DtoAddAddonToSubscriptionRequest = {
    addonId: string;
    /**
     * LineItemCommitments allows setting commitment configuration per addon line item (keyed by price_id)
     */
    lineItemCommitments?: {
        [k: string]: DtoLineItemCommitmentConfig;
    } | undefined;
    metadata?: {
        [k: string]: any;
    } | undefined;
    startDate?: string | undefined;
};
/** @internal */
export type DtoAddAddonToSubscriptionRequest$Outbound = {
    addon_id: string;
    line_item_commitments?: {
        [k: string]: DtoLineItemCommitmentConfig$Outbound;
    } | undefined;
    metadata?: {
        [k: string]: any;
    } | undefined;
    start_date?: string | undefined;
};
/** @internal */
export declare const DtoAddAddonToSubscriptionRequest$outboundSchema: z.ZodType<DtoAddAddonToSubscriptionRequest$Outbound, z.ZodTypeDef, DtoAddAddonToSubscriptionRequest>;
export declare function dtoAddAddonToSubscriptionRequestToJSON(dtoAddAddonToSubscriptionRequest: DtoAddAddonToSubscriptionRequest): string;
//# sourceMappingURL=dto-add-addon-to-subscription-request.d.ts.map