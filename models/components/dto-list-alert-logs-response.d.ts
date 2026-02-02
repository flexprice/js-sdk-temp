import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoAlertLogResponse } from "./dto-alert-log-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListAlertLogsResponse = {
    items?: Array<DtoAlertLogResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListAlertLogsResponse$inboundSchema: z.ZodType<DtoListAlertLogsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListAlertLogsResponseFromJSON(jsonString: string): SafeParseResult<DtoListAlertLogsResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-alert-logs-response.d.ts.map