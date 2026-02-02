import * as z from "zod/v3";
import { DtoLineItemCommitmentConfig, DtoLineItemCommitmentConfig$Outbound } from "./dto-line-item-commitment-config.js";
export type DtoAddAddonRequest = {
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
    subscriptionId: string;
};
/** @internal */
export type DtoAddAddonRequest$Outbound = {
    addon_id: string;
    line_item_commitments?: {
        [k: string]: DtoLineItemCommitmentConfig$Outbound;
    } | undefined;
    metadata?: {
        [k: string]: any;
    } | undefined;
    start_date?: string | undefined;
    subscription_id: string;
};
/** @internal */
export declare const DtoAddAddonRequest$outboundSchema: z.ZodType<DtoAddAddonRequest$Outbound, z.ZodTypeDef, DtoAddAddonRequest>;
export declare function dtoAddAddonRequestToJSON(dtoAddAddonRequest: DtoAddAddonRequest): string;
//# sourceMappingURL=dto-add-addon-request.d.ts.map