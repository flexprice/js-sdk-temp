import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesSortDirection: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type TypesSortDirection = ClosedEnum<typeof TypesSortDirection>;
/** @internal */
export declare const TypesSortDirection$outboundSchema: z.ZodNativeEnum<typeof TypesSortDirection>;
//# sourceMappingURL=typessortdirection.d.ts.map