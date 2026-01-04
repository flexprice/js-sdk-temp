import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoWalletResponse } from "./dtowalletresponse.js";
import { DtoWalletTransactionResponse } from "./dtowallettransactionresponse.js";
export type DtoTopUpWalletResponse = {
    /**
     * Invoice ID if an invoice was created (only for PURCHASED_CREDIT_INVOICED)
     */
    invoiceId?: string | undefined;
    wallet?: DtoWalletResponse | undefined;
    walletTransaction?: DtoWalletTransactionResponse | undefined;
};
/** @internal */
export declare const DtoTopUpWalletResponse$inboundSchema: z.ZodType<DtoTopUpWalletResponse, z.ZodTypeDef, unknown>;
export declare function dtoTopUpWalletResponseFromJSON(jsonString: string): SafeParseResult<DtoTopUpWalletResponse, SDKValidationError>;
//# sourceMappingURL=dtotopupwalletresponse.d.ts.map