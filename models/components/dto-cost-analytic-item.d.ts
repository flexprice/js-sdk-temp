import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoCostPoint } from "./dto-cost-point.js";
import { MeterMeter } from "./meter-meter.js";
import { PricePrice } from "./price-price.js";
export type DtoCostAnalyticItem = {
    /**
     * Breakdown
     */
    costByPeriod?: Array<DtoCostPoint> | undefined;
    costsheetId?: string | undefined;
    /**
     * Metadata
     */
    currency?: string | undefined;
    customerId?: string | undefined;
    externalCustomerId?: string | undefined;
    meter?: MeterMeter | undefined;
    meterId?: string | undefined;
    meterName?: string | undefined;
    price?: PricePrice | undefined;
    priceId?: string | undefined;
    properties?: {
        [k: string]: string;
    } | undefined;
    source?: string | undefined;
    /**
     * Aggregated metrics
     */
    totalCost?: string | undefined;
    totalEvents?: number | undefined;
    totalQuantity?: string | undefined;
};
/** @internal */
export declare const DtoCostAnalyticItem$inboundSchema: z.ZodType<DtoCostAnalyticItem, z.ZodTypeDef, unknown>;
export declare function dtoCostAnalyticItemFromJSON(jsonString: string): SafeParseResult<DtoCostAnalyticItem, SDKValidationError>;
//# sourceMappingURL=dto-cost-analytic-item.d.ts.map