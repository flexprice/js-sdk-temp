import * as z from "zod/v3";
import { DtoCreatePriceTier, DtoCreatePriceTier$Outbound } from "./dtocreatepricetier.js";
import { PriceTransformQuantity, PriceTransformQuantity$Outbound } from "./pricetransformquantity.js";
import { TypesBillingModel } from "./typesbillingmodel.js";
import { TypesBillingTier } from "./typesbillingtier.js";
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
    quantity?: string | undefined;
    tier_mode?: string | undefined;
    tiers?: Array<DtoCreatePriceTier$Outbound> | undefined;
    transform_quantity?: PriceTransformQuantity$Outbound | undefined;
};
/** @internal */
export declare const DtoOverrideLineItemRequest$outboundSchema: z.ZodType<DtoOverrideLineItemRequest$Outbound, z.ZodTypeDef, DtoOverrideLineItemRequest>;
export declare function dtoOverrideLineItemRequestToJSON(dtoOverrideLineItemRequest: DtoOverrideLineItemRequest): string;
//# sourceMappingURL=dtooverridelineitemrequest.d.ts.map