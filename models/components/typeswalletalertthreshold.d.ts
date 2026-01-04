import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesAlertThresholdType } from "./typesalertthresholdtype.js";
export type TypesWalletAlertThreshold = {
    type?: TypesAlertThresholdType | undefined;
    value?: number | undefined;
};
/** @internal */
export declare const TypesWalletAlertThreshold$inboundSchema: z.ZodType<TypesWalletAlertThreshold, z.ZodTypeDef, unknown>;
export declare function typesWalletAlertThresholdFromJSON(jsonString: string): SafeParseResult<TypesWalletAlertThreshold, SDKValidationError>;
//# sourceMappingURL=typeswalletalertthreshold.d.ts.map