import * as z from "zod/v3";
import { TypesSecretProvider } from "./typessecretprovider.js";
export type DtoCreateIntegrationRequest = {
    credentials: {
        [k: string]: string;
    };
    name: string;
    provider: TypesSecretProvider;
};
/** @internal */
export type DtoCreateIntegrationRequest$Outbound = {
    credentials: {
        [k: string]: string;
    };
    name: string;
    provider: string;
};
/** @internal */
export declare const DtoCreateIntegrationRequest$outboundSchema: z.ZodType<DtoCreateIntegrationRequest$Outbound, z.ZodTypeDef, DtoCreateIntegrationRequest>;
export declare function dtoCreateIntegrationRequestToJSON(dtoCreateIntegrationRequest: DtoCreateIntegrationRequest): string;
//# sourceMappingURL=dtocreateintegrationrequest.d.ts.map