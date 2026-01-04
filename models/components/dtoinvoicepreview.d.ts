import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoInvoiceLineItemPreview } from "./dtoinvoicelineitempreview.js";
export type DtoInvoicePreview = {
    /**
     * currency is the currency for all amounts
     */
    currency?: string | undefined;
    /**
     * due_date is when the invoice would be due
     */
    dueDate?: string | undefined;
    /**
     * line_items contains preview of line items
     */
    lineItems?: Array<DtoInvoiceLineItemPreview> | undefined;
    /**
     * subtotal is the subtotal amount before taxes
     */
    subtotal?: string | undefined;
    /**
     * tax_amount is the total tax amount
     */
    taxAmount?: string | undefined;
    /**
     * total is the total amount including taxes
     */
    total?: string | undefined;
};
/** @internal */
export declare const DtoInvoicePreview$inboundSchema: z.ZodType<DtoInvoicePreview, z.ZodTypeDef, unknown>;
export declare function dtoInvoicePreviewFromJSON(jsonString: string): SafeParseResult<DtoInvoicePreview, SDKValidationError>;
//# sourceMappingURL=dtoinvoicepreview.d.ts.map