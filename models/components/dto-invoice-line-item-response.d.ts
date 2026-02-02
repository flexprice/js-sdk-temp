import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoSourceUsageItem } from "./dto-source-usage-item.js";
import { DtoUsageBreakdownItem } from "./dto-usage-breakdown-item.js";
import { TypesCommitmentInfo } from "./types-commitment-info.js";
export type DtoInvoiceLineItemResponse = {
    /**
     * amount is the monetary amount for this line item
     */
    amount?: string | undefined;
    commitmentInfo?: TypesCommitmentInfo | undefined;
    /**
     * created_at is the timestamp when this line item was created
     */
    createdAt?: string | undefined;
    /**
     * created_by is the identifier of the user who created this line item
     */
    createdBy?: string | undefined;
    /**
     * currency is the three-letter ISO currency code for this line item
     */
    currency?: string | undefined;
    /**
     * customer_id is the unique identifier of the customer associated with this line item
     */
    customerId?: string | undefined;
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
     * id is the unique identifier for this line item
     */
    id?: string | undefined;
    /**
     * invoice_id is the unique identifier of the invoice this line item belongs to
     */
    invoiceId?: string | undefined;
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
     * plan_id is the optional unique identifier of the plan associated with this line item
     */
    planId?: string | undefined;
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
     * price_unit_id is the optional unique identifier of the price unit associated with this line item
     */
    priceUnitId?: string | undefined;
    /**
     * quantity is the quantity of units for this line item
     */
    quantity?: string | undefined;
    /**
     * status represents the current status of this line item
     */
    status?: string | undefined;
    /**
     * subscription_id is the optional unique identifier of the subscription associated with this line item
     */
    subscriptionId?: string | undefined;
    /**
     * tenant_id is the unique identifier of the tenant this line item belongs to
     */
    tenantId?: string | undefined;
    /**
     * updated_at is the timestamp when this line item was last updated
     */
    updatedAt?: string | undefined;
    /**
     * updated_by is the identifier of the user who last updated this line item
     */
    updatedBy?: string | undefined;
    /**
     * usage_analytics contains usage analytics for this line item (legacy - grouped by source)
     */
    usageAnalytics?: Array<DtoSourceUsageItem> | undefined;
    /**
     * usage_breakdown contains flexible usage breakdown for this line item (supports any grouping)
     */
    usageBreakdown?: Array<DtoUsageBreakdownItem> | undefined;
};
/** @internal */
export declare const DtoInvoiceLineItemResponse$inboundSchema: z.ZodType<DtoInvoiceLineItemResponse, z.ZodTypeDef, unknown>;
export declare function dtoInvoiceLineItemResponseFromJSON(jsonString: string): SafeParseResult<DtoInvoiceLineItemResponse, SDKValidationError>;
//# sourceMappingURL=dto-invoice-line-item-response.d.ts.map