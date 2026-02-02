import * as z from "zod/v3";
export type TypesConnectionSettings = {
    invoiceSyncEnable?: boolean | undefined;
};
/** @internal */
export type TypesConnectionSettings$Outbound = {
    invoice_sync_enable?: boolean | undefined;
};
/** @internal */
export declare const TypesConnectionSettings$outboundSchema: z.ZodType<TypesConnectionSettings$Outbound, z.ZodTypeDef, TypesConnectionSettings>;
export declare function typesConnectionSettingsToJSON(typesConnectionSettings: TypesConnectionSettings): string;
//# sourceMappingURL=types-connection-settings.d.ts.map