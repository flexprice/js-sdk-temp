import * as z from "zod/v3";
import { DtoCreateCreditNoteLineItemRequest, DtoCreateCreditNoteLineItemRequest$Outbound } from "./dtocreatecreditnotelineitemrequest.js";
import { TypesCreditNoteReason } from "./typescreditnotereason.js";
export type DtoCreateCreditNoteRequest = {
    /**
     * credit_note_number is an optional human-readable identifier for the credit note
     */
    creditNoteNumber?: string | undefined;
    /**
     * idempotency_key is an optional key used to prevent duplicate credit note creation
     */
    idempotencyKey?: string | undefined;
    /**
     * invoice_id is the unique identifier of the invoice this credit note is applied to
     */
    invoiceId: string;
    /**
     * line_items contains the individual line items that make up this credit note (minimum 1 required)
     */
    lineItems?: Array<DtoCreateCreditNoteLineItemRequest> | undefined;
    /**
     * memo is an optional free-text field for additional notes about the credit note
     */
    memo?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    /**
     * process_credit_note is a flag to process the credit note after creation
     */
    processCreditNote?: boolean | undefined;
    reason: TypesCreditNoteReason;
};
/** @internal */
export type DtoCreateCreditNoteRequest$Outbound = {
    credit_note_number?: string | undefined;
    idempotency_key?: string | undefined;
    invoice_id: string;
    line_items?: Array<DtoCreateCreditNoteLineItemRequest$Outbound> | undefined;
    memo?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    process_credit_note: boolean;
    reason: string;
};
/** @internal */
export declare const DtoCreateCreditNoteRequest$outboundSchema: z.ZodType<DtoCreateCreditNoteRequest$Outbound, z.ZodTypeDef, DtoCreateCreditNoteRequest>;
export declare function dtoCreateCreditNoteRequestToJSON(dtoCreateCreditNoteRequest: DtoCreateCreditNoteRequest): string;
//# sourceMappingURL=dtocreatecreditnoterequest.d.ts.map