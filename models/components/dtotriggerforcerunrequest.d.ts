import * as z from "zod/v3";
export type DtoTriggerForceRunRequest = {
    endTime?: string | undefined;
    startTime?: string | undefined;
};
/** @internal */
export type DtoTriggerForceRunRequest$Outbound = {
    end_time?: string | undefined;
    start_time?: string | undefined;
};
/** @internal */
export declare const DtoTriggerForceRunRequest$outboundSchema: z.ZodType<DtoTriggerForceRunRequest$Outbound, z.ZodTypeDef, DtoTriggerForceRunRequest>;
export declare function dtoTriggerForceRunRequestToJSON(dtoTriggerForceRunRequest: DtoTriggerForceRunRequest): string;
//# sourceMappingURL=dtotriggerforcerunrequest.d.ts.map