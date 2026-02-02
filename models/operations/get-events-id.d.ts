import * as z from "zod/v3";
export type GetEventsIdRequest = {
    /**
     * Event ID
     */
    id: string;
};
/** @internal */
export type GetEventsIdRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetEventsIdRequest$outboundSchema: z.ZodType<GetEventsIdRequest$Outbound, z.ZodTypeDef, GetEventsIdRequest>;
export declare function getEventsIdRequestToJSON(getEventsIdRequest: GetEventsIdRequest): string;
//# sourceMappingURL=get-events-id.d.ts.map