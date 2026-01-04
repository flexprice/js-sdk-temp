import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesFilterOperatorType: {
    readonly Eq: "eq";
    readonly Contains: "contains";
    readonly Gt: "gt";
    readonly Lt: "lt";
    readonly In: "in";
    readonly NotIn: "not_in";
    readonly Before: "before";
    readonly After: "after";
};
export type TypesFilterOperatorType = ClosedEnum<typeof TypesFilterOperatorType>;
/** @internal */
export declare const TypesFilterOperatorType$outboundSchema: z.ZodNativeEnum<typeof TypesFilterOperatorType>;
//# sourceMappingURL=typesfilteroperatortype.d.ts.map