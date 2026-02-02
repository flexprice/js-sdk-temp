import * as z from "zod/v3";
export type DtoCreateCreditNoteLineItemRequest = {
    /**
     * amount is the monetary amount to be credited for this line item
     */
    amount: string;
    /**
     * display_name is an optional human-readable name for this credit note line item
     */
    displayName?: string | undefined;
    /**
     * invoice_line_item_id is the unique identifier of the invoice line item being credited
     */
    invoiceLineItemId: string;
    metadata?: {
        [k: string]: string;
    } | undefined;
};
/** @internal */
export type DtoCreateCreditNoteLineItemRequest$Outbound = {
    amount: string;
    display_name?: string | undefined;
    invoice_line_item_id: string;
    metadata?: {
        [k: string]: string;
    } | undefined;
};
/** @internal */
export declare const DtoCreateCreditNoteLineItemRequest$outboundSchema: z.ZodType<DtoCreateCreditNoteLineItemRequest$Outbound, z.ZodTypeDef, DtoCreateCreditNoteLineItemRequest>;
export declare function dtoCreateCreditNoteLineItemRequestToJSON(dtoCreateCreditNoteLineItemRequest: DtoCreateCreditNoteLineItemRequest): string;
//# sourceMappingURL=dto-create-credit-note-line-item-request.d.ts.map