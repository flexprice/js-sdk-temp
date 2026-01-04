import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const GetCouponsOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type GetCouponsOrder = ClosedEnum<typeof GetCouponsOrder>;
export declare const GetCouponsStatus: {
    readonly Published: "published";
    readonly Deleted: "deleted";
    readonly Archived: "archived";
};
export type GetCouponsStatus = ClosedEnum<typeof GetCouponsStatus>;
export type GetCouponsRequest = {
    couponIds?: Array<string> | undefined;
    expand?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: GetCouponsOrder | undefined;
    status?: GetCouponsStatus | undefined;
};
/** @internal */
export declare const GetCouponsOrder$outboundSchema: z.ZodNativeEnum<typeof GetCouponsOrder>;
/** @internal */
export declare const GetCouponsStatus$outboundSchema: z.ZodNativeEnum<typeof GetCouponsStatus>;
/** @internal */
export type GetCouponsRequest$Outbound = {
    coupon_ids?: Array<string> | undefined;
    expand?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const GetCouponsRequest$outboundSchema: z.ZodType<GetCouponsRequest$Outbound, z.ZodTypeDef, GetCouponsRequest>;
export declare function getCouponsRequestToJSON(getCouponsRequest: GetCouponsRequest): string;
//# sourceMappingURL=getcoupons.d.ts.map