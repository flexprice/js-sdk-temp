import * as z from "zod/v3";
import { TypesTransactionReason } from "./types-transaction-reason.js";
export type DtoTopUpWalletRequest = {
    /**
     * amount is the amount in the currency of the wallet to be added
     *
     * @remarks
     * NOTE: this is not the number of credits to add, but the amount in the currency
     * amount = credits_to_add * conversion_rate
     * if both amount and credits_to_add are provided, amount will be ignored
     * ex if the wallet has a conversion_rate of 2 then adding an amount of
     * 10 USD in the wallet wil add 5 credits in the wallet
     */
    amount?: string | undefined;
    /**
     * credits_to_add is the number of credits to add to the wallet
     */
    creditsToAdd?: string | undefined;
    /**
     * description to add any specific details about the transaction
     */
    description?: string | undefined;
    /**
     * expiry_date_utc is the expiry date in UTC timezone
     *
     * @remarks
     * ex 2025-01-01 00:00:00 UTC
     */
    expiryDateUtc?: string | undefined;
    /**
     * idempotency_key is a unique key for the transaction
     */
    idempotencyKey?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    /**
     * priority is the priority of the transaction
     *
     * @remarks
     * lower number means higher priority
     * default is nil which means no priority at all
     */
    priority?: number | undefined;
    transactionReason: TypesTransactionReason;
};
/** @internal */
export type DtoTopUpWalletRequest$Outbound = {
    amount?: string | undefined;
    credits_to_add?: string | undefined;
    description?: string | undefined;
    expiry_date_utc?: string | undefined;
    idempotency_key?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    priority?: number | undefined;
    transaction_reason: string;
};
/** @internal */
export declare const DtoTopUpWalletRequest$outboundSchema: z.ZodType<DtoTopUpWalletRequest$Outbound, z.ZodTypeDef, DtoTopUpWalletRequest>;
export declare function dtoTopUpWalletRequestToJSON(dtoTopUpWalletRequest: DtoTopUpWalletRequest): string;
//# sourceMappingURL=dto-top-up-wallet-request.d.ts.map