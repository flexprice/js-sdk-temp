import * as z from "zod/v3";
import { TypesCommitmentInfo, TypesCommitmentInfo$Outbound } from "./types-commitment-info.js";
export type DtoCreateInvoiceLineItemRequest = {
    /**
     * amount is the monetary amount for this line item
     */
    amount: string;
    commitmentInfo?: TypesCommitmentInfo | undefined;
    /**
     * display_name is the optional human-readable name for this line item
     */
    displayName?: string | undefined;
    /**
     * entity_id is the optional unique identifier of the entity associated with this line item
     */
    entityId?: string | undefined;
    /**
     * entity_type is the optional type of the entity associated with this line item
     */
    entityType?: string | undefined;
    /**
     * invoice_level_discount is the discount amount in invoice currency applied to all line items on the invoice.
     */
    invoiceLevelDiscount?: string | undefined;
    /**
     * line_item_discount is the discount amount in invoice currency applied directly to this line item.
     */
    lineItemDiscount?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    /**
     * meter_display_name is the optional human-readable name of the meter
     */
    meterDisplayName?: string | undefined;
    /**
     * meter_id is the optional unique identifier of the meter used for usage tracking
     */
    meterId?: string | undefined;
    /**
     * period_end is the optional end date of the period this line item covers
     */
    periodEnd?: string | undefined;
    /**
     * period_start is the optional start date of the period this line item covers
     */
    periodStart?: string | undefined;
    /**
     * plan_display_name is the optional human-readable name of the plan
     */
    planDisplayName?: string | undefined;
    /**
     * TODO: !REMOVE after migration
     *
     * @remarks
     * plan_id is the optional unique identifier of the plan associated with this line item
     */
    planId?: string | undefined;
    /**
     * prepaid_credits_applied is the amount in invoice currency reduced from this line item due to prepaid credits application.
     */
    prepaidCreditsApplied?: string | undefined;
    /**
     * price_id is the optional unique identifier of the price associated with this line item
     */
    priceId?: string | undefined;
    /**
     * price_type indicates the type of pricing (fixed, usage, tiered, etc.)
     */
    priceType?: string | undefined;
    /**
     * price_unit is the optional 3-digit ISO code of the price unit associated with this line item
     */
    priceUnit?: string | undefined;
    /**
     * price_unit_amount is the optional amount converted to the price unit currency
     */
    priceUnitAmount?: string | undefined;
    /**
     * quantity is the quantity of units for this line item
     */
    quantity: string;
};
/** @internal */
export type DtoCreateInvoiceLineItemRequest$Outbound = {
    amount: string;
    commitment_info?: TypesCommitmentInfo$Outbound | undefined;
    display_name?: string | undefined;
    entity_id?: string | undefined;
    entity_type?: string | undefined;
    invoice_level_discount?: string | undefined;
    line_item_discount?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    meter_display_name?: string | undefined;
    meter_id?: string | undefined;
    period_end?: string | undefined;
    period_start?: string | undefined;
    plan_display_name?: string | undefined;
    plan_id?: string | undefined;
    prepaid_credits_applied?: string | undefined;
    price_id?: string | undefined;
    price_type?: string | undefined;
    price_unit?: string | undefined;
    price_unit_amount?: string | undefined;
    quantity: string;
};
/** @internal */
export declare const DtoCreateInvoiceLineItemRequest$outboundSchema: z.ZodType<DtoCreateInvoiceLineItemRequest$Outbound, z.ZodTypeDef, DtoCreateInvoiceLineItemRequest>;
export declare function dtoCreateInvoiceLineItemRequestToJSON(dtoCreateInvoiceLineItemRequest: DtoCreateInvoiceLineItemRequest): string;
//# sourceMappingURL=dto-create-invoice-line-item-request.d.ts.map