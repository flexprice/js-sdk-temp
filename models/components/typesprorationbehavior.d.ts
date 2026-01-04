import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesProrationBehavior: {
    readonly CreateProrations: "create_prorations";
    readonly None: "none";
};
export type TypesProrationBehavior = ClosedEnum<typeof TypesProrationBehavior>;
/** @internal */
export declare const TypesProrationBehavior$inboundSchema: z.ZodNativeEnum<typeof TypesProrationBehavior>;
/** @internal */
export declare const TypesProrationBehavior$outboundSchema: z.ZodNativeEnum<typeof TypesProrationBehavior>;
//# sourceMappingURL=typesprorationbehavior.d.ts.map