import * as z from "zod/v3";
export type GetPlansIdCreditgrantsRequest = {
    /**
     * Plan ID
     */
    id: string;
};
/** @internal */
export type GetPlansIdCreditgrantsRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetPlansIdCreditgrantsRequest$outboundSchema: z.ZodType<GetPlansIdCreditgrantsRequest$Outbound, z.ZodTypeDef, GetPlansIdCreditgrantsRequest>;
export declare function getPlansIdCreditgrantsRequestToJSON(getPlansIdCreditgrantsRequest: GetPlansIdCreditgrantsRequest): string;
//# sourceMappingURL=getplansidcreditgrants.d.ts.map