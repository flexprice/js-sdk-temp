import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
export type DtoTriggerForceRunResponse = {
    endTime?: string | undefined;
    message?: string | undefined;
    /**
     * "custom" or "automatic"
     */
    mode?: string | undefined;
    startTime?: string | undefined;
    workflowId?: string | undefined;
};
/** @internal */
export declare const DtoTriggerForceRunResponse$inboundSchema: z.ZodType<DtoTriggerForceRunResponse, z.ZodTypeDef, unknown>;
export declare function dtoTriggerForceRunResponseFromJSON(jsonString: string): SafeParseResult<DtoTriggerForceRunResponse, SDKValidationError>;
//# sourceMappingURL=dto-trigger-force-run-response.d.ts.map