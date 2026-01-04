import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoCreditNoteResponse } from "./dtocreditnoteresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListCreditNotesResponse = {
    items?: Array<DtoCreditNoteResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListCreditNotesResponse$inboundSchema: z.ZodType<DtoListCreditNotesResponse, z.ZodTypeDef, unknown>;
export declare function dtoListCreditNotesResponseFromJSON(jsonString: string): SafeParseResult<DtoListCreditNotesResponse, SDKValidationError>;
//# sourceMappingURL=dtolistcreditnotesresponse.d.ts.map