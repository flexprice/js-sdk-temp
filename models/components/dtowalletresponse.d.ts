import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesAlertConfig } from "./typesalertconfig.js";
import { TypesAutoTopup } from "./typesautotopup.js";
import { TypesWalletConfig } from "./typeswalletconfig.js";
import { TypesWalletStatus } from "./typeswalletstatus.js";
import { TypesWalletType } from "./typeswallettype.js";
export type DtoWalletResponse = {
    alertConfig?: TypesAlertConfig | undefined;
    alertEnabled?: boolean | undefined;
    alertState?: string | undefined;
    autoTopup?: TypesAutoTopup | undefined;
    balance?: string | undefined;
    config?: TypesWalletConfig | undefined;
    conversionRate?: string | undefined;
    createdAt?: string | undefined;
    creditBalance?: string | undefined;
    currency?: string | undefined;
    customerId?: string | undefined;
    description?: string | undefined;
    id?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
    updatedAt?: string | undefined;
    walletStatus?: TypesWalletStatus | undefined;
    walletType?: TypesWalletType | undefined;
};
/** @internal */
export declare const DtoWalletResponse$inboundSchema: z.ZodType<DtoWalletResponse, z.ZodTypeDef, unknown>;
export declare function dtoWalletResponseFromJSON(jsonString: string): SafeParseResult<DtoWalletResponse, SDKValidationError>;
//# sourceMappingURL=dtowalletresponse.d.ts.map