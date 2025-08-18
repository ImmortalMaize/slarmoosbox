import { SongDocument } from "../SongDocument";
import { SongEditor } from "../SongEditor";
import { Importable } from "./Importable";
import { Prompt } from "./Prompt";

export class ManagePresetsPrompt extends Importable implements Prompt {
    static promptName = "managePresets"
    static args = []
    public container: HTMLDivElement
    constructor(_doc: SongDocument, _editor: SongEditor) {
        super();
        
    }
    public cleanUp: () => void;
}