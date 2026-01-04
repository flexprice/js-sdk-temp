import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { TypesWalletStatus } from "./typeswalletstatus.js";
export declare const TypesWalletFilterOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type TypesWalletFilterOrder = ClosedEnum<typeof TypesWalletFilterOrder>;
export type TypesWalletFilter = {
    alertEnabled?: boolean | undefined;
    expand?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: TypesWalletFilterOrder | undefined;
    sort?: string | undefined;
    status?: TypesWalletStatus | undefined;
    walletIds?: Array<string> | undefined;
};
/** @internal */
export declare const TypesWalletFilterOrder$outboundSchema: z.ZodNativeEnum<typeof TypesWalletFilterOrder>;
/** @internal */
export type TypesWalletFilter$Outbound = {
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
export declare const TypesWalletFilter$outboundSchema: z.ZodType<TypesWalletFilter$Outbound, z.ZodTypeDef, TypesWalletFilter>;
export declare function typesWalletFilterToJSON(typesWalletFilter: TypesWalletFilter): string;
//# sourceMappingURL=typeswalletfilter.d.ts.map