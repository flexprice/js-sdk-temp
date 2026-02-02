import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const GetPlansOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type GetPlansOrder = ClosedEnum<typeof GetPlansOrder>;
export declare const GetPlansStatus: {
    readonly Published: "published";
    readonly Deleted: "deleted";
    readonly Archived: "archived";
};
export type GetPlansStatus = ClosedEnum<typeof GetPlansStatus>;
export type GetPlansRequest = {
    endTime?: string | undefined;
    expand?: string | undefined;
    limit?: number | undefined;
    lookupKey?: string | undefined;
    offset?: number | undefined;
    order?: GetPlansOrder | undefined;
    planIds?: Array<string> | undefined;
    startTime?: string | undefined;
    status?: GetPlansStatus | undefined;
};
/** @internal */
export declare const GetPlansOrder$outboundSchema: z.ZodNativeEnum<typeof GetPlansOrder>;
/** @internal */
export declare const GetPlansStatus$outboundSchema: z.ZodNativeEnum<typeof GetPlansStatus>;
/** @internal */
export type GetPlansRequest$Outbound = {
    end_time?: string | undefined;
    expand?: string | undefined;
    limit?: number | undefined;
    lookup_key?: string | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    plan_ids?: Array<string> | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const GetPlansRequest$outboundSchema: z.ZodType<GetPlansRequest$Outbound, z.ZodTypeDef, GetPlansRequest>;
export declare function getPlansRequestToJSON(getPlansRequest: GetPlansRequest): string;
//# sourceMappingURL=get-plans.d.ts.map