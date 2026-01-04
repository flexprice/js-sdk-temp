import * as z from "zod/v3";
export type GetCreditgrantsIdRequest = {
    /**
     * Credit Grant ID
     */
    id: string;
};
/** @internal */
export type GetCreditgrantsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetCreditgrantsIdRequest$outboundSchema: z.ZodType<GetCreditgrantsIdRequest$Outbound, z.ZodTypeDef, GetCreditgrantsIdRequest>;
export declare function getCreditgrantsIdRequestToJSON(getCreditgrantsIdRequest: GetCreditgrantsIdRequest): string;
//# sourceMappingURL=getcreditgrantsid.d.ts.map