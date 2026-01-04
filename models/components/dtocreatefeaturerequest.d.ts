import * as z from "zod/v3";
import { DtoCreateMeterRequest, DtoCreateMeterRequest$Outbound } from "./dtocreatemeterrequest.js";
import { TypesAlertSettings, TypesAlertSettings$Outbound } from "./typesalertsettings.js";
import { TypesFeatureType } from "./typesfeaturetype.js";
export type DtoCreateFeatureRequest = {
    alertSettings?: TypesAlertSettings | undefined;
    description?: string | undefined;
    lookupKey?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    meter?: DtoCreateMeterRequest | undefined;
    meterId?: string | undefined;
    name: string;
    type: TypesFeatureType;
    unitPlural?: string | undefined;
    unitSingular?: string | undefined;
};
/** @internal */
export type DtoCreateFeatureRequest$Outbound = {
    alert_settings?: TypesAlertSettings$Outbound | undefined;
    description?: string | undefined;
    lookup_key?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    meter?: DtoCreateMeterRequest$Outbound | undefined;
    meter_id?: string | undefined;
    name: string;
    type: string;
    unit_plural?: string | undefined;
    unit_singular?: string | undefined;
};
/** @internal */
export declare const DtoCreateFeatureRequest$outboundSchema: z.ZodType<DtoCreateFeatureRequest$Outbound, z.ZodTypeDef, DtoCreateFeatureRequest>;
export declare function dtoCreateFeatureRequestToJSON(dtoCreateFeatureRequest: DtoCreateFeatureRequest): string;
//# sourceMappingURL=dtocreatefeaturerequest.d.ts.map