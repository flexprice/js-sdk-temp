import * as z from "zod/v3";
export type DtoTaxRateOverride = {
    autoApply?: boolean | undefined;
    currency: string;
    metadata?: {
        [k: string]: string;
    } | undefined;
    priority?: number | undefined;
    taxRateCode: string;
};
/** @internal */
export type DtoTaxRateOverride$Outbound = {
    auto_apply: boolean;
    currency: string;
    metadata?: {
        [k: string]: string;
    } | undefined;
    priority?: number | undefined;
    tax_rate_code: string;
};
/** @internal */
export declare const DtoTaxRateOverride$outboundSchema: z.ZodType<DtoTaxRateOverride$Outbound, z.ZodTypeDef, DtoTaxRateOverride>;
export declare function dtoTaxRateOverrideToJSON(dtoTaxRateOverride: DtoTaxRateOverride): string;
//# sourceMappingURL=dtotaxrateoverride.d.ts.map