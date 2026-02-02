import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesWalletStatus: {
    readonly Active: "active";
    readonly Frozen: "frozen";
    readonly Closed: "closed";
};
export type TypesWalletStatus = ClosedEnum<typeof TypesWalletStatus>;
/** @internal */
export declare const TypesWalletStatus$inboundSchema: z.ZodNativeEnum<typeof TypesWalletStatus>;
/** @internal */
export declare const TypesWalletStatus$outboundSchema: z.ZodNativeEnum<typeof TypesWalletStatus>;
//# sourceMappingURL=types-wallet-status.d.ts.map