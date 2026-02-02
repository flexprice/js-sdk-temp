import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const GetFeaturesOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type GetFeaturesOrder = ClosedEnum<typeof GetFeaturesOrder>;
export declare const GetFeaturesStatus: {
    readonly Published: "published";
    readonly Deleted: "deleted";
    readonly Archived: "archived";
};
export type GetFeaturesStatus = ClosedEnum<typeof GetFeaturesStatus>;
export type GetFeaturesRequest = {
    endTime?: string | undefined;
    expand?: string | undefined;
    /**
     * Feature specific filters
     */
    featureIds?: Array<string> | undefined;
    limit?: number | undefined;
    lookupKey?: string | undefined;
    lookupKeys?: Array<string> | undefined;
    meterIds?: Array<string> | undefined;
    nameContains?: string | undefined;
    offset?: number | undefined;
    order?: GetFeaturesOrder | undefined;
    startTime?: string | undefined;
    status?: GetFeaturesStatus | undefined;
};
/** @internal */
export declare const GetFeaturesOrder$outboundSchema: z.ZodNativeEnum<typeof GetFeaturesOrder>;
/** @internal */
export declare const GetFeaturesStatus$outboundSchema: z.ZodNativeEnum<typeof GetFeaturesStatus>;
/** @internal */
export type GetFeaturesRequest$Outbound = {
    end_time?: string | undefined;
    expand?: string | undefined;
    feature_ids?: Array<string> | undefined;
    limit?: number | undefined;
    lookup_key?: string | undefined;
    lookup_keys?: Array<string> | undefined;
    meter_ids?: Array<string> | undefined;
    name_contains?: string | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const GetFeaturesRequest$outboundSchema: z.ZodType<GetFeaturesRequest$Outbound, z.ZodTypeDef, GetFeaturesRequest>;
export declare function getFeaturesRequestToJSON(getFeaturesRequest: GetFeaturesRequest): string;
//# sourceMappingURL=get-features.d.ts.map