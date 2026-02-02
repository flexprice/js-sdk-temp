import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesEntityType: {
    readonly Events: "EVENTS";
    readonly Prices: "PRICES";
    readonly Customers: "CUSTOMERS";
    readonly Features: "FEATURES";
};
export type TypesEntityType = ClosedEnum<typeof TypesEntityType>;
/** @internal */
export declare const TypesEntityType$inboundSchema: z.ZodNativeEnum<typeof TypesEntityType>;
/** @internal */
export declare const TypesEntityType$outboundSchema: z.ZodNativeEnum<typeof TypesEntityType>;
//# sourceMappingURL=types-entity-type.d.ts.map