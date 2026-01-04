import * as z from "zod/v3";
export type GetPricesIdRequest = {
    /**
     * Price ID
     */
    id: string;
};
/** @internal */
export type GetPricesIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetPricesIdRequest$outboundSchema: z.ZodType<GetPricesIdRequest$Outbound, z.ZodTypeDef, GetPricesIdRequest>;
export declare function getPricesIdRequestToJSON(getPricesIdRequest: GetPricesIdRequest): string;
//# sourceMappingURL=getpricesid.d.ts.map