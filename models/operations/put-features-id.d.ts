import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutFeaturesIdRequest = {
    /**
     * Feature ID
     */
    id: string;
    /**
     * Feature update data
     */
    body: components.DtoUpdateFeatureRequest;
};
/** @internal */
export type PutFeaturesIdRequest$Outbound = {
    id: string;
    body: components.DtoUpdateFeatureRequest$Outbound;
};
/** @internal */
export declare const PutFeaturesIdRequest$outboundSchema: z.ZodType<PutFeaturesIdRequest$Outbound, z.ZodTypeDef, PutFeaturesIdRequest>;
export declare function putFeaturesIdRequestToJSON(putFeaturesIdRequest: PutFeaturesIdRequest): string;
//# sourceMappingURL=put-features-id.d.ts.map