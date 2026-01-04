import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoEvent } from "./dtoevent.js";
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
//# sourceMappingURL=dtogeteventsresponse.d.ts.map