import * as z from "zod/v3";
export type GetCouponsIdRequest = {
    /**
     * Coupon ID
     */
    id: string;
};
/** @internal */
export type GetCouponsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetCouponsIdRequest$outboundSchema: z.ZodType<GetCouponsIdRequest$Outbound, z.ZodTypeDef, GetCouponsIdRequest>;
export declare function getCouponsIdRequestToJSON(getCouponsIdRequest: GetCouponsIdRequest): string;
//# sourceMappingURL=get-coupons-id.d.ts.map