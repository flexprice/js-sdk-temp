import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
export type TypesAutoTopup = {
    amount?: number | undefined;
    enabled?: boolean | undefined;
    invoicing?: boolean | undefined;
    threshold?: number | undefined;
};
/** @internal */
export declare const TypesAutoTopup$inboundSchema: z.ZodType<TypesAutoTopup, z.ZodTypeDef, unknown>;
/** @internal */
export type TypesAutoTopup$Outbound = {
    amount?: number | undefined;
    enabled?: boolean | undefined;
    invoicing?: boolean | undefined;
    threshold?: number | undefined;
};
/** @internal */
export declare const TypesAutoTopup$outboundSchema: z.ZodType<TypesAutoTopup$Outbound, z.ZodTypeDef, TypesAutoTopup>;
export declare function typesAutoTopupToJSON(typesAutoTopup: TypesAutoTopup): string;
export declare function typesAutoTopupFromJSON(jsonString: string): SafeParseResult<TypesAutoTopup, SDKValidationError>;
//# sourceMappingURL=types-auto-topup.d.ts.map