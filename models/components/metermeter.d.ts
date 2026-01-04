import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { MeterAggregation } from "./meteraggregation.js";
import { MeterFilter } from "./meterfilter.js";
import { TypesResetUsage } from "./typesresetusage.js";
import { TypesStatus } from "./typesstatus.js";
export type MeterMeter = {
    aggregation?: MeterAggregation | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    /**
     * EnvironmentID is the environment identifier for the meter
     */
    environmentId?: string | undefined;
    /**
     * EventName is the unique identifier for the event that this meter is tracking
     *
     * @remarks
     * It is a mandatory field in the events table and hence being used as the primary matching field
     * We can have multiple meters tracking the same event but with different filters and aggregation
     */
    eventName?: string | undefined;
    /**
     * Filters define the criteria for the meter to be applied on the events before aggregation
     *
     * @remarks
     * It also defines the possible values on which later the charges will be applied
     */
    filters?: Array<MeterFilter> | undefined;
    /**
     * ID is the unique identifier for the meter
     */
    id?: string | undefined;
    /**
     * Name is the display name of the meter
     */
    name?: string | undefined;
    resetUsage?: TypesResetUsage | undefined;
    status?: TypesStatus | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const MeterMeter$inboundSchema: z.ZodType<MeterMeter, z.ZodTypeDef, unknown>;
export declare function meterMeterFromJSON(jsonString: string): SafeParseResult<MeterMeter, SDKValidationError>;
//# sourceMappingURL=metermeter.d.ts.map