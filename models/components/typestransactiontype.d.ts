import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesTransactionType: {
    readonly Credit: "credit";
    readonly Debit: "debit";
};
export type TypesTransactionType = ClosedEnum<typeof TypesTransactionType>;
/** @internal */
export declare const TypesTransactionType$inboundSchema: z.ZodNativeEnum<typeof TypesTransactionType>;
/** @internal */
export declare const TypesTransactionType$outboundSchema: z.ZodNativeEnum<typeof TypesTransactionType>;
//# sourceMappingURL=typestransactiontype.d.ts.map