import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesSecretType: {
    readonly PrivateKey: "private_key";
    readonly PublishableKey: "publishable_key";
    readonly Integration: "integration";
};
export type TypesSecretType = ClosedEnum<typeof TypesSecretType>;
/** @internal */
export declare const TypesSecretType$inboundSchema: z.ZodNativeEnum<typeof TypesSecretType>;
/** @internal */
export declare const TypesSecretType$outboundSchema: z.ZodNativeEnum<typeof TypesSecretType>;
//# sourceMappingURL=types-secret-type.d.ts.map