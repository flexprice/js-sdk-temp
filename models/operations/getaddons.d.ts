import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const AddonType: {
    readonly Onetime: "onetime";
};
export type AddonType = ClosedEnum<typeof AddonType>;
export declare const GetAddonsOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type GetAddonsOrder = ClosedEnum<typeof GetAddonsOrder>;
export declare const GetAddonsStatus: {
    readonly Published: "published";
    readonly Deleted: "deleted";
    readonly Archived: "archived";
};
export type GetAddonsStatus = ClosedEnum<typeof GetAddonsStatus>;
export type GetAddonsRequest = {
    addonIds?: Array<string> | undefined;
    addonType?: AddonType | undefined;
    endTime?: string | undefined;
    expand?: string | undefined;
    limit?: number | undefined;
    lookupKeys?: Array<string> | undefined;
    offset?: number | undefined;
    order?: GetAddonsOrder | undefined;
    startTime?: string | undefined;
    status?: GetAddonsStatus | undefined;
};
/** @internal */
export declare const AddonType$outboundSchema: z.ZodNativeEnum<typeof AddonType>;
/** @internal */
export declare const GetAddonsOrder$outboundSchema: z.ZodNativeEnum<typeof GetAddonsOrder>;
/** @internal */
export declare const GetAddonsStatus$outboundSchema: z.ZodNativeEnum<typeof GetAddonsStatus>;
/** @internal */
export type GetAddonsRequest$Outbound = {
    addon_ids?: Array<string> | undefined;
    addon_type?: string | undefined;
    end_time?: string | undefined;
    expand?: string | undefined;
    limit?: number | undefined;
    lookup_keys?: Array<string> | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const GetAddonsRequest$outboundSchema: z.ZodType<GetAddonsRequest$Outbound, z.ZodTypeDef, GetAddonsRequest>;
export declare function getAddonsRequestToJSON(getAddonsRequest: GetAddonsRequest): string;
//# sourceMappingURL=getaddons.d.ts.map