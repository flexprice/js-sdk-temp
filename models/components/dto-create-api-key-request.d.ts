import * as z from "zod/v3";
import { TypesSecretType } from "./types-secret-type.js";
export type DtoCreateAPIKeyRequest = {
    expiresAt?: string | undefined;
    name: string;
    serviceAccountId?: string | undefined;
    type: TypesSecretType;
};
/** @internal */
export type DtoCreateAPIKeyRequest$Outbound = {
    expires_at?: string | undefined;
    name: string;
    service_account_id?: string | undefined;
    type: string;
};
/** @internal */
export declare const DtoCreateAPIKeyRequest$outboundSchema: z.ZodType<DtoCreateAPIKeyRequest$Outbound, z.ZodTypeDef, DtoCreateAPIKeyRequest>;
export declare function dtoCreateAPIKeyRequestToJSON(dtoCreateAPIKeyRequest: DtoCreateAPIKeyRequest): string;
//# sourceMappingURL=dto-create-api-key-request.d.ts.map