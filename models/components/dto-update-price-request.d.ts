import * as z from "zod/v3";
import { DtoCreatePriceTier, DtoCreatePriceTier$Outbound } from "./dto-create-price-tier.js";
import { PriceTransformQuantity, PriceTransformQuantity$Outbound } from "./price-transform-quantity.js";
import { TypesBillingModel } from "./types-billing-model.js";
import { TypesBillingTier } from "./types-billing-tier.js";
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
    /**
     * PriceUnitAmount is the price unit amount (for CUSTOM price unit type, FLAT_FEE/PACKAGE billing models)
     */
    priceUnitAmount?: string | undefined;
    /**
     * PriceUnitTiers are the price unit tiers (for CUSTOM price unit type, TIERED billing model)
     */
    priceUnitTiers?: Array<DtoCreatePriceTier> | undefined;
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
    price_unit_amount?: string | undefined;
    price_unit_tiers?: Array<DtoCreatePriceTier$Outbound> | undefined;
    tier_mode?: string | undefined;
    tiers?: Array<DtoCreatePriceTier$Outbound> | undefined;
    transform_quantity?: PriceTransformQuantity$Outbound | undefined;
};
/** @internal */
export declare const DtoUpdatePriceRequest$outboundSchema: z.ZodType<DtoUpdatePriceRequest$Outbound, z.ZodTypeDef, DtoUpdatePriceRequest>;
export declare function dtoUpdatePriceRequestToJSON(dtoUpdatePriceRequest: DtoUpdatePriceRequest): string;
//# sourceMappingURL=dto-update-price-request.d.ts.map