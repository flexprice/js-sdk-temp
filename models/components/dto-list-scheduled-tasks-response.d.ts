import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoScheduledTaskResponse } from "./dto-scheduled-task-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListScheduledTasksResponse = {
    items?: Array<DtoScheduledTaskResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListScheduledTasksResponse$inboundSchema: z.ZodType<DtoListScheduledTasksResponse, z.ZodTypeDef, unknown>;
export declare function dtoListScheduledTasksResponseFromJSON(jsonString: string): SafeParseResult<DtoListScheduledTasksResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-scheduled-tasks-response.d.ts.map