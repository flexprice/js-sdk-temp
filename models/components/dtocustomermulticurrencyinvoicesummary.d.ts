import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoCustomerInvoiceSummary } from "./dtocustomerinvoicesummary.js";
export type DtoCustomerMultiCurrencyInvoiceSummary = {
    /**
     * customer_id is the unique identifier of the customer
     */
    customerId?: string | undefined;
    /**
     * default_currency is the primary currency for this customer
     */
    defaultCurrency?: string | undefined;
    /**
     * summaries contains the invoice summaries for each currency
     */
    summaries?: Array<DtoCustomerInvoiceSummary> | undefined;
};
/** @internal */
export declare const DtoCustomerMultiCurrencyInvoiceSummary$inboundSchema: z.ZodType<DtoCustomerMultiCurrencyInvoiceSummary, z.ZodTypeDef, unknown>;
export declare function dtoCustomerMultiCurrencyInvoiceSummaryFromJSON(jsonString: string): SafeParseResult<DtoCustomerMultiCurrencyInvoiceSummary, SDKValidationError>;
//# sourceMappingURL=dtocustomermulticurrencyinvoicesummary.d.ts.map