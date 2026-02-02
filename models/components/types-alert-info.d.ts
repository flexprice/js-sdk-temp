import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { TypesAlertSettings } from "./types-alert-settings.js";
export type TypesAlertInfo = {
    alertSettings?: TypesAlertSettings | undefined;
    timestamp?: string | undefined;
    valueAtTime?: number | undefined;
};
/** @internal */
export declare const TypesAlertInfo$inboundSchema: z.ZodType<TypesAlertInfo, z.ZodTypeDef, unknown>;
export declare function typesAlertInfoFromJSON(jsonString: string): SafeParseResult<TypesAlertInfo, SDKValidationError>;
//# sourceMappingURL=types-alert-info.d.ts.map