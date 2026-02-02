import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoWalletTransactionResponse } from "./dto-wallet-transaction-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListWalletTransactionsResponse = {
    items?: Array<DtoWalletTransactionResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListWalletTransactionsResponse$inboundSchema: z.ZodType<DtoListWalletTransactionsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListWalletTransactionsResponseFromJSON(jsonString: string): SafeParseResult<DtoListWalletTransactionsResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-wallet-transactions-response.d.ts.map