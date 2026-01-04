import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PostTasksScheduledIdRunRequest = {
    /**
     * Scheduled Task ID
     */
    id: string;
    /**
     * Optional start and end time for custom range
     */
    body?: components.DtoTriggerForceRunRequest | undefined;
};
/** @internal */
export type PostTasksScheduledIdRunRequest$Outbound = {
    id: string;
    body?: components.DtoTriggerForceRunRequest$Outbound | undefined;
};
/** @internal */
export declare const PostTasksScheduledIdRunRequest$outboundSchema: z.ZodType<PostTasksScheduledIdRunRequest$Outbound, z.ZodTypeDef, PostTasksScheduledIdRunRequest>;
export declare function postTasksScheduledIdRunRequestToJSON(postTasksScheduledIdRunRequest: PostTasksScheduledIdRunRequest): string;
//# sourceMappingURL=posttasksscheduledidrun.d.ts.map