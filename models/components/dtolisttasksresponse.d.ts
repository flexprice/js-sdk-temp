import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoTaskResponse } from "./dtotaskresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListTasksResponse = {
    items?: Array<DtoTaskResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListTasksResponse$inboundSchema: z.ZodType<DtoListTasksResponse, z.ZodTypeDef, unknown>;
export declare function dtoListTasksResponseFromJSON(jsonString: string): SafeParseResult<DtoListTasksResponse, SDKValidationError>;
//# sourceMappingURL=dtolisttasksresponse.d.ts.map