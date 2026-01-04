import * as z from "zod/v3";
import { DtoThreshold, DtoThreshold$Outbound } from "./dtothreshold.js";
export type DtoAlertConfig = {
    threshold?: DtoThreshold | undefined;
};
/** @internal */
export type DtoAlertConfig$Outbound = {
    threshold?: DtoThreshold$Outbound | undefined;
};
/** @internal */
export declare const DtoAlertConfig$outboundSchema: z.ZodType<DtoAlertConfig$Outbound, z.ZodTypeDef, DtoAlertConfig>;
export declare function dtoAlertConfigToJSON(dtoAlertConfig: DtoAlertConfig): string;
//# sourceMappingURL=dtoalertconfig.d.ts.map