import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesTaskType: {
    readonly Import: "IMPORT";
    readonly Export: "EXPORT";
};
export type TypesTaskType = ClosedEnum<typeof TypesTaskType>;
/** @internal */
export declare const TypesTaskType$inboundSchema: z.ZodNativeEnum<typeof TypesTaskType>;
/** @internal */
export declare const TypesTaskType$outboundSchema: z.ZodNativeEnum<typeof TypesTaskType>;
//# sourceMappingURL=types-task-type.d.ts.map