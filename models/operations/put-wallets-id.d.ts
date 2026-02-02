import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutWalletsIdRequest = {
    /**
     * Wallet ID
     */
    id: string;
    /**
     * Update wallet request
     */
    body: components.DtoUpdateWalletRequest;
};
/** @internal */
export type PutWalletsIdRequest$Outbound = {
    id: string;
    body: components.DtoUpdateWalletRequest$Outbound;
};
/** @internal */
export declare const PutWalletsIdRequest$outboundSchema: z.ZodType<PutWalletsIdRequest$Outbound, z.ZodTypeDef, PutWalletsIdRequest>;
export declare function putWalletsIdRequestToJSON(putWalletsIdRequest: PutWalletsIdRequest): string;
//# sourceMappingURL=put-wallets-id.d.ts.map