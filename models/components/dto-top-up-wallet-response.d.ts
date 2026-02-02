import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoWalletResponse } from "./dto-wallet-response.js";
import { DtoWalletTransactionResponse } from "./dto-wallet-transaction-response.js";
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
//# sourceMappingURL=dto-top-up-wallet-response.d.ts.map