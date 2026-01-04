import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { MeterAggregation } from "./meteraggregation.js";
import { MeterFilter } from "./meterfilter.js";
import { TypesResetUsage } from "./typesresetusage.js";
export type DtoMeterResponse = {
    aggregation?: MeterAggregation | undefined;
    createdAt?: string | undefined;
    eventName?: string | undefined;
    filters?: Array<MeterFilter> | undefined;
    id?: string | undefined;
    name?: string | undefined;
    resetUsage?: TypesResetUsage | undefined;
    status?: string | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
};
/** @internal */
export declare const DtoMeterResponse$inboundSchema: z.ZodType<DtoMeterResponse, z.ZodTypeDef, unknown>;
export declare function dtoMeterResponseFromJSON(jsonString: string): SafeParseResult<DtoMeterResponse, SDKValidationError>;
//# sourceMappingURL=dtometerresponse.d.ts.map