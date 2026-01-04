import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoEventCountPoint } from "./dtoeventcountpoint.js";
export type DtoGetMonitoringDataResponse = {
    consumptionLag?: number | undefined;
    points?: Array<DtoEventCountPoint> | undefined;
    postProcessingLag?: number | undefined;
    totalCount?: number | undefined;
};
/** @internal */
export declare const DtoGetMonitoringDataResponse$inboundSchema: z.ZodType<DtoGetMonitoringDataResponse, z.ZodTypeDef, unknown>;
export declare function dtoGetMonitoringDataResponseFromJSON(jsonString: string): SafeParseResult<DtoGetMonitoringDataResponse, SDKValidationError>;
//# sourceMappingURL=dtogetmonitoringdataresponse.d.ts.map