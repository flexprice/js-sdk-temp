import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
export type DtoCostPoint = {
    cost?: string | undefined;
    eventCount?: number | undefined;
    quantity?: string | undefined;
    timestamp?: string | undefined;
};
/** @internal */
export declare const DtoCostPoint$inboundSchema: z.ZodType<DtoCostPoint, z.ZodTypeDef, unknown>;
export declare function dtoCostPointFromJSON(jsonString: string): SafeParseResult<DtoCostPoint, SDKValidationError>;
//# sourceMappingURL=dto-cost-point.d.ts.map