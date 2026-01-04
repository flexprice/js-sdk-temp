import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Coupons extends ClientSDK {
    /**
     * List coupons with filtering
     *
     * @remarks
     * Lists coupons with filtering
     */
    getCoupons(request: operations.GetCouponsRequest, options?: RequestOptions): Promise<components.DtoListCouponsResponse>;
    /**
     * Create a new coupon
     *
     * @remarks
     * Creates a new coupon
     */
    postCoupons(request: components.DtoCreateCouponRequest, options?: RequestOptions): Promise<components.DtoCouponResponse>;
    /**
     * Get a coupon by ID
     *
     * @remarks
     * Retrieves a coupon by ID
     */
    getCouponsId(id: string, options?: RequestOptions): Promise<components.DtoCouponResponse>;
    /**
     * Update a coupon
     *
     * @remarks
     * Updates an existing coupon
     */
    putCouponsId(id: string, body: components.DtoUpdateCouponRequest, options?: RequestOptions): Promise<components.DtoCouponResponse>;
    /**
     * Delete a coupon
     *
     * @remarks
     * Deletes a coupon
     */
    deleteCouponsId(id: string, options?: RequestOptions): Promise<{
        [k: string]: string;
    }>;
}
//# sourceMappingURL=coupons.d.ts.map