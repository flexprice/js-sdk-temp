import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoAddonResponse } from "./dtoaddonresponse.js";
import { DtoFeatureResponse } from "./dtofeatureresponse.js";
import { DtoPlanResponse } from "./dtoplanresponse.js";
import { TypesEntitlementEntityType } from "./typesentitlemententitytype.js";
import { TypesEntitlementUsageResetPeriod } from "./typesentitlementusageresetperiod.js";
import { TypesFeatureType } from "./typesfeaturetype.js";
import { TypesStatus } from "./typesstatus.js";
export type DtoEntitlementResponse = {
    addon?: DtoAddonResponse | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    displayOrder?: number | undefined;
    endDate?: string | undefined;
    entityId?: string | undefined;
    entityType?: TypesEntitlementEntityType | undefined;
    environmentId?: string | undefined;
    feature?: DtoFeatureResponse | undefined;
    featureId?: string | undefined;
    featureType?: TypesFeatureType | undefined;
    id?: string | undefined;
    isEnabled?: boolean | undefined;
    isSoftLimit?: boolean | undefined;
    parentEntitlementId?: string | undefined;
    plan?: DtoPlanResponse | undefined;
    /**
     * TODO: Remove this once we have a proper entitlement entity type
     */
    planId?: string | undefined;
    startDate?: string | undefined;
    staticValue?: string | undefined;
    status?: TypesStatus | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
    usageLimit?: number | undefined;
    usageResetPeriod?: TypesEntitlementUsageResetPeriod | undefined;
};
/** @internal */
export declare const DtoEntitlementResponse$inboundSchema: z.ZodType<DtoEntitlementResponse, z.ZodTypeDef, unknown>;
export declare function dtoEntitlementResponseFromJSON(jsonString: string): SafeParseResult<DtoEntitlementResponse, SDKValidationError>;
//# sourceMappingURL=dtoentitlementresponse.d.ts.map