import * as z from "zod/v3";
import { MeterFilter, MeterFilter$Outbound } from "./meter-filter.js";
import { TypesAlertSettings, TypesAlertSettings$Outbound } from "./types-alert-settings.js";
export type DtoUpdateFeatureRequest = {
    alertSettings?: TypesAlertSettings | undefined;
    description?: string | undefined;
    filters?: Array<MeterFilter> | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
    unitPlural?: string | undefined;
    unitSingular?: string | undefined;
};
/** @internal */
export type DtoUpdateFeatureRequest$Outbound = {
    alert_settings?: TypesAlertSettings$Outbound | undefined;
    description?: string | undefined;
    filters?: Array<MeterFilter$Outbound> | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
    unit_plural?: string | undefined;
    unit_singular?: string | undefined;
};
/** @internal */
export declare const DtoUpdateFeatureRequest$outboundSchema: z.ZodType<DtoUpdateFeatureRequest$Outbound, z.ZodTypeDef, DtoUpdateFeatureRequest>;
export declare function dtoUpdateFeatureRequestToJSON(dtoUpdateFeatureRequest: DtoUpdateFeatureRequest): string;
//# sourceMappingURL=dto-update-feature-request.d.ts.map