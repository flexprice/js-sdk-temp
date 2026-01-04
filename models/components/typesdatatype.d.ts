import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesDataType: {
    readonly String: "string";
    readonly Number: "number";
    readonly Date: "date";
    readonly Array: "array";
};
export type TypesDataType = ClosedEnum<typeof TypesDataType>;
/** @internal */
export declare const TypesDataType$outboundSchema: z.ZodNativeEnum<typeof TypesDataType>;
//# sourceMappingURL=typesdatatype.d.ts.map