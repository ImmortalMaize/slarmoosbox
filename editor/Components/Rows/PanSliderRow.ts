import { Config, DropdownID } from "../../../synth/SynthConfig";
import { ChangePan } from "../../changes";
import { ColorConfig } from "../../ColorConfig";
import { Slider } from "../../HTMLWrapper";
import { SongEditor } from "../../SongEditor";
import Component from "../Component";

export class PanSliderRow extends Component {
    _html: HTMLDivElement;
    get container(): HTMLDivElement {
        return this._html;
    }
    private _dropdown: HTMLButtonElement;
    private _inputBox: HTMLInputElement;
    constructor(protected editor: SongEditor) {
        super(editor, {});
        const { div, span, input, button } = this.HTML
        const { doc } = editor;
        const panSliderInputBox: HTMLInputElement = input({
            style: "width: 4em; font-size: 80%; ",
            id: "panSliderInputBox",
            type: "number",
            step: "1",
            min: "0", max: "100",
            value: "0" });
        const panDropdown: HTMLButtonElement = button({
            style: "margin-left:0em; height:1.5em; width: 10px; padding: 0px; font-size: 8px;",
            onclick: () => editor._toggleDropdownMenu(DropdownID.Pan)
        }, "▼");
        const panSlider: Slider = new Slider(input({
            style: "margin: 0; position: sticky;",
            type: "range",
            min: "0", max: Config.panMax,
            value: Config.panCenter,
            step: "1" }),
            doc, (oldValue: number, newValue: number) => new ChangePan(doc, oldValue, newValue), true);
        const PanSliderRow: HTMLDivElement = div({ class: "selectRow" }, div({},
            span({ class: "tip", tabindex: "0", style: "height:1em; font-size: smaller;", onclick: () => editor._openPrompt("pan") }, "Pan DEBUG: "),
            div({ style: "color: " + ColorConfig.secondaryText + "; margin-top: -3px;" }, panSliderInputBox),
        ), panDropdown, panSlider.container);

        this._dropdown = panDropdown;
        this._inputBox = panSliderInputBox;
        this._html = PanSliderRow;
        this._slider = panSlider;
    }

    get dropdown(): HTMLButtonElement {
        return this._dropdown;
    }
    get inputBox(): HTMLInputElement {
        return this._inputBox;
    }
}