import * as z from "zod/v3";
export type GetFeaturesIdRequest = {
    /**
     * Feature ID
     */
    id: string;
};
/** @internal */
export type GetFeaturesIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetFeaturesIdRequest$outboundSchema: z.ZodType<GetFeaturesIdRequest$Outbound, z.ZodTypeDef, GetFeaturesIdRequest>;
export declare function getFeaturesIdRequestToJSON(getFeaturesIdRequest: GetFeaturesIdRequest): string;
//# sourceMappingURL=get-features-id.d.ts.map