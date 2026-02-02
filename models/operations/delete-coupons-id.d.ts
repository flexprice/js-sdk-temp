import * as z from "zod/v3";
export type DeleteCouponsIdRequest = {
    /**
     * Coupon ID
     */
    id: string;
};
/** @internal */
export type DeleteCouponsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const DeleteCouponsIdRequest$outboundSchema: z.ZodType<DeleteCouponsIdRequest$Outbound, z.ZodTypeDef, DeleteCouponsIdRequest>;
export declare function deleteCouponsIdRequestToJSON(deleteCouponsIdRequest: DeleteCouponsIdRequest): string;
//# sourceMappingURL=delete-coupons-id.d.ts.map