import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DtoEventCountPoint = {
    eventCount?: number | undefined;
    timestamp?: string | undefined;
};
/** @internal */
export declare const DtoEventCountPoint$inboundSchema: z.ZodType<DtoEventCountPoint, z.ZodTypeDef, unknown>;
export declare function dtoEventCountPointFromJSON(jsonString: string): SafeParseResult<DtoEventCountPoint, SDKValidationError>;
//# sourceMappingURL=dtoeventcountpoint.d.ts.map