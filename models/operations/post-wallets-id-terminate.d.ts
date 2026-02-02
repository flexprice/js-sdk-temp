import * as z from "zod/v3";
export type PostWalletsIdTerminateRequest = {
    /**
     * Wallet ID
     */
    id: string;
};
/** @internal */
export type PostWalletsIdTerminateRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const PostWalletsIdTerminateRequest$outboundSchema: z.ZodType<PostWalletsIdTerminateRequest$Outbound, z.ZodTypeDef, PostWalletsIdTerminateRequest>;
export declare function postWalletsIdTerminateRequestToJSON(postWalletsIdTerminateRequest: PostWalletsIdTerminateRequest): string;
//# sourceMappingURL=post-wallets-id-terminate.d.ts.map