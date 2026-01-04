import * as z from "zod/v3";
import { DtoAlertConfig, DtoAlertConfig$Outbound } from "./dtoalertconfig.js";
import { TypesAutoTopup, TypesAutoTopup$Outbound } from "./typesautotopup.js";
import { TypesWalletConfig, TypesWalletConfig$Outbound } from "./typeswalletconfig.js";
export type DtoUpdateWalletRequest = {
    alertConfig?: DtoAlertConfig | undefined;
    alertEnabled?: boolean | undefined;
    autoTopup?: TypesAutoTopup | undefined;
    config?: TypesWalletConfig | undefined;
    description?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
};
/** @internal */
export type DtoUpdateWalletRequest$Outbound = {
    alert_config?: DtoAlertConfig$Outbound | undefined;
    alert_enabled?: boolean | undefined;
    auto_topup?: TypesAutoTopup$Outbound | undefined;
    config?: TypesWalletConfig$Outbound | undefined;
    description?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
};
/** @internal */
export declare const DtoUpdateWalletRequest$outboundSchema: z.ZodType<DtoUpdateWalletRequest$Outbound, z.ZodTypeDef, DtoUpdateWalletRequest>;
export declare function dtoUpdateWalletRequestToJSON(dtoUpdateWalletRequest: DtoUpdateWalletRequest): string;
//# sourceMappingURL=dtoupdatewalletrequest.d.ts.map