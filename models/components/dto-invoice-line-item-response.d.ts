import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoSourceUsageItem } from "./dto-source-usage-item.js";
import { DtoUsageBreakdownItem } from "./dto-usage-breakdown-item.js";
import { TypesCommitmentInfo } from "./types-commitment-info.js";
import { TypesStatus } from "./types-status.js";
export type DtoInvoiceLineItemResponse = {
    amount?: number | undefined;
    commitmentInfo?: TypesCommitmentInfo | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    currency?: string | undefined;
    customerId?: string | undefined;
    displayName?: string | undefined;
    entityId?: string | undefined;
    entityType?: string | undefined;
    environmentId?: string | undefined;
    id?: string | undefined;
    invoiceId?: string | undefined;
    /**
     * invoice_level_discount is the discount amount in invoice currency applied to all line items on the invoice.
     */
    invoiceLevelDiscount?: number | undefined;
    /**
     * line_item_discount is the discount amount in invoice currency applied directly to this line item.
     */
    lineItemDiscount?: number | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    meterDisplayName?: string | undefined;
    meterId?: string | undefined;
    periodEnd?: string | undefined;
    periodStart?: string | undefined;
    planDisplayName?: string | undefined;
    /**
     * prepaid_credits_applied is the amount in invoice currency reduced from this line item due to prepaid credits application.
     */
    prepaidCreditsApplied?: number | undefined;
    priceId?: string | undefined;
    priceType?: string | undefined;
    priceUnit?: string | undefined;
    priceUnitAmount?: number | undefined;
    priceUnitId?: string | undefined;
    quantity?: number | undefined;
    status?: TypesStatus | undefined;
    subscriptionId?: string | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
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