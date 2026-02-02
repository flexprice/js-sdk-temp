import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesUserType: {
    readonly User: "user";
    readonly ServiceAccount: "service_account";
};
export type TypesUserType = ClosedEnum<typeof TypesUserType>;
/** @internal */
export declare const TypesUserType$inboundSchema: z.ZodNativeEnum<typeof TypesUserType>;
/** @internal */
export declare const TypesUserType$outboundSchema: z.ZodNativeEnum<typeof TypesUserType>;
//# sourceMappingURL=types-user-type.d.ts.map