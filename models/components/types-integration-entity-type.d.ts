import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesIntegrationEntityType: {
    readonly Customer: "customer";
    readonly Plan: "plan";
    readonly Invoice: "invoice";
    readonly Subscription: "subscription";
    readonly Payment: "payment";
    readonly CreditNote: "credit_note";
    readonly Addon: "addon";
    readonly Item: "item";
    readonly ItemPrice: "item_price";
    readonly Price: "price";
};
export type TypesIntegrationEntityType = ClosedEnum<typeof TypesIntegrationEntityType>;
/** @internal */
export declare const TypesIntegrationEntityType$inboundSchema: z.ZodNativeEnum<typeof TypesIntegrationEntityType>;
/** @internal */
export declare const TypesIntegrationEntityType$outboundSchema: z.ZodNativeEnum<typeof TypesIntegrationEntityType>;
//# sourceMappingURL=types-integration-entity-type.d.ts.map