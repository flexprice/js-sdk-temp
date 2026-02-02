import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesCreditNoteType: {
    readonly Adjustment: "ADJUSTMENT";
    readonly Refund: "REFUND";
};
export type TypesCreditNoteType = ClosedEnum<typeof TypesCreditNoteType>;
/** @internal */
export declare const TypesCreditNoteType$inboundSchema: z.ZodNativeEnum<typeof TypesCreditNoteType>;
//# sourceMappingURL=types-credit-note-type.d.ts.map