import * as z from "zod/v3";
export type GetPricesUnitsIdRequest = {
    /**
     * Price unit ID
     */
    id: string;
};
/** @internal */
export type GetPricesUnitsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetPricesUnitsIdRequest$outboundSchema: z.ZodType<GetPricesUnitsIdRequest$Outbound, z.ZodTypeDef, GetPricesUnitsIdRequest>;
export declare function getPricesUnitsIdRequestToJSON(getPricesUnitsIdRequest: GetPricesUnitsIdRequest): string;
//# sourceMappingURL=get-prices-units-id.d.ts.map