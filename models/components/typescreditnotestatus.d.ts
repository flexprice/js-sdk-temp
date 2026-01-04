import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesCreditNoteStatus: {
    readonly Draft: "DRAFT";
    readonly Finalized: "FINALIZED";
    readonly Voided: "VOIDED";
};
export type TypesCreditNoteStatus = ClosedEnum<typeof TypesCreditNoteStatus>;
/** @internal */
export declare const TypesCreditNoteStatus$inboundSchema: z.ZodNativeEnum<typeof TypesCreditNoteStatus>;
//# sourceMappingURL=typescreditnotestatus.d.ts.map