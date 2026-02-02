import * as z from "zod/v3";
import { TypesSortDirection } from "./types-sort-direction.js";
export type TypesSortCondition = {
    direction?: TypesSortDirection | undefined;
    field?: string | undefined;
};
/** @internal */
export type TypesSortCondition$Outbound = {
    direction?: string | undefined;
    field?: string | undefined;
};
/** @internal */
export declare const TypesSortCondition$outboundSchema: z.ZodType<TypesSortCondition$Outbound, z.ZodTypeDef, TypesSortCondition>;
export declare function typesSortConditionToJSON(typesSortCondition: TypesSortCondition): string;
//# sourceMappingURL=types-sort-condition.d.ts.map