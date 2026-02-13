import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoTaxRateResponse } from "./dto-tax-rate-response.js";
import { TypesStatus } from "./types-status.js";
import { TypesTaxRateEntityType } from "./types-tax-rate-entity-type.js";
export type DtoTaxAssociationResponse = {
    /**
     * Whether this tax should be automatically applied
     */
    autoApply?: boolean | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    /**
     * Currency
     */
    currency?: string | undefined;
    /**
     * ID of the entity this tax rate applies to
     */
    entityId?: string | undefined;
    entityType?: TypesTaxRateEntityType | undefined;
    /**
     * EnvironmentID is the ID of the environment this tax rate config belongs to
     */
    environmentId?: string | undefined;
    /**
     * ID of the ent.
     */
    id?: string | undefined;
    /**
     * Metadata holds the value of the "metadata" field.
     */
    metadata?: {
        [k: string]: string;
    } | undefined;
    /**
     * Priority for tax resolution (lower number = higher priority)
     */
    priority?: number | undefined;
    status?: TypesStatus | undefined;
    taxRate?: DtoTaxRateResponse | undefined;
    /**
     * Reference to the TaxRate entity
     */
    taxRateId?: string | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const DtoTaxAssociationResponse$inboundSchema: z.ZodType<DtoTaxAssociationResponse, z.ZodTypeDef, unknown>;
export declare function dtoTaxAssociationResponseFromJSON(jsonString: string): SafeParseResult<DtoTaxAssociationResponse, SDKValidationError>;
//# sourceMappingURL=dto-tax-association-response.d.ts.map