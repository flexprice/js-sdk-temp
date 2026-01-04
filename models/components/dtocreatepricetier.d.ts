import * as z from "zod/v3";
export type DtoCreatePriceTier = {
    /**
     * flat_amount is the flat amount for the given tier (optional)
     *
     * @remarks
     * Applied on top of unit_amount*quantity. Useful for cases like "2.7$ + 5c"
     */
    flatAmount?: string | undefined;
    /**
     * unit_amount is the amount per unit for the given tier
     */
    unitAmount: string;
    /**
     * up_to is the quantity up to which this tier applies. It is null for the last tier.
     *
     * @remarks
     * IMPORTANT: Tier boundaries are INCLUSIVE.
     * - If up_to is 1000, then quantity less than or equal to 1000 belongs to this tier
     * - This behavior is consistent across both VOLUME and SLAB tier modes
     */
    upTo?: number | undefined;
};
/** @internal */
export type DtoCreatePriceTier$Outbound = {
    flat_amount?: string | undefined;
    unit_amount: string;
    up_to?: number | undefined;
};
/** @internal */
export declare const DtoCreatePriceTier$outboundSchema: z.ZodType<DtoCreatePriceTier$Outbound, z.ZodTypeDef, DtoCreatePriceTier>;
export declare function dtoCreatePriceTierToJSON(dtoCreatePriceTier: DtoCreatePriceTier): string;
//# sourceMappingURL=dtocreatepricetier.d.ts.map