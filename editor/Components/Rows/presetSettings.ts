import { ColorConfig } from "../../ColorConfig";
import { SongEditor } from "../../SongEditor";
import Component from "../Component";

export class PresetSettingsRow extends Component<HTMLDivElement> {
    constructor(protected editor: SongEditor) {
        super(editor, {});
        const { div, button } = this.HTML;
        const presetSettingsText: HTMLDivElement = div({ id: "instrumentSettingsText", style: `padding: 3px 0; max-width: 15em; text-align: center; color: ${ColorConfig.secondaryText};` },
                "Preset Settings"
            );
        const savePresetButton: HTMLButtonElement = button({ style: "max-width:86px; width: 86px;", onclick: () => editor._openPrompt("savePreset") }, "Save");
        const saveAsPresetButton: HTMLButtonElement = button({ style: "max-width:86px; width: 86px;", onclick: () => editor._openPrompt("savePreset") }, "Save As");
        const savePresetRow: HTMLDivElement = div({},
            presetSettingsText,
            div({ class: "selectRow" }, savePresetButton, saveAsPresetButton)
        );
        this._html = savePresetRow;
    }
}