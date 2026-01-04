import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesAlertConfig } from "./typesalertconfig.js";
import { TypesAutoTopup } from "./typesautotopup.js";
import { TypesStatus } from "./typesstatus.js";
import { TypesWalletConfig } from "./typeswalletconfig.js";
import { TypesWalletStatus } from "./typeswalletstatus.js";
import { TypesWalletType } from "./typeswallettype.js";
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
    unpaidInvoicesAmount?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
    walletStatus?: TypesWalletStatus | undefined;
    walletType?: TypesWalletType | undefined;
};
/** @internal */
export declare const DtoWalletBalanceResponse$inboundSchema: z.ZodType<DtoWalletBalanceResponse, z.ZodTypeDef, unknown>;
export declare function dtoWalletBalanceResponseFromJSON(jsonString: string): SafeParseResult<DtoWalletBalanceResponse, SDKValidationError>;
//# sourceMappingURL=dtowalletbalanceresponse.d.ts.map