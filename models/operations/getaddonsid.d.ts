import * as z from "zod/v3";
export type GetAddonsIdRequest = {
    /**
     * Addon ID
     */
    id: string;
};
/** @internal */
export type GetAddonsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetAddonsIdRequest$outboundSchema: z.ZodType<GetAddonsIdRequest$Outbound, z.ZodTypeDef, GetAddonsIdRequest>;
export declare function getAddonsIdRequestToJSON(getAddonsIdRequest: GetAddonsIdRequest): string;
//# sourceMappingURL=getaddonsid.d.ts.map