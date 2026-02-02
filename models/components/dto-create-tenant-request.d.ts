import * as z from "zod/v3";
import { DtoTenantBillingDetails, DtoTenantBillingDetails$Outbound } from "./dto-tenant-billing-details.js";
export type DtoCreateTenantRequest = {
    billingDetails?: DtoTenantBillingDetails | undefined;
    name: string;
};
/** @internal */
export type DtoCreateTenantRequest$Outbound = {
    billing_details?: DtoTenantBillingDetails$Outbound | undefined;
    name: string;
};
/** @internal */
export declare const DtoCreateTenantRequest$outboundSchema: z.ZodType<DtoCreateTenantRequest$Outbound, z.ZodTypeDef, DtoCreateTenantRequest>;
export declare function dtoCreateTenantRequestToJSON(dtoCreateTenantRequest: DtoCreateTenantRequest): string;
//# sourceMappingURL=dto-create-tenant-request.d.ts.map