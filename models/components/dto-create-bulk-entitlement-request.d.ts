import * as z from "zod/v3";
import { DtoCreateEntitlementRequest, DtoCreateEntitlementRequest$Outbound } from "./dto-create-entitlement-request.js";
export type DtoCreateBulkEntitlementRequest = {
    items: Array<DtoCreateEntitlementRequest>;
};
/** @internal */
export type DtoCreateBulkEntitlementRequest$Outbound = {
    items: Array<DtoCreateEntitlementRequest$Outbound>;
};
/** @internal */
export declare const DtoCreateBulkEntitlementRequest$outboundSchema: z.ZodType<DtoCreateBulkEntitlementRequest$Outbound, z.ZodTypeDef, DtoCreateBulkEntitlementRequest>;
export declare function dtoCreateBulkEntitlementRequestToJSON(dtoCreateBulkEntitlementRequest: DtoCreateBulkEntitlementRequest): string;
//# sourceMappingURL=dto-create-bulk-entitlement-request.d.ts.map