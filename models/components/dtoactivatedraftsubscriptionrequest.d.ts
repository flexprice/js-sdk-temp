import * as z from "zod/v3";
export type DtoActivateDraftSubscriptionRequest = {
    /**
     * start_date is the new start date for the subscription when activating
     */
    startDate: string;
};
/** @internal */
export type DtoActivateDraftSubscriptionRequest$Outbound = {
    start_date: string;
};
/** @internal */
export declare const DtoActivateDraftSubscriptionRequest$outboundSchema: z.ZodType<DtoActivateDraftSubscriptionRequest$Outbound, z.ZodTypeDef, DtoActivateDraftSubscriptionRequest>;
export declare function dtoActivateDraftSubscriptionRequestToJSON(dtoActivateDraftSubscriptionRequest: DtoActivateDraftSubscriptionRequest): string;
//# sourceMappingURL=dtoactivatedraftsubscriptionrequest.d.ts.map