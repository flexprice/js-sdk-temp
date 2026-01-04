import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesStatus: {
    readonly Published: "published";
    readonly Deleted: "deleted";
    readonly Archived: "archived";
};
export type TypesStatus = ClosedEnum<typeof TypesStatus>;
/** @internal */
export declare const TypesStatus$inboundSchema: z.ZodNativeEnum<typeof TypesStatus>;
/** @internal */
export declare const TypesStatus$outboundSchema: z.ZodNativeEnum<typeof TypesStatus>;
//# sourceMappingURL=typesstatus.d.ts.map