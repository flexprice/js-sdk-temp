import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesFeatureType: {
    readonly Metered: "metered";
    readonly Boolean: "boolean";
    readonly Static: "static";
};
export type TypesFeatureType = ClosedEnum<typeof TypesFeatureType>;
/** @internal */
export declare const TypesFeatureType$inboundSchema: z.ZodNativeEnum<typeof TypesFeatureType>;
/** @internal */
export declare const TypesFeatureType$outboundSchema: z.ZodNativeEnum<typeof TypesFeatureType>;
//# sourceMappingURL=types-feature-type.d.ts.map