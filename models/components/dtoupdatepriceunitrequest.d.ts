import * as z from "zod/v3";
export type DtoUpdatePriceUnitRequest = {
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
};
/** @internal */
export type DtoUpdatePriceUnitRequest$Outbound = {
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
};
/** @internal */
export declare const DtoUpdatePriceUnitRequest$outboundSchema: z.ZodType<DtoUpdatePriceUnitRequest$Outbound, z.ZodTypeDef, DtoUpdatePriceUnitRequest>;
export declare function dtoUpdatePriceUnitRequestToJSON(dtoUpdatePriceUnitRequest: DtoUpdatePriceUnitRequest): string;
//# sourceMappingURL=dtoupdatepriceunitrequest.d.ts.map