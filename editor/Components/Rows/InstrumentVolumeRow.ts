import { ChangeVolume } from "../../changes";
import { ColorConfig } from "../../ColorConfig";
import { SongEditor } from "../../SongEditor";
import Component from "../Component";

export class InstrumentVolumeRow extends Component<HTMLDivElement> {
    private _inputBox: HTMLInputElement;
    get inputBox(): HTMLInputElement {
        return this._inputBox;
    }
    constructor(protected editor: SongEditor) {
        super(editor, {});
        const { div, span, input } = this.HTML;
        const { Slider, Config, doc } = this;

            const instrumentVolumeSlider = new Slider(input({ style: "margin: 0; position: sticky;", type: "range", min: Math.floor(-Config.volumeRange / 2), max: Math.floor(Config.volumeRange / 2), value: "0", step: "1" }), doc, (oldValue: number, newValue: number) => new ChangeVolume(this.doc, oldValue, newValue), true);
            const instrumentVolumeSliderInputBox: HTMLInputElement = input({ style: "width: 4em; font-size: 80%", id: "volumeSliderInputBox", type: "number", step: "1", min: Math.floor(-Config.volumeRange / 2), max: Math.floor(Config.volumeRange / 2), value: "0" });
            const instrumentVolumeSliderTip: HTMLDivElement = div({ class: "selectRow", style: "height: 1em" }, span({ class: "tip", style: "font-size: smaller;", onclick: () => editor._openPrompt("instrumentVolume") }, "Volume: "));
            const instrumentVolumeSliderRow: HTMLDivElement = div({ class: "selectRow" }, div({},
                div({ style: `color: ${ColorConfig.secondaryText};` }, span({ class: "tip" }, instrumentVolumeSliderTip)),
                div({ style: `color: ${ColorConfig.secondaryText}; margin-top: -3px;` }, instrumentVolumeSliderInputBox),
            ), instrumentVolumeSlider.container);

            this._inputBox = instrumentVolumeSliderInputBox;
            this._html = instrumentVolumeSliderRow;
            this._slider = instrumentVolumeSlider;
    }

}