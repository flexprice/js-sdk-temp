import * as z from "zod/v3";
export type GetEnvironmentsIdRequest = {
    /**
     * Environment ID
     */
    id: string;
};
/** @internal */
export type GetEnvironmentsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetEnvironmentsIdRequest$outboundSchema: z.ZodType<GetEnvironmentsIdRequest$Outbound, z.ZodTypeDef, GetEnvironmentsIdRequest>;
export declare function getEnvironmentsIdRequestToJSON(getEnvironmentsIdRequest: GetEnvironmentsIdRequest): string;
//# sourceMappingURL=getenvironmentsid.d.ts.map