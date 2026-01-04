import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesCommitmentType: {
    readonly Amount: "amount";
    readonly Quantity: "quantity";
};
export type TypesCommitmentType = ClosedEnum<typeof TypesCommitmentType>;
/** @internal */
export declare const TypesCommitmentType$inboundSchema: z.ZodNativeEnum<typeof TypesCommitmentType>;
/** @internal */
export declare const TypesCommitmentType$outboundSchema: z.ZodNativeEnum<typeof TypesCommitmentType>;
//# sourceMappingURL=typescommitmenttype.d.ts.map