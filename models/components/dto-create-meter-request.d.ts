import * as z from "zod/v3";
import { MeterAggregation, MeterAggregation$Outbound } from "./meter-aggregation.js";
import { MeterFilter, MeterFilter$Outbound } from "./meter-filter.js";
import { TypesResetUsage } from "./types-reset-usage.js";
export type DtoCreateMeterRequest = {
    aggregation: MeterAggregation;
    eventName: string;
    filters?: Array<MeterFilter> | undefined;
    name: string;
    resetUsage: TypesResetUsage;
};
/** @internal */
export type DtoCreateMeterRequest$Outbound = {
    aggregation: MeterAggregation$Outbound;
    event_name: string;
    filters?: Array<MeterFilter$Outbound> | undefined;
    name: string;
    reset_usage: string;
};
/** @internal */
export declare const DtoCreateMeterRequest$outboundSchema: z.ZodType<DtoCreateMeterRequest$Outbound, z.ZodTypeDef, DtoCreateMeterRequest>;
export declare function dtoCreateMeterRequestToJSON(dtoCreateMeterRequest: DtoCreateMeterRequest): string;
//# sourceMappingURL=dto-create-meter-request.d.ts.map