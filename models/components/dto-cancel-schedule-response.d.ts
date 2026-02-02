import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { TypesScheduleStatus } from "./types-schedule-status.js";
/**
 * Confirmation of schedule cancellation
 */
export type DtoCancelScheduleResponse = {
    /**
     * message is a confirmation message
     */
    message?: string | undefined;
    status?: TypesScheduleStatus | undefined;
};
/** @internal */
export declare const DtoCancelScheduleResponse$inboundSchema: z.ZodType<DtoCancelScheduleResponse, z.ZodTypeDef, unknown>;
export declare function dtoCancelScheduleResponseFromJSON(jsonString: string): SafeParseResult<DtoCancelScheduleResponse, SDKValidationError>;
//# sourceMappingURL=dto-cancel-schedule-response.d.ts.map