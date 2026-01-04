import * as z from "zod/v3";
export type GetCustomersWalletsRequest = {
    id?: string | undefined;
    includeRealTimeBalance?: boolean | undefined;
    lookupKey?: string | undefined;
};
/** @internal */
export type GetCustomersWalletsRequest$Outbound = {
    id?: string | undefined;
    include_real_time_balance: boolean;
    lookup_key?: string | undefined;
};
/** @internal */
export declare const GetCustomersWalletsRequest$outboundSchema: z.ZodType<GetCustomersWalletsRequest$Outbound, z.ZodTypeDef, GetCustomersWalletsRequest>;
export declare function getCustomersWalletsRequestToJSON(getCustomersWalletsRequest: GetCustomersWalletsRequest): string;
//# sourceMappingURL=getcustomerswallets.d.ts.map