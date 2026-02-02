import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoSubscriptionScheduleResponse } from "./dto-subscription-schedule-response.js";
/**
 * List of pending schedules for a subscription
 */
export type DtoGetPendingSchedulesResponse = {
    /**
     * count is the number of pending schedules
     */
    count?: number | undefined;
    /**
     * schedules is the list of pending schedules
     */
    schedules?: Array<DtoSubscriptionScheduleResponse> | undefined;
};
/** @internal */
export declare const DtoGetPendingSchedulesResponse$inboundSchema: z.ZodType<DtoGetPendingSchedulesResponse, z.ZodTypeDef, unknown>;
export declare function dtoGetPendingSchedulesResponseFromJSON(jsonString: string): SafeParseResult<DtoGetPendingSchedulesResponse, SDKValidationError>;
//# sourceMappingURL=dto-get-pending-schedules-response.d.ts.map