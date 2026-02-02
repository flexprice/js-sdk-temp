import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoTaxRateResponse } from "./dto-tax-rate-response.js";
import { TypesStatus } from "./types-status.js";
import { TypesTaxRateEntityType } from "./types-tax-rate-entity-type.js";
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
//# sourceMappingURL=dto-tax-applied-response.d.ts.map