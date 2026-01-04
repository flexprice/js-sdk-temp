import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PostWalletsIdTopUpRequest = {
    /**
     * Wallet ID
     */
    id: string;
    /**
     * Top up request
     */
    body: components.DtoTopUpWalletRequest;
};
/** @internal */
export type PostWalletsIdTopUpRequest$Outbound = {
    id: string;
    body: components.DtoTopUpWalletRequest$Outbound;
};
/** @internal */
export declare const PostWalletsIdTopUpRequest$outboundSchema: z.ZodType<PostWalletsIdTopUpRequest$Outbound, z.ZodTypeDef, PostWalletsIdTopUpRequest>;
export declare function postWalletsIdTopUpRequestToJSON(postWalletsIdTopUpRequest: PostWalletsIdTopUpRequest): string;
//# sourceMappingURL=postwalletsidtopup.d.ts.map