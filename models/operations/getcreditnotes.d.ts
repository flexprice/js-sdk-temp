import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const CreditNoteStatus: {
    readonly Draft: "DRAFT";
    readonly Finalized: "FINALIZED";
    readonly Voided: "VOIDED";
};
export type CreditNoteStatus = ClosedEnum<typeof CreditNoteStatus>;
export declare const CreditNoteType: {
    readonly Adjustment: "ADJUSTMENT";
    readonly Refund: "REFUND";
};
export type CreditNoteType = ClosedEnum<typeof CreditNoteType>;
export declare const GetCreditnotesOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type GetCreditnotesOrder = ClosedEnum<typeof GetCreditnotesOrder>;
export declare const GetCreditnotesStatus: {
    readonly Published: "published";
    readonly Deleted: "deleted";
    readonly Archived: "archived";
};
export type GetCreditnotesStatus = ClosedEnum<typeof GetCreditnotesStatus>;
export type GetCreditnotesRequest = {
    creditNoteIds?: Array<string> | undefined;
    creditNoteStatus?: Array<CreditNoteStatus> | undefined;
    creditNoteType?: CreditNoteType | undefined;
    endTime?: string | undefined;
    expand?: string | undefined;
    invoiceId?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: GetCreditnotesOrder | undefined;
    sort?: string | undefined;
    startTime?: string | undefined;
    status?: GetCreditnotesStatus | undefined;
};
/** @internal */
export declare const CreditNoteStatus$outboundSchema: z.ZodNativeEnum<typeof CreditNoteStatus>;
/** @internal */
export declare const CreditNoteType$outboundSchema: z.ZodNativeEnum<typeof CreditNoteType>;
/** @internal */
export declare const GetCreditnotesOrder$outboundSchema: z.ZodNativeEnum<typeof GetCreditnotesOrder>;
/** @internal */
export declare const GetCreditnotesStatus$outboundSchema: z.ZodNativeEnum<typeof GetCreditnotesStatus>;
/** @internal */
export type GetCreditnotesRequest$Outbound = {
    credit_note_ids?: Array<string> | undefined;
    credit_note_status?: Array<string> | undefined;
    credit_note_type?: string | undefined;
    end_time?: string | undefined;
    expand?: string | undefined;
    invoice_id?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    sort?: string | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
};
/** @internal */
export declare const GetCreditnotesRequest$outboundSchema: z.ZodType<GetCreditnotesRequest$Outbound, z.ZodTypeDef, GetCreditnotesRequest>;
export declare function getCreditnotesRequestToJSON(getCreditnotesRequest: GetCreditnotesRequest): string;
//# sourceMappingURL=getcreditnotes.d.ts.map