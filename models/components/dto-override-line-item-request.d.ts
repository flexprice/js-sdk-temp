import * as z from "zod/v3";
import { DtoCreatePriceTier, DtoCreatePriceTier$Outbound } from "./dto-create-price-tier.js";
import { PriceTransformQuantity, PriceTransformQuantity$Outbound } from "./price-transform-quantity.js";
import { TypesBillingModel } from "./types-billing-model.js";
import { TypesBillingTier } from "./types-billing-tier.js";
export type DtoOverrideLineItemRequest = {
    /**
     * Amount is the new price amount that overrides the original price (optional)
     */
    amount?: string | undefined;
    billingModel?: TypesBillingModel | undefined;
    /**
     * PriceID references the plan price to override
     */
    priceId: string;
    /**
     * PriceUnitAmount is the amount of the price unit (for CUSTOM type, FLAT_FEE/PACKAGE billing models)
     */
    priceUnitAmount?: string | undefined;
    /**
     * PriceUnitTiers are the tiers for the price unit (for CUSTOM type, TIERED billing model)
     */
    priceUnitTiers?: Array<DtoCreatePriceTier> | undefined;
    /**
     * Quantity for this line item (optional)
     */
    quantity?: string | undefined;
    tierMode?: TypesBillingTier | undefined;
    /**
     * Tiers determines the pricing tiers for this line item
     */
    tiers?: Array<DtoCreatePriceTier> | undefined;
    transformQuantity?: PriceTransformQuantity | undefined;
};
/** @internal */
export type DtoOverrideLineItemRequest$Outbound = {
    amount?: string | undefined;
    billing_model?: string | undefined;
    price_id: string;
    price_unit_amount?: string | undefined;
    price_unit_tiers?: Array<DtoCreatePriceTier$Outbound> | undefined;
    quantity?: string | undefined;
    tier_mode?: string | undefined;
    tiers?: Array<DtoCreatePriceTier$Outbound> | undefined;
    transform_quantity?: PriceTransformQuantity$Outbound | undefined;
};
/** @internal */
export declare const DtoOverrideLineItemRequest$outboundSchema: z.ZodType<DtoOverrideLineItemRequest$Outbound, z.ZodTypeDef, DtoOverrideLineItemRequest>;
export declare function dtoOverrideLineItemRequestToJSON(dtoOverrideLineItemRequest: DtoOverrideLineItemRequest): string;
//# sourceMappingURL=dto-override-line-item-request.d.ts.map