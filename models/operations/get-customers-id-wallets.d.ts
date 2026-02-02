import * as z from "zod/v3";
export type GetCustomersIdWalletsRequest = {
    /**
     * Customer ID
     */
    id: string;
};
/** @internal */
export type GetCustomersIdWalletsRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetCustomersIdWalletsRequest$outboundSchema: z.ZodType<GetCustomersIdWalletsRequest$Outbound, z.ZodTypeDef, GetCustomersIdWalletsRequest>;
export declare function getCustomersIdWalletsRequestToJSON(getCustomersIdWalletsRequest: GetCustomersIdWalletsRequest): string;
//# sourceMappingURL=get-customers-id-wallets.d.ts.map