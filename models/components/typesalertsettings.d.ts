import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesAlertThreshold, TypesAlertThreshold$Outbound } from "./typesalertthreshold.js";
export type TypesAlertSettings = {
    alertEnabled?: boolean | undefined;
    critical?: TypesAlertThreshold | undefined;
    info?: TypesAlertThreshold | undefined;
    warning?: TypesAlertThreshold | undefined;
};
/** @internal */
export declare const TypesAlertSettings$inboundSchema: z.ZodType<TypesAlertSettings, z.ZodTypeDef, unknown>;
/** @internal */
export type TypesAlertSettings$Outbound = {
    alert_enabled?: boolean | undefined;
    critical?: TypesAlertThreshold$Outbound | undefined;
    info?: TypesAlertThreshold$Outbound | undefined;
    warning?: TypesAlertThreshold$Outbound | undefined;
};
/** @internal */
export declare const TypesAlertSettings$outboundSchema: z.ZodType<TypesAlertSettings$Outbound, z.ZodTypeDef, TypesAlertSettings>;
export declare function typesAlertSettingsToJSON(typesAlertSettings: TypesAlertSettings): string;
export declare function typesAlertSettingsFromJSON(jsonString: string): SafeParseResult<TypesAlertSettings, SDKValidationError>;
//# sourceMappingURL=typesalertsettings.d.ts.map