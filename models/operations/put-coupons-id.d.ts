import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutCouponsIdRequest = {
    /**
     * Coupon ID
     */
    id: string;
    /**
     * Coupon update request
     */
    body: components.DtoUpdateCouponRequest;
};
/** @internal */
export type PutCouponsIdRequest$Outbound = {
    id: string;
    body: components.DtoUpdateCouponRequest$Outbound;
};
/** @internal */
export declare const PutCouponsIdRequest$outboundSchema: z.ZodType<PutCouponsIdRequest$Outbound, z.ZodTypeDef, PutCouponsIdRequest>;
export declare function putCouponsIdRequestToJSON(putCouponsIdRequest: PutCouponsIdRequest): string;
//# sourceMappingURL=put-coupons-id.d.ts.map