import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesAlertCondition } from "./typesalertcondition.js";
export type TypesAlertThreshold = {
    condition?: TypesAlertCondition | undefined;
    threshold?: number | undefined;
};
/** @internal */
export declare const TypesAlertThreshold$inboundSchema: z.ZodType<TypesAlertThreshold, z.ZodTypeDef, unknown>;
/** @internal */
export type TypesAlertThreshold$Outbound = {
    condition?: string | undefined;
    threshold?: number | undefined;
};
/** @internal */
export declare const TypesAlertThreshold$outboundSchema: z.ZodType<TypesAlertThreshold$Outbound, z.ZodTypeDef, TypesAlertThreshold>;
export declare function typesAlertThresholdToJSON(typesAlertThreshold: TypesAlertThreshold): string;
export declare function typesAlertThresholdFromJSON(jsonString: string): SafeParseResult<TypesAlertThreshold, SDKValidationError>;
//# sourceMappingURL=typesalertthreshold.d.ts.map