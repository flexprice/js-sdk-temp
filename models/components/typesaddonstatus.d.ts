import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesAddonStatus: {
    readonly Active: "active";
    readonly Cancelled: "cancelled";
    readonly Paused: "paused";
};
export type TypesAddonStatus = ClosedEnum<typeof TypesAddonStatus>;
/** @internal */
export declare const TypesAddonStatus$inboundSchema: z.ZodNativeEnum<typeof TypesAddonStatus>;
//# sourceMappingURL=typesaddonstatus.d.ts.map