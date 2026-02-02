import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesFailurePointType: {
    readonly CustomerLookup: "customer_lookup";
    readonly MeterLookup: "meter_lookup";
    readonly PriceLookup: "price_lookup";
    readonly SubscriptionLineItemLookup: "subscription_line_item_lookup";
};
export type TypesFailurePointType = ClosedEnum<typeof TypesFailurePointType>;
/** @internal */
export declare const TypesFailurePointType$inboundSchema: z.ZodNativeEnum<typeof TypesFailurePointType>;
//# sourceMappingURL=types-failure-point-type.d.ts.map