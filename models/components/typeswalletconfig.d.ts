import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesWalletConfigPriceType } from "./typeswalletconfigpricetype.js";
export type TypesWalletConfig = {
    /**
     * AllowedPriceTypes is a list of price types that are allowed for the wallet
     *
     * @remarks
     * nil means all price types are allowed
     */
    allowedPriceTypes?: Array<TypesWalletConfigPriceType> | undefined;
};
/** @internal */
export declare const TypesWalletConfig$inboundSchema: z.ZodType<TypesWalletConfig, z.ZodTypeDef, unknown>;
/** @internal */
export type TypesWalletConfig$Outbound = {
    allowed_price_types?: Array<string> | undefined;
};
/** @internal */
export declare const TypesWalletConfig$outboundSchema: z.ZodType<TypesWalletConfig$Outbound, z.ZodTypeDef, TypesWalletConfig>;
export declare function typesWalletConfigToJSON(typesWalletConfig: TypesWalletConfig): string;
export declare function typesWalletConfigFromJSON(jsonString: string): SafeParseResult<TypesWalletConfig, SDKValidationError>;
//# sourceMappingURL=typeswalletconfig.d.ts.map