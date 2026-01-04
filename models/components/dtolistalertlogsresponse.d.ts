import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoAlertLogResponse } from "./dtoalertlogresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListAlertLogsResponse = {
    items?: Array<DtoAlertLogResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListAlertLogsResponse$inboundSchema: z.ZodType<DtoListAlertLogsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListAlertLogsResponseFromJSON(jsonString: string): SafeParseResult<DtoListAlertLogsResponse, SDKValidationError>;
//# sourceMappingURL=dtolistalertlogsresponse.d.ts.map