import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { MeterMeter } from "./meter-meter.js";
export type DtoMatchedMeter = {
    eventName?: string | undefined;
    meter?: MeterMeter | undefined;
    meterId?: string | undefined;
};
/** @internal */
export declare const DtoMatchedMeter$inboundSchema: z.ZodType<DtoMatchedMeter, z.ZodTypeDef, unknown>;
export declare function dtoMatchedMeterFromJSON(jsonString: string): SafeParseResult<DtoMatchedMeter, SDKValidationError>;
//# sourceMappingURL=dto-matched-meter.d.ts.map