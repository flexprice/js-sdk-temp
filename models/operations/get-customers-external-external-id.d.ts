import * as z from "zod/v3";
export type GetCustomersExternalExternalIdRequest = {
    /**
     * Customer External ID
     */
    externalId: string;
};
/** @internal */
export type GetCustomersExternalExternalIdRequest$Outbound = {
    external_id: string;
};
/** @internal */
export declare const GetCustomersExternalExternalIdRequest$outboundSchema: z.ZodType<GetCustomersExternalExternalIdRequest$Outbound, z.ZodTypeDef, GetCustomersExternalExternalIdRequest>;
export declare function getCustomersExternalExternalIdRequestToJSON(getCustomersExternalExternalIdRequest: GetCustomersExternalExternalIdRequest): string;
//# sourceMappingURL=get-customers-external-external-id.d.ts.map