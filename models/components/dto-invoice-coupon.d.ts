import * as z from "zod/v3";
export type DtoInvoiceCoupon = {
    couponAssociationId?: string | undefined;
    couponId: string;
};
/** @internal */
export type DtoInvoiceCoupon$Outbound = {
    coupon_association_id?: string | undefined;
    coupon_id: string;
};
/** @internal */
export declare const DtoInvoiceCoupon$outboundSchema: z.ZodType<DtoInvoiceCoupon$Outbound, z.ZodTypeDef, DtoInvoiceCoupon>;
export declare function dtoInvoiceCouponToJSON(dtoInvoiceCoupon: DtoInvoiceCoupon): string;
//# sourceMappingURL=dto-invoice-coupon.d.ts.map