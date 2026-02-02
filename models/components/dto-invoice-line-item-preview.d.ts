import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
export type DtoInvoiceLineItemPreview = {
    /**
     * amount for this line item
     */
    amount?: string | undefined;
    /**
     * description of the line item
     */
    description?: string | undefined;
    /**
     * is_proration indicates if this line item is a proration
     */
    isProration?: boolean | undefined;
    /**
     * period_end for this line item (if applicable)
     */
    periodEnd?: string | undefined;
    /**
     * period_start for this line item (if applicable)
     */
    periodStart?: string | undefined;
    /**
     * quantity for this line item
     */
    quantity?: string | undefined;
    /**
     * unit_price for this line item
     */
    unitPrice?: string | undefined;
};
/** @internal */
export declare const DtoInvoiceLineItemPreview$inboundSchema: z.ZodType<DtoInvoiceLineItemPreview, z.ZodTypeDef, unknown>;
export declare function dtoInvoiceLineItemPreviewFromJSON(jsonString: string): SafeParseResult<DtoInvoiceLineItemPreview, SDKValidationError>;
//# sourceMappingURL=dto-invoice-line-item-preview.d.ts.map