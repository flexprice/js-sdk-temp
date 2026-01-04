import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoWalletTransactionResponse } from "./dtowallettransactionresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListWalletTransactionsResponse = {
    items?: Array<DtoWalletTransactionResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListWalletTransactionsResponse$inboundSchema: z.ZodType<DtoListWalletTransactionsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListWalletTransactionsResponseFromJSON(jsonString: string): SafeParseResult<DtoListWalletTransactionsResponse, SDKValidationError>;
//# sourceMappingURL=dtolistwallettransactionsresponse.d.ts.map