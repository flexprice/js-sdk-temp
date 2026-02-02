import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoCreditGrantResponse } from "./dto-credit-grant-response.js";
import { DtoEntitlementResponse } from "./dto-entitlement-response.js";
import { DtoPriceResponse } from "./dto-price-response.js";
import { TypesStatus } from "./types-status.js";
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
//# sourceMappingURL=dto-plan-response.d.ts.map