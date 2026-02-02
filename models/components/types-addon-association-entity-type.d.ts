import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesAddonAssociationEntityType: {
    readonly Subscription: "subscription";
    readonly Plan: "plan";
    readonly Addon: "addon";
};
export type TypesAddonAssociationEntityType = ClosedEnum<typeof TypesAddonAssociationEntityType>;
/** @internal */
export declare const TypesAddonAssociationEntityType$inboundSchema: z.ZodNativeEnum<typeof TypesAddonAssociationEntityType>;
//# sourceMappingURL=types-addon-association-entity-type.d.ts.map