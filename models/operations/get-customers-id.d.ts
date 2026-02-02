import * as z from "zod/v3";
export type GetCustomersIdRequest = {
    /**
     * Customer ID
     */
    id: string;
};
/** @internal */
export type GetCustomersIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetCustomersIdRequest$outboundSchema: z.ZodType<GetCustomersIdRequest$Outbound, z.ZodTypeDef, GetCustomersIdRequest>;
export declare function getCustomersIdRequestToJSON(getCustomersIdRequest: GetCustomersIdRequest): string;
//# sourceMappingURL=get-customers-id.d.ts.map