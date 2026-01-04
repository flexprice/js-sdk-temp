import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const GetEntitlementsEntityType: {
    readonly Plan: "PLAN";
    readonly Subscription: "SUBSCRIPTION";
    readonly Addon: "ADDON";
};
export type GetEntitlementsEntityType = ClosedEnum<typeof GetEntitlementsEntityType>;
export declare const FeatureType: {
    readonly Metered: "metered";
    readonly Boolean: "boolean";
    readonly Static: "static";
};
export type FeatureType = ClosedEnum<typeof FeatureType>;
export declare const GetEntitlementsOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type GetEntitlementsOrder = ClosedEnum<typeof GetEntitlementsOrder>;
export declare const GetEntitlementsStatus: {
    readonly Published: "published";
    readonly Deleted: "deleted";
    readonly Archived: "archived";
};
export type GetEntitlementsStatus = ClosedEnum<typeof GetEntitlementsStatus>;
export type GetEntitlementsRequest = {
    endTime?: string | undefined;
    entityIds?: Array<string> | undefined;
    entityType?: GetEntitlementsEntityType | undefined;
    expand?: string | undefined;
    featureIds?: Array<string> | undefined;
    featureType?: FeatureType | undefined;
    isEnabled?: boolean | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: GetEntitlementsOrder | undefined;
    planIds?: Array<string> | undefined;
    startTime?: string | undefined;
    status?: GetEntitlementsStatus | undefined;
};
/** @internal */
export declare const GetEntitlementsEntityType$outboundSchema: z.ZodNativeEnum<typeof GetEntitlementsEntityType>;
/** @internal */
export declare const FeatureType$outboundSchema: z.ZodNativeEnum<typeof FeatureType>;
/** @internal */
export declare const GetEntitlementsOrder$outboundSchema: z.ZodNativeEnum<typeof GetEntitlementsOrder>;
/** @internal */
export declare const GetEntitlementsStatus$outboundSchema: z.ZodNativeEnum<typeof GetEntitlementsStatus>;
/** @internal */
export type GetEntitlementsRequest$Outbound = {
    end_time?: string | undefined;
    entity_ids?: Array<string> | undefined;
    entity_type?: string | undefined;
    expand?: string | undefined;
    feature_ids?: Array<string> | undefined;
    feature_type?: string | undefined;
    is_enabled?: boolean | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    plan_ids?: Array<string> | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const GetEntitlementsRequest$outboundSchema: z.ZodType<GetEntitlementsRequest$Outbound, z.ZodTypeDef, GetEntitlementsRequest>;
export declare function getEntitlementsRequestToJSON(getEntitlementsRequest: GetEntitlementsRequest): string;
//# sourceMappingURL=getentitlements.d.ts.map