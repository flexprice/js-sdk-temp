import * as z from "zod/v3";
import { DtoCreatePriceTier, DtoCreatePriceTier$Outbound } from "./dto-create-price-tier.js";
export type DtoPriceUnitConfig = {
    amount?: string | undefined;
    priceUnit: string;
    priceUnitTiers?: Array<DtoCreatePriceTier> | undefined;
};
/** @internal */
export type DtoPriceUnitConfig$Outbound = {
    amount?: string | undefined;
    price_unit: string;
    price_unit_tiers?: Array<DtoCreatePriceTier$Outbound> | undefined;
};
/** @internal */
export declare const DtoPriceUnitConfig$outboundSchema: z.ZodType<DtoPriceUnitConfig$Outbound, z.ZodTypeDef, DtoPriceUnitConfig>;
export declare function dtoPriceUnitConfigToJSON(dtoPriceUnitConfig: DtoPriceUnitConfig): string;
//# sourceMappingURL=dto-price-unit-config.d.ts.map