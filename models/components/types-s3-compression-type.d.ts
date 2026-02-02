import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesS3CompressionType: {
    readonly None: "none";
    readonly Gzip: "gzip";
};
export type TypesS3CompressionType = ClosedEnum<typeof TypesS3CompressionType>;
/** @internal */
export declare const TypesS3CompressionType$inboundSchema: z.ZodNativeEnum<typeof TypesS3CompressionType>;
/** @internal */
export declare const TypesS3CompressionType$outboundSchema: z.ZodNativeEnum<typeof TypesS3CompressionType>;
//# sourceMappingURL=types-s3-compression-type.d.ts.map