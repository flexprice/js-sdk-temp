import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoEntitlementSourceEntityType } from "./dto-entitlement-source-entity-type.js";
import { TypesBillingPeriod } from "./types-billing-period.js";
export type DtoEntitlementSource = {
    entitlementId?: string | undefined;
    entityId?: string | undefined;
    entityName?: string | undefined;
    entityType?: DtoEntitlementSourceEntityType | undefined;
    isEnabled?: boolean | undefined;
    quantity?: number | undefined;
    staticValue?: string | undefined;
    subscriptionId?: string | undefined;
    usageLimit?: number | undefined;
    usageResetPeriod?: TypesBillingPeriod | undefined;
};
/** @internal */
export declare const DtoEntitlementSource$inboundSchema: z.ZodType<DtoEntitlementSource, z.ZodTypeDef, unknown>;
export declare function dtoEntitlementSourceFromJSON(jsonString: string): SafeParseResult<DtoEntitlementSource, SDKValidationError>;
//# sourceMappingURL=dto-entitlement-source.d.ts.map