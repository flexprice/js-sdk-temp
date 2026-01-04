import * as z from "zod/v3";
export type PostPaymentsIdProcessRequest = {
    /**
     * Payment ID
     */
    id: string;
};
/** @internal */
export type PostPaymentsIdProcessRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const PostPaymentsIdProcessRequest$outboundSchema: z.ZodType<PostPaymentsIdProcessRequest$Outbound, z.ZodTypeDef, PostPaymentsIdProcessRequest>;
export declare function postPaymentsIdProcessRequestToJSON(postPaymentsIdProcessRequest: PostPaymentsIdProcessRequest): string;
//# sourceMappingURL=postpaymentsidprocess.d.ts.map