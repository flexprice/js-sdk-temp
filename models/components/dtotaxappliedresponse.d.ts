import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoTaxRateResponse } from "./dtotaxrateresponse.js";
import { TypesStatus } from "./typesstatus.js";
import { TypesTaxRateEntityType } from "./typestaxrateentitytype.js";
export type DtoTaxAppliedResponse = {
    appliedAt?: string | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    currency?: string | undefined;
    entityId?: string | undefined;
    entityType?: TypesTaxRateEntityType | undefined;
    environmentId?: string | undefined;
    id?: string | undefined;
    idempotencyKey?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    status?: TypesStatus | undefined;
    taxAmount?: string | undefined;
    taxAssociationId?: string | undefined;
    taxRate?: DtoTaxRateResponse | undefined;
    taxRateId?: string | undefined;
    taxableAmount?: string | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const DtoTaxAppliedResponse$inboundSchema: z.ZodType<DtoTaxAppliedResponse, z.ZodTypeDef, unknown>;
export declare function dtoTaxAppliedResponseFromJSON(jsonString: string): SafeParseResult<DtoTaxAppliedResponse, SDKValidationError>;
//# sourceMappingURL=dtotaxappliedresponse.d.ts.map