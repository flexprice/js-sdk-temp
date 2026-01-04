import * as z from "zod/v3";
export type GetCustomersIdGrantsUpcomingRequest = {
    /**
     * Customer ID
     */
    id: string;
};
/** @internal */
export type GetCustomersIdGrantsUpcomingRequest$Outbound = {
    id: string;
};
/** @internal */
export declare const GetCustomersIdGrantsUpcomingRequest$outboundSchema: z.ZodType<GetCustomersIdGrantsUpcomingRequest$Outbound, z.ZodTypeDef, GetCustomersIdGrantsUpcomingRequest>;
export declare function getCustomersIdGrantsUpcomingRequestToJSON(getCustomersIdGrantsUpcomingRequest: GetCustomersIdGrantsUpcomingRequest): string;
//# sourceMappingURL=getcustomersidgrantsupcoming.d.ts.map