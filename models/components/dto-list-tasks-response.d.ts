import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoTaskResponse } from "./dto-task-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListTasksResponse = {
    items?: Array<DtoTaskResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListTasksResponse$inboundSchema: z.ZodType<DtoListTasksResponse, z.ZodTypeDef, unknown>;
export declare function dtoListTasksResponseFromJSON(jsonString: string): SafeParseResult<DtoListTasksResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-tasks-response.d.ts.map