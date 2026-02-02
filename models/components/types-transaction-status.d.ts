import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesTransactionStatus: {
    readonly Pending: "pending";
    readonly Completed: "completed";
    readonly Failed: "failed";
};
export type TypesTransactionStatus = ClosedEnum<typeof TypesTransactionStatus>;
/** @internal */
export declare const TypesTransactionStatus$inboundSchema: z.ZodNativeEnum<typeof TypesTransactionStatus>;
/** @internal */
export declare const TypesTransactionStatus$outboundSchema: z.ZodNativeEnum<typeof TypesTransactionStatus>;
//# sourceMappingURL=types-transaction-status.d.ts.map