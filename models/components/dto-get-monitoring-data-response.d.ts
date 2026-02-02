import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoEventCountPoint } from "./dto-event-count-point.js";
export type DtoGetMonitoringDataResponse = {
    consumptionLag?: number | undefined;
    points?: Array<DtoEventCountPoint> | undefined;
    postProcessingLag?: number | undefined;
    totalCount?: number | undefined;
};
/** @internal */
export declare const DtoGetMonitoringDataResponse$inboundSchema: z.ZodType<DtoGetMonitoringDataResponse, z.ZodTypeDef, unknown>;
export declare function dtoGetMonitoringDataResponseFromJSON(jsonString: string): SafeParseResult<DtoGetMonitoringDataResponse, SDKValidationError>;
//# sourceMappingURL=dto-get-monitoring-data-response.d.ts.map