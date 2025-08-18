import { HTML } from "imperative-html/dist/esm/elements-strict";
import { Importable, ImportableArgs } from "./Importable";
import { Prompt } from "./Prompt";
import { SongDocument } from "../SongDocument";
import { SongEditor } from "../SongEditor";

export class SavePresetPrompt extends Importable implements Prompt {
    static promptName: string = "savePreset";
    static args: ImportableArgs[] = ["editor"];
    
    private readonly _cancelButton: HTMLButtonElement = HTML.button({ class: "cancelButton" });
    private readonly _saveButton: HTMLButtonElement = HTML.button({ class: "saveButton", style: "width:45%;" }, "Save");

    public constructor(private _doc: SongDocument, private _editor: SongEditor) {
        super()
        this._cancelButton.addEventListener("click", this._close);
        this._saveButton.addEventListener("click", this._savePreset);
    }

    public readonly container: HTMLDivElement = HTML.div({ class: "prompt noSelection", style: "width: 250px;" },
        HTML.h2("Save Preset"),
        HTML.input({ type: "text", style: "width: 100%;", value: "", maxlength: 250, "autofocus": "autofocus", placeholder: "Preset Name" }),
        HTML.div({ style: "display: flex; flex-direction: row-reverse; justify-content: space-between;" },
            this._saveButton,
            this._cancelButton
        ),);
    private _savePreset = (): void => {
        const presetName: string = (<HTMLInputElement>this.container.querySelector("input")).value.trim();
        if (presetName.length > 0) {
            this._editor.savePreset(presetName);
            this._close();
        } else {
            alert("Please enter a valid preset name.");
        }
    }
    private _close = (): void => {
        this._doc.undo();
    }

    public cleanUp = (): void => {
        this._cancelButton.removeEventListener("click", this._close);
        this._saveButton.removeEventListener("click", this._savePreset);
    };
}