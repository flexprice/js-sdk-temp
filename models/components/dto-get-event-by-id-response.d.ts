import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoDebugTracker } from "./dto-debug-tracker.js";
import { DtoEvent } from "./dto-event.js";
import { DtoFeatureUsageInfo } from "./dto-feature-usage-info.js";
import { TypesEventProcessingStatusType } from "./types-event-processing-status-type.js";
export type DtoGetEventByIDResponse = {
    debugTracker?: DtoDebugTracker | undefined;
    event?: DtoEvent | undefined;
    processedEvents?: Array<DtoFeatureUsageInfo> | undefined;
    status?: TypesEventProcessingStatusType | undefined;
};
/** @internal */
export declare const DtoGetEventByIDResponse$inboundSchema: z.ZodType<DtoGetEventByIDResponse, z.ZodTypeDef, unknown>;
export declare function dtoGetEventByIDResponseFromJSON(jsonString: string): SafeParseResult<DtoGetEventByIDResponse, SDKValidationError>;
//# sourceMappingURL=dto-get-event-by-id-response.d.ts.map