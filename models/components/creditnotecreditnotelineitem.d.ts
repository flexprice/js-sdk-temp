import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesStatus } from "./typesstatus.js";
export type CreditnoteCreditNoteLineItem = {
    amount?: string | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    creditNoteId?: string | undefined;
    currency?: string | undefined;
    displayName?: string | undefined;
    environmentId?: string | undefined;
    id?: string | undefined;
    invoiceLineItemId?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    status?: TypesStatus | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const CreditnoteCreditNoteLineItem$inboundSchema: z.ZodType<CreditnoteCreditNoteLineItem, z.ZodTypeDef, unknown>;
export declare function creditnoteCreditNoteLineItemFromJSON(jsonString: string): SafeParseResult<CreditnoteCreditNoteLineItem, SDKValidationError>;
//# sourceMappingURL=creditnotecreditnotelineitem.d.ts.map