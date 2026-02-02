import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
export type DtoEventCostInfo = {
    costNanoUsd?: string | undefined;
    requestId?: string | undefined;
};
/** @internal */
export declare const DtoEventCostInfo$inboundSchema: z.ZodType<DtoEventCostInfo, z.ZodTypeDef, unknown>;
export declare function dtoEventCostInfoFromJSON(jsonString: string): SafeParseResult<DtoEventCostInfo, SDKValidationError>;
//# sourceMappingURL=dto-event-cost-info.d.ts.map