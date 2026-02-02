import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
export type ModelsTemporalWorkflowResult = {
    message?: string | undefined;
    runId?: string | undefined;
    workflowId?: string | undefined;
};
/** @internal */
export declare const ModelsTemporalWorkflowResult$inboundSchema: z.ZodType<ModelsTemporalWorkflowResult, z.ZodTypeDef, unknown>;
export declare function modelsTemporalWorkflowResultFromJSON(jsonString: string): SafeParseResult<ModelsTemporalWorkflowResult, SDKValidationError>;
//# sourceMappingURL=models-temporal-workflow-result.d.ts.map