import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesAlertSettings } from "./typesalertsettings.js";
export type TypesAlertInfo = {
    alertSettings?: TypesAlertSettings | undefined;
    timestamp?: string | undefined;
    valueAtTime?: number | undefined;
};
/** @internal */
export declare const TypesAlertInfo$inboundSchema: z.ZodType<TypesAlertInfo, z.ZodTypeDef, unknown>;
export declare function typesAlertInfoFromJSON(jsonString: string): SafeParseResult<TypesAlertInfo, SDKValidationError>;
//# sourceMappingURL=typesalertinfo.d.ts.map