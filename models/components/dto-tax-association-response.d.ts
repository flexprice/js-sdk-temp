import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoTaxRateResponse } from "./dto-tax-rate-response.js";
import { TypesTaxRateEntityType } from "./types-tax-rate-entity-type.js";
export type DtoTaxAssociationResponse = {
    autoApply?: boolean | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    currency?: string | undefined;
    entityId?: string | undefined;
    entityType?: TypesTaxRateEntityType | undefined;
    environmentId?: string | undefined;
    id?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    priority?: number | undefined;
    status?: string | undefined;
    taxRate?: DtoTaxRateResponse | undefined;
    taxRateId?: string | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
    validFrom?: string | undefined;
    validTo?: string | undefined;
};
/** @internal */
export declare const DtoTaxAssociationResponse$inboundSchema: z.ZodType<DtoTaxAssociationResponse, z.ZodTypeDef, unknown>;
export declare function dtoTaxAssociationResponseFromJSON(jsonString: string): SafeParseResult<DtoTaxAssociationResponse, SDKValidationError>;
//# sourceMappingURL=dto-tax-association-response.d.ts.map