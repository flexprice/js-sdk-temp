import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesWalletTxReferenceType: {
    readonly Payment: "PAYMENT";
    readonly External: "EXTERNAL";
    readonly Request: "REQUEST";
};
export type TypesWalletTxReferenceType = ClosedEnum<typeof TypesWalletTxReferenceType>;
/** @internal */
export declare const TypesWalletTxReferenceType$inboundSchema: z.ZodNativeEnum<typeof TypesWalletTxReferenceType>;
//# sourceMappingURL=typeswallettxreferencetype.d.ts.map