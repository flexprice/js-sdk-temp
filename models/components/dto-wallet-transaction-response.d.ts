import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoCustomerResponse } from "./dto-customer-response.js";
import { DtoUserResponse } from "./dto-user-response.js";
import { DtoWalletResponse } from "./dto-wallet-response.js";
import { TypesStatus } from "./types-status.js";
import { TypesTransactionReason } from "./types-transaction-reason.js";
import { TypesTransactionStatus } from "./types-transaction-status.js";
import { TypesTransactionType } from "./types-transaction-type.js";
import { TypesWalletTxReferenceType } from "./types-wallet-tx-reference-type.js";
export type DtoWalletTransactionResponse = {
    amount?: string | undefined;
    /**
     * conversion_rate is the conversion rate for the transaction to the currency
     */
    conversionRate?: string | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    createdByUser?: DtoUserResponse | undefined;
    creditAmount?: string | undefined;
    creditBalanceAfter?: string | undefined;
    creditBalanceBefore?: string | undefined;
    creditsAvailable?: string | undefined;
    currency?: string | undefined;
    /**
     * Customer response object containing all customer information
     */
    customer?: DtoCustomerResponse | undefined;
    customerId?: string | undefined;
    description?: string | undefined;
    environmentId?: string | undefined;
    expiryDate?: string | undefined;
    id?: string | undefined;
    idempotencyKey?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    priority?: number | undefined;
    referenceId?: string | undefined;
    referenceType?: TypesWalletTxReferenceType | undefined;
    status?: TypesStatus | undefined;
    tenantId?: string | undefined;
    /**
     * topup_conversion_rate is the conversion rate for the topup to the currency
     */
    topupConversionRate?: string | undefined;
    transactionReason?: TypesTransactionReason | undefined;
    transactionStatus?: TypesTransactionStatus | undefined;
    type?: TypesTransactionType | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
    wallet?: DtoWalletResponse | undefined;
    walletId?: string | undefined;
};
/** @internal */
export declare const DtoWalletTransactionResponse$inboundSchema: z.ZodType<DtoWalletTransactionResponse, z.ZodTypeDef, unknown>;
export declare function dtoWalletTransactionResponseFromJSON(jsonString: string): SafeParseResult<DtoWalletTransactionResponse, SDKValidationError>;
//# sourceMappingURL=dto-wallet-transaction-response.d.ts.map