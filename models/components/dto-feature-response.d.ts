import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoMeterResponse } from "./dto-meter-response.js";
import { TypesAlertSettings } from "./types-alert-settings.js";
import { TypesFeatureType } from "./types-feature-type.js";
import { TypesStatus } from "./types-status.js";
export type DtoFeatureResponse = {
    alertSettings?: TypesAlertSettings | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    description?: string | undefined;
    environmentId?: string | undefined;
    id?: string | undefined;
    lookupKey?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    meter?: DtoMeterResponse | undefined;
    meterId?: string | undefined;
    name?: string | undefined;
    status?: TypesStatus | undefined;
    tenantId?: string | undefined;
    type?: TypesFeatureType | undefined;
    unitPlural?: string | undefined;
    unitSingular?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const DtoFeatureResponse$inboundSchema: z.ZodType<DtoFeatureResponse, z.ZodTypeDef, unknown>;
export declare function dtoFeatureResponseFromJSON(jsonString: string): SafeParseResult<DtoFeatureResponse, SDKValidationError>;
//# sourceMappingURL=dto-feature-response.d.ts.map