import * as z from "zod/v3";
import { DtoTenantBillingDetails, DtoTenantBillingDetails$Outbound } from "./dtotenantbillingdetails.js";
export type DtoUpdateTenantRequest = {
    billingDetails?: DtoTenantBillingDetails | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
};
/** @internal */
export type DtoUpdateTenantRequest$Outbound = {
    billing_details?: DtoTenantBillingDetails$Outbound | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
};
/** @internal */
export declare const DtoUpdateTenantRequest$outboundSchema: z.ZodType<DtoUpdateTenantRequest$Outbound, z.ZodTypeDef, DtoUpdateTenantRequest>;
export declare function dtoUpdateTenantRequestToJSON(dtoUpdateTenantRequest: DtoUpdateTenantRequest): string;
//# sourceMappingURL=dtoupdatetenantrequest.d.ts.map