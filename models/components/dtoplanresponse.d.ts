import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoCreditGrantResponse } from "./dtocreditgrantresponse.js";
import { DtoEntitlementResponse } from "./dtoentitlementresponse.js";
import { DtoPriceResponse } from "./dtopriceresponse.js";
import { TypesStatus } from "./typesstatus.js";
export type DtoPlanResponse = {
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    creditGrants?: Array<DtoCreditGrantResponse> | undefined;
    description?: string | undefined;
    displayOrder?: number | undefined;
    entitlements?: Array<DtoEntitlementResponse> | undefined;
    environmentId?: string | undefined;
    id?: string | undefined;
    lookupKey?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
    /**
     * TODO: Add inline addons
     */
    prices?: Array<DtoPriceResponse> | undefined;
    status?: TypesStatus | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const DtoPlanResponse$inboundSchema: z.ZodType<DtoPlanResponse, z.ZodTypeDef, unknown>;
export declare function dtoPlanResponseFromJSON(jsonString: string): SafeParseResult<DtoPlanResponse, SDKValidationError>;
//# sourceMappingURL=dtoplanresponse.d.ts.map