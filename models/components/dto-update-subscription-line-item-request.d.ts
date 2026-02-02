import * as z from "zod/v3";
import { DtoCreatePriceTier, DtoCreatePriceTier$Outbound } from "./dto-create-price-tier.js";
import { PriceTransformQuantity, PriceTransformQuantity$Outbound } from "./price-transform-quantity.js";
import { TypesBillingModel } from "./types-billing-model.js";
import { TypesBillingTier } from "./types-billing-tier.js";
import { TypesCommitmentType } from "./types-commitment-type.js";
export type DtoUpdateSubscriptionLineItemRequest = {
    /**
     * Amount is the new price amount that overrides the original price
     */
    amount?: string | undefined;
    billingModel?: TypesBillingModel | undefined;
    /**
     * Commitment fields
     */
    commitmentAmount?: number | undefined;
    commitmentOverageFactor?: number | undefined;
    commitmentQuantity?: number | undefined;
    commitmentTrueUpEnabled?: boolean | undefined;
    commitmentType?: TypesCommitmentType | undefined;
    commitmentWindowed?: boolean | undefined;
    /**
     * EffectiveFrom for the existing line item (if not provided, defaults to now)
     */
    effectiveFrom?: string | undefined;
    /**
     * Metadata for the new line item
     */
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
export type DtoUpdateSubscriptionLineItemRequest$Outbound = {
    amount?: string | undefined;
    billing_model?: string | undefined;
    commitment_amount?: number | undefined;
    commitment_overage_factor?: number | undefined;
    commitment_quantity?: number | undefined;
    commitment_true_up_enabled?: boolean | undefined;
    commitment_type?: string | undefined;
    commitment_windowed?: boolean | undefined;
    effective_from?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    tier_mode?: string | undefined;
    tiers?: Array<DtoCreatePriceTier$Outbound> | undefined;
    transform_quantity?: PriceTransformQuantity$Outbound | undefined;
};
/** @internal */
export declare const DtoUpdateSubscriptionLineItemRequest$outboundSchema: z.ZodType<DtoUpdateSubscriptionLineItemRequest$Outbound, z.ZodTypeDef, DtoUpdateSubscriptionLineItemRequest>;
export declare function dtoUpdateSubscriptionLineItemRequestToJSON(dtoUpdateSubscriptionLineItemRequest: DtoUpdateSubscriptionLineItemRequest): string;
//# sourceMappingURL=dto-update-subscription-line-item-request.d.ts.map