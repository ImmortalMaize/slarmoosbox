import { SongEditor } from "../../SongEditor";
import Component from "../Component";

export class SavePresetRow extends Component<HTMLDivElement> {
    constructor(protected editor: SongEditor) {
        super(editor, {});
        const { div, button } = this.HTML;
        const savePresetButton: HTMLButtonElement = button({style: "width: 100%", onclick: () => editor._openPrompt("savePreset") }, "Save Instrument As Preset");
        const savePresetRow: HTMLDivElement = div({ class: "selectRow" },
            savePresetButton
        );
        this._html = savePresetRow;
    }
}