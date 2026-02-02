import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { TypesAlertConfig } from "./types-alert-config.js";
import { TypesAutoTopup } from "./types-auto-topup.js";
import { TypesCreditBreakdown } from "./types-credit-breakdown.js";
import { TypesStatus } from "./types-status.js";
import { TypesWalletConfig } from "./types-wallet-config.js";
import { TypesWalletStatus } from "./types-wallet-status.js";
import { TypesWalletType } from "./types-wallet-type.js";
export type DtoWalletBalanceResponse = {
    alertConfig?: TypesAlertConfig | undefined;
    alertEnabled?: boolean | undefined;
    alertState?: string | undefined;
    autoTopup?: TypesAutoTopup | undefined;
    balance?: string | undefined;
    balanceUpdatedAt?: string | undefined;
    config?: TypesWalletConfig | undefined;
    /**
     * amount in the currency =  number of credits * conversion_rate
     *
     * @remarks
     * ex if conversion_rate is 1, then 1 USD = 1 credit
     * ex if conversion_rate is 2, then 1 USD = 0.5 credits
     * ex if conversion_rate is 0.5, then 1 USD = 2 credits
     */
    conversionRate?: string | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    creditBalance?: string | undefined;
    creditsAvailableBreakdown?: TypesCreditBreakdown | undefined;
    currency?: string | undefined;
    currentPeriodUsage?: string | undefined;
    customerId?: string | undefined;
    description?: string | undefined;
    environmentId?: string | undefined;
    id?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
    realTimeBalance?: string | undefined;
    realTimeCreditBalance?: string | undefined;
    status?: TypesStatus | undefined;
    tenantId?: string | undefined;
    /**
     * topup_conversion_rate is the conversion rate for the topup to the currency
     *
     * @remarks
     * ex if topup_conversion_rate is 1, then 1 USD = 1 credit
     * ex if topup_conversion_rate is 2, then 1 USD = 0.5 credits
     * ex if topup_conversion_rate is 0.5, then 1 USD = 2 credits
     */
    topupConversionRate?: string | undefined;
    unpaidInvoicesAmount?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
    walletStatus?: TypesWalletStatus | undefined;
    walletType?: TypesWalletType | undefined;
};
/** @internal */
export declare const DtoWalletBalanceResponse$inboundSchema: z.ZodType<DtoWalletBalanceResponse, z.ZodTypeDef, unknown>;
export declare function dtoWalletBalanceResponseFromJSON(jsonString: string): SafeParseResult<DtoWalletBalanceResponse, SDKValidationError>;
//# sourceMappingURL=dto-wallet-balance-response.d.ts.map