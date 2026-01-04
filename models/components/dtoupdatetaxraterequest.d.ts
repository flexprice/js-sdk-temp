import * as z from "zod/v3";
import { TypesTaxRateStatus } from "./typestaxratestatus.js";
export type DtoUpdateTaxRateRequest = {
    /**
     * code is the updated unique alphanumeric identifier for the tax rate
     */
    code?: string | undefined;
    /**
     * description is the updated text description for the tax rate
     */
    description?: string | undefined;
    /**
     * metadata contains updated key-value pairs that will replace existing metadata
     */
    metadata?: {
        [k: string]: string;
    } | undefined;
    /**
     * name is the updated human-readable name for the tax rate
     */
    name?: string | undefined;
    taxRateStatus?: TypesTaxRateStatus | undefined;
};
/** @internal */
export type DtoUpdateTaxRateRequest$Outbound = {
    code?: string | undefined;
    description?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
    tax_rate_status?: string | undefined;
};
/** @internal */
export declare const DtoUpdateTaxRateRequest$outboundSchema: z.ZodType<DtoUpdateTaxRateRequest$Outbound, z.ZodTypeDef, DtoUpdateTaxRateRequest>;
export declare function dtoUpdateTaxRateRequestToJSON(dtoUpdateTaxRateRequest: DtoUpdateTaxRateRequest): string;
//# sourceMappingURL=dtoupdatetaxraterequest.d.ts.map