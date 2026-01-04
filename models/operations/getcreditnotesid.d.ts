import * as z from "zod/v3";
export type GetCreditnotesIdRequest = {
    /**
     * Credit note ID
     */
    id: string;
};
/** @internal */
export type GetCreditnotesIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetCreditnotesIdRequest$outboundSchema: z.ZodType<GetCreditnotesIdRequest$Outbound, z.ZodTypeDef, GetCreditnotesIdRequest>;
export declare function getCreditnotesIdRequestToJSON(getCreditnotesIdRequest: GetCreditnotesIdRequest): string;
//# sourceMappingURL=getcreditnotesid.d.ts.map