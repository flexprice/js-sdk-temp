import * as z from "zod/v3";
export type GetPlansIdRequest = {
    /**
     * Plan ID
     */
    id: string;
};
/** @internal */
export type GetPlansIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetPlansIdRequest$outboundSchema: z.ZodType<GetPlansIdRequest$Outbound, z.ZodTypeDef, GetPlansIdRequest>;
export declare function getPlansIdRequestToJSON(getPlansIdRequest: GetPlansIdRequest): string;
//# sourceMappingURL=get-plans-id.d.ts.map