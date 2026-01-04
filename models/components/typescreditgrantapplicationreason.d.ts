import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesCreditGrantApplicationReason: {
    readonly FirstTimeRecurringCreditGrant: "first_time_recurring_credit_grant";
    readonly RecurringCreditGrant: "recurring_credit_grant";
    readonly OnetimeCreditGrant: "onetime_credit_grant";
};
export type TypesCreditGrantApplicationReason = ClosedEnum<typeof TypesCreditGrantApplicationReason>;
/** @internal */
export declare const TypesCreditGrantApplicationReason$inboundSchema: z.ZodNativeEnum<typeof TypesCreditGrantApplicationReason>;
//# sourceMappingURL=typescreditgrantapplicationreason.d.ts.map