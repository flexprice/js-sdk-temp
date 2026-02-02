import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class CreditNotes extends ClientSDK {
    /**
     * List credit notes with filtering
     *
     * @remarks
     * Lists credit notes with filtering
     */
    getCreditnotes(request: operations.GetCreditnotesRequest, options?: RequestOptions): Promise<components.DtoListCreditNotesResponse>;
    /**
     * Create a new credit note
     *
     * @remarks
     * Creates a new credit note
     */
    postCreditnotes(request: components.DtoCreateCreditNoteRequest, options?: RequestOptions): Promise<components.DtoCreditNoteResponse>;
    /**
     * Get a credit note by ID
     *
     * @remarks
     * Retrieves a credit note by ID
     */
    getCreditnotesId(id: string, options?: RequestOptions): Promise<components.DtoCreditNoteResponse>;
    /**
     * Process a draft credit note
     *
     * @remarks
     * Processes a draft credit note
     */
    postCreditnotesIdFinalize(id: string, options?: RequestOptions): Promise<components.DtoCreditNoteResponse>;
    /**
     * Void a credit note
     *
     * @remarks
     * Voids a credit note
     */
    postCreditnotesIdVoid(id: string, options?: RequestOptions): Promise<components.DtoCreditNoteResponse>;
}
//# sourceMappingURL=credit-notes.d.ts.map