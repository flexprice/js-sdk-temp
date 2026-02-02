import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { TypesStatus } from "./types-status.js";
import { TypesTaxRateScope } from "./types-tax-rate-scope.js";
import { TypesTaxRateStatus } from "./types-tax-rate-status.js";
import { TypesTaxRateType } from "./types-tax-rate-type.js";
export type DtoTaxRateResponse = {
    code?: string | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    description?: string | undefined;
    environmentId?: string | undefined;
    fixedValue?: string | undefined;
    id?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
    percentageValue?: string | undefined;
    scope?: TypesTaxRateScope | undefined;
    status?: TypesStatus | undefined;
    taxRateStatus?: TypesTaxRateStatus | undefined;
    taxRateType?: TypesTaxRateType | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const DtoTaxRateResponse$inboundSchema: z.ZodType<DtoTaxRateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DtoTaxRateResponse$Outbound = {
    code?: string | undefined;
    created_at?: string | undefined;
    created_by?: string | undefined;
    description?: string | undefined;
    environment_id?: string | undefined;
    fixed_value?: string | undefined;
    id?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
    percentage_value?: string | undefined;
    scope?: string | undefined;
    status?: string | undefined;
    tax_rate_status?: string | undefined;
    tax_rate_type?: string | undefined;
    tenant_id?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
};
/** @internal */
export declare const DtoTaxRateResponse$outboundSchema: z.ZodType<DtoTaxRateResponse$Outbound, z.ZodTypeDef, DtoTaxRateResponse>;
export declare function dtoTaxRateResponseToJSON(dtoTaxRateResponse: DtoTaxRateResponse): string;
export declare function dtoTaxRateResponseFromJSON(jsonString: string): SafeParseResult<DtoTaxRateResponse, SDKValidationError>;
//# sourceMappingURL=dto-tax-rate-response.d.ts.map