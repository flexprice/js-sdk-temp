import * as z from "zod/v3";
export type DtoInvoiceLineItemCoupon = {
    couponAssociationId?: string | undefined;
    couponId: string;
    /**
     * price_id used to match the line item
     */
    lineItemId: string;
};
/** @internal */
export type DtoInvoiceLineItemCoupon$Outbound = {
    coupon_association_id?: string | undefined;
    coupon_id: string;
    line_item_id: string;
};
/** @internal */
export declare const DtoInvoiceLineItemCoupon$outboundSchema: z.ZodType<DtoInvoiceLineItemCoupon$Outbound, z.ZodTypeDef, DtoInvoiceLineItemCoupon>;
export declare function dtoInvoiceLineItemCouponToJSON(dtoInvoiceLineItemCoupon: DtoInvoiceLineItemCoupon): string;
//# sourceMappingURL=dtoinvoicelineitemcoupon.d.ts.map