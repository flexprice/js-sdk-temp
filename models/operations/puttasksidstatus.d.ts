import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutTasksIdStatusRequest = {
    /**
     * Task ID
     */
    id: string;
    /**
     * Status update
     */
    body: components.DtoUpdateTaskStatusRequest;
};
/** @internal */
export type PutTasksIdStatusRequest$Outbound = {
    id: string;
    body: components.DtoUpdateTaskStatusRequest$Outbound;
};
/** @internal */
export declare const PutTasksIdStatusRequest$outboundSchema: z.ZodType<PutTasksIdStatusRequest$Outbound, z.ZodTypeDef, PutTasksIdStatusRequest>;
export declare function putTasksIdStatusRequestToJSON(putTasksIdStatusRequest: PutTasksIdStatusRequest): string;
//# sourceMappingURL=puttasksidstatus.d.ts.map