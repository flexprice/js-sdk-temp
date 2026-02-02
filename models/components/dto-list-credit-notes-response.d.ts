import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoCreditNoteResponse } from "./dto-credit-note-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListCreditNotesResponse = {
    items?: Array<DtoCreditNoteResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListCreditNotesResponse$inboundSchema: z.ZodType<DtoListCreditNotesResponse, z.ZodTypeDef, unknown>;
export declare function dtoListCreditNotesResponseFromJSON(jsonString: string): SafeParseResult<DtoListCreditNotesResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-credit-notes-response.d.ts.map