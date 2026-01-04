import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoScheduledTaskResponse } from "./dtoscheduledtaskresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListScheduledTasksResponse = {
    items?: Array<DtoScheduledTaskResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListScheduledTasksResponse$inboundSchema: z.ZodType<DtoListScheduledTasksResponse, z.ZodTypeDef, unknown>;
export declare function dtoListScheduledTasksResponseFromJSON(jsonString: string): SafeParseResult<DtoListScheduledTasksResponse, SDKValidationError>;
//# sourceMappingURL=dtolistscheduledtasksresponse.d.ts.map