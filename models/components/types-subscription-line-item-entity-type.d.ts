import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesSubscriptionLineItemEntityType: {
    readonly Plan: "plan";
    readonly Addon: "addon";
};
export type TypesSubscriptionLineItemEntityType = ClosedEnum<typeof TypesSubscriptionLineItemEntityType>;
/** @internal */
export declare const TypesSubscriptionLineItemEntityType$inboundSchema: z.ZodNativeEnum<typeof TypesSubscriptionLineItemEntityType>;
//# sourceMappingURL=types-subscription-line-item-entity-type.d.ts.map