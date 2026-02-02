import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesSubscriptionChangeType: {
    readonly Upgrade: "upgrade";
    readonly Downgrade: "downgrade";
    readonly Lateral: "lateral";
};
export type TypesSubscriptionChangeType = ClosedEnum<typeof TypesSubscriptionChangeType>;
/** @internal */
export declare const TypesSubscriptionChangeType$inboundSchema: z.ZodNativeEnum<typeof TypesSubscriptionChangeType>;
//# sourceMappingURL=types-subscription-change-type.d.ts.map