import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CreditnoteCreditNoteLineItem } from "./creditnotecreditnotelineitem.js";
import { DtoInvoiceResponse } from "./dtoinvoiceresponse.js";
import { DtoSubscriptionResponse } from "./dtosubscriptionresponse.js";
import { GithubComFlexpriceFlexpriceInternalDomainCustomerCustomer } from "./githubcomflexpriceflexpriceinternaldomaincustomercustomer.js";
import { TypesCreditNoteReason } from "./typescreditnotereason.js";
import { TypesCreditNoteStatus } from "./typescreditnotestatus.js";
import { TypesCreditNoteType } from "./typescreditnotetype.js";
import { TypesPaymentStatus } from "./typespaymentstatus.js";
import { TypesStatus } from "./typesstatus.js";
export type DtoCreditNoteResponse = {
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    /**
     * credit_note_number is the unique identifier for credit notes
     */
    creditNoteNumber?: string | undefined;
    creditNoteStatus?: TypesCreditNoteStatus | undefined;
    creditNoteType?: TypesCreditNoteType | undefined;
    /**
     * currency is the three-letter ISO currency code (e.g., USD, EUR) for the credit note
     */
    currency?: string | undefined;
    customer?: GithubComFlexpriceFlexpriceInternalDomainCustomerCustomer | undefined;
    /**
     * customer_id is the unique identifier of the customer who owns this credit note
     */
    customerId?: string | undefined;
    /**
     * environment_id is the unique identifier of the environment this credit note belongs to
     */
    environmentId?: string | undefined;
    /**
     * finalized_at is the timestamp when the credit note was finalized
     */
    finalizedAt?: string | undefined;
    /**
     * id is the unique identifier for the credit note
     */
    id?: string | undefined;
    /**
     * idempotency_key is an optional key used to prevent duplicate credit note creation
     */
    idempotencyKey?: string | undefined;
    invoice?: DtoInvoiceResponse | undefined;
    /**
     * invoice_id is the id of the invoice resource that this credit note is applied to
     */
    invoiceId?: string | undefined;
    /**
     * line_items contains all of the line items associated with this credit note
     */
    lineItems?: Array<CreditnoteCreditNoteLineItem> | undefined;
    /**
     * memo is an optional memo supplied on the credit note
     */
    memo?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    reason?: TypesCreditNoteReason | undefined;
    refundStatus?: TypesPaymentStatus | undefined;
    status?: TypesStatus | undefined;
    subscription?: DtoSubscriptionResponse | undefined;
    /**
     * subscription_id is the optional unique identifier of the subscription related to this credit note
     */
    subscriptionId?: string | undefined;
    tenantId?: string | undefined;
    /**
     * total_amount is the total including creditable invoice-level discounts or minimums, and tax
     */
    totalAmount?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
    /**
     * voided_at is the timestamp when the credit note was voided
     */
    voidedAt?: string | undefined;
};
/** @internal */
export declare const DtoCreditNoteResponse$inboundSchema: z.ZodType<DtoCreditNoteResponse, z.ZodTypeDef, unknown>;
export declare function dtoCreditNoteResponseFromJSON(jsonString: string): SafeParseResult<DtoCreditNoteResponse, SDKValidationError>;
//# sourceMappingURL=dtocreditnoteresponse.d.ts.map