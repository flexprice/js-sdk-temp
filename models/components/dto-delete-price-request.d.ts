import * as z from "zod/v3";
export type DtoDeletePriceRequest = {
    endDate?: string | undefined;
};
/** @internal */
export type DtoDeletePriceRequest$Outbound = {
    end_date?: string | undefined;
};
/** @internal */
export declare const DtoDeletePriceRequest$outboundSchema: z.ZodType<DtoDeletePriceRequest$Outbound, z.ZodTypeDef, DtoDeletePriceRequest>;
export declare function dtoDeletePriceRequestToJSON(dtoDeletePriceRequest: DtoDeletePriceRequest): string;
//# sourceMappingURL=dto-delete-price-request.d.ts.map