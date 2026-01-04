import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesWalletAlertThreshold } from "./typeswalletalertthreshold.js";
export type TypesAlertConfig = {
    threshold?: TypesWalletAlertThreshold | undefined;
};
/** @internal */
export declare const TypesAlertConfig$inboundSchema: z.ZodType<TypesAlertConfig, z.ZodTypeDef, unknown>;
export declare function typesAlertConfigFromJSON(jsonString: string): SafeParseResult<TypesAlertConfig, SDKValidationError>;
//# sourceMappingURL=typesalertconfig.d.ts.map