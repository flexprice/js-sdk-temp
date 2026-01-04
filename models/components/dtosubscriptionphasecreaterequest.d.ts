import * as z from "zod/v3";
import { DtoOverrideLineItemRequest, DtoOverrideLineItemRequest$Outbound } from "./dtooverridelineitemrequest.js";
export type DtoSubscriptionPhaseCreateRequest = {
    /**
     * Coupons represents subscription-level coupons to be applied to this phase
     */
    coupons?: Array<string> | undefined;
    endDate?: string | undefined;
    /**
     * LineItemCoupons represents line item-level coupons (map of line_item_id to coupon IDs)
     */
    lineItemCoupons?: {
        [k: string]: Array<string>;
    } | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    /**
     * OverrideLineItems allows customizing specific prices for this phase
     *
     * @remarks
     * If not provided, phase will use the same line items as the subscription (plan prices)
     */
    overrideLineItems?: Array<DtoOverrideLineItemRequest> | undefined;
    startDate: string;
};
/** @internal */
export type DtoSubscriptionPhaseCreateRequest$Outbound = {
    coupons?: Array<string> | undefined;
    end_date?: string | undefined;
    line_item_coupons?: {
        [k: string]: Array<string>;
    } | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    override_line_items?: Array<DtoOverrideLineItemRequest$Outbound> | undefined;
    start_date: string;
};
/** @internal */
export declare const DtoSubscriptionPhaseCreateRequest$outboundSchema: z.ZodType<DtoSubscriptionPhaseCreateRequest$Outbound, z.ZodTypeDef, DtoSubscriptionPhaseCreateRequest>;
export declare function dtoSubscriptionPhaseCreateRequestToJSON(dtoSubscriptionPhaseCreateRequest: DtoSubscriptionPhaseCreateRequest): string;
//# sourceMappingURL=dtosubscriptionphasecreaterequest.d.ts.map