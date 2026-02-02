import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const GetWalletsOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type GetWalletsOrder = ClosedEnum<typeof GetWalletsOrder>;
export declare const GetWalletsStatus: {
    readonly Active: "active";
    readonly Frozen: "frozen";
    readonly Closed: "closed";
};
export type GetWalletsStatus = ClosedEnum<typeof GetWalletsStatus>;
export type GetWalletsRequest = {
    alertEnabled?: boolean | undefined;
    expand?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: GetWalletsOrder | undefined;
    sort?: string | undefined;
    status?: GetWalletsStatus | undefined;
    walletIds?: Array<string> | undefined;
};
/** @internal */
export declare const GetWalletsOrder$outboundSchema: z.ZodNativeEnum<typeof GetWalletsOrder>;
/** @internal */
export declare const GetWalletsStatus$outboundSchema: z.ZodNativeEnum<typeof GetWalletsStatus>;
/** @internal */
export type GetWalletsRequest$Outbound = {
    alert_enabled?: boolean | undefined;
    expand?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    sort?: string | undefined;
    status?: string | undefined;
    wallet_ids?: Array<string> | undefined;
};
/** @internal */
export declare const GetWalletsRequest$outboundSchema: z.ZodType<GetWalletsRequest$Outbound, z.ZodTypeDef, GetWalletsRequest>;
export declare function getWalletsRequestToJSON(getWalletsRequest: GetWalletsRequest): string;
//# sourceMappingURL=get-wallets.d.ts.map