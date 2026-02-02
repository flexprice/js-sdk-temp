import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesFileType: {
    readonly Csv: "CSV";
    readonly Json: "JSON";
};
export type TypesFileType = ClosedEnum<typeof TypesFileType>;
/** @internal */
export declare const TypesFileType$inboundSchema: z.ZodNativeEnum<typeof TypesFileType>;
/** @internal */
export declare const TypesFileType$outboundSchema: z.ZodNativeEnum<typeof TypesFileType>;
//# sourceMappingURL=types-file-type.d.ts.map