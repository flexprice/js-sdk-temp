import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesScheduledTaskEntityType: {
    readonly Events: "events";
    readonly Invoice: "invoice";
    readonly CreditTopups: "credit_topups";
    readonly CreditUsage: "credit_usage";
};
export type TypesScheduledTaskEntityType = ClosedEnum<typeof TypesScheduledTaskEntityType>;
/** @internal */
export declare const TypesScheduledTaskEntityType$inboundSchema: z.ZodNativeEnum<typeof TypesScheduledTaskEntityType>;
/** @internal */
export declare const TypesScheduledTaskEntityType$outboundSchema: z.ZodNativeEnum<typeof TypesScheduledTaskEntityType>;
//# sourceMappingURL=types-scheduled-task-entity-type.d.ts.map