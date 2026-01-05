import * as z from "zod/v3";
import { DtoCreatePriceTier, DtoCreatePriceTier$Outbound } from "./dtocreatepricetier.js";
import { PriceTransformQuantity, PriceTransformQuantity$Outbound } from "./pricetransformquantity.js";
import { TypesBillingModel } from "./typesbillingmodel.js";
import { TypesBillingTier } from "./typesbillingtier.js";
export type DtoUpdatePriceRequest = {
    /**
     * Amount is the new price amount that overrides the original price (optional)
     */
    amount?: string | undefined;
    billingModel?: TypesBillingModel | undefined;
    description?: string | undefined;
    displayName?: string | undefined;
    effectiveFrom?: string | undefined;
    /**
     * GroupID is the id of the group to update the price in
     */
    groupId?: string | undefined;
    /**
     * All price fields that can be updated
     *
     * @remarks
     * Non-critical fields (can be updated directly)
     */
    lookupKey?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    tierMode?: TypesBillingTier | undefined;
    /**
     * Tiers determines the pricing tiers for this line item
     */
    tiers?: Array<DtoCreatePriceTier> | undefined;
    transformQuantity?: PriceTransformQuantity | undefined;
};
/** @internal */
export type DtoUpdatePriceRequest$Outbound = {
    amount?: string | undefined;
    billing_model?: string | undefined;
    description?: string | undefined;
    display_name?: string | undefined;
    effective_from?: string | undefined;
    group_id?: string | undefined;
    lookup_key?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    tier_mode?: string | undefined;
    tiers?: Array<DtoCreatePriceTier$Outbound> | undefined;
    transform_quantity?: PriceTransformQuantity$Outbound | undefined;
};
/** @internal */
export declare const DtoUpdatePriceRequest$outboundSchema: z.ZodType<DtoUpdatePriceRequest$Outbound, z.ZodTypeDef, DtoUpdatePriceRequest>;
export declare function dtoUpdatePriceRequestToJSON(dtoUpdatePriceRequest: DtoUpdatePriceRequest): string;
//# sourceMappingURL=dtoupdatepricerequest.d.ts.map