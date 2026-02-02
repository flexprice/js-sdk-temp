import * as z from "zod/v3";
export type GetPricesUnitsCodeCodeRequest = {
    /**
     * Price unit code
     */
    code: string;
};
/** @internal */
export type GetPricesUnitsCodeCodeRequest$Outbound = {
    code: string;
};
/** @internal */
export declare const GetPricesUnitsCodeCodeRequest$outboundSchema: z.ZodType<GetPricesUnitsCodeCodeRequest$Outbound, z.ZodTypeDef, GetPricesUnitsCodeCodeRequest>;
export declare function getPricesUnitsCodeCodeRequestToJSON(getPricesUnitsCodeCodeRequest: GetPricesUnitsCodeCodeRequest): string;
//# sourceMappingURL=get-prices-units-code-code.d.ts.map