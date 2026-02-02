import * as z from "zod/v3";
export type DeleteFeaturesIdRequest = {
    /**
     * Feature ID
     */
    id: string;
};
/** @internal */
export type DeleteFeaturesIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const DeleteFeaturesIdRequest$outboundSchema: z.ZodType<DeleteFeaturesIdRequest$Outbound, z.ZodTypeDef, DeleteFeaturesIdRequest>;
export declare function deleteFeaturesIdRequestToJSON(deleteFeaturesIdRequest: DeleteFeaturesIdRequest): string;
//# sourceMappingURL=delete-features-id.d.ts.map