import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoEvent } from "./dto-event.js";
export type DtoGetEventsResponse = {
    events?: Array<DtoEvent> | undefined;
    hasMore?: boolean | undefined;
    iterFirstKey?: string | undefined;
    iterLastKey?: string | undefined;
    offset?: number | undefined;
    totalCount?: number | undefined;
};
/** @internal */
export declare const DtoGetEventsResponse$inboundSchema: z.ZodType<DtoGetEventsResponse, z.ZodTypeDef, unknown>;
export declare function dtoGetEventsResponseFromJSON(jsonString: string): SafeParseResult<DtoGetEventsResponse, SDKValidationError>;
//# sourceMappingURL=dto-get-events-response.d.ts.map