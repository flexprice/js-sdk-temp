import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoUsageResult } from "./dtousageresult.js";
import { TypesAggregationType } from "./typesaggregationtype.js";
export type DtoGetUsageResponse = {
    eventName?: string | undefined;
    results?: Array<DtoUsageResult> | undefined;
    type?: TypesAggregationType | undefined;
    value?: number | undefined;
};
/** @internal */
export declare const DtoGetUsageResponse$inboundSchema: z.ZodType<DtoGetUsageResponse, z.ZodTypeDef, unknown>;
export declare function dtoGetUsageResponseFromJSON(jsonString: string): SafeParseResult<DtoGetUsageResponse, SDKValidationError>;
//# sourceMappingURL=dtogetusageresponse.d.ts.map