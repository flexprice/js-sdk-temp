import * as z from "zod/v3";
export type DtoThreshold = {
    /**
     * amount
     */
    type?: string | undefined;
    value?: string | undefined;
};
/** @internal */
export type DtoThreshold$Outbound = {
    type?: string | undefined;
    value?: string | undefined;
};
/** @internal */
export declare const DtoThreshold$outboundSchema: z.ZodType<DtoThreshold$Outbound, z.ZodTypeDef, DtoThreshold>;
export declare function dtoThresholdToJSON(dtoThreshold: DtoThreshold): string;
//# sourceMappingURL=dto-threshold.d.ts.map