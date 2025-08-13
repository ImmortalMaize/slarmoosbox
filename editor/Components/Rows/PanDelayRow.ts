import { ChangePanDelay } from "../../changes";
import { SongEditor } from "../../SongEditor";
import Component from "../Component";

export class PanDelayRow extends Component {
    constructor(protected editor: SongEditor) {
        super(editor, {});
        const { div, span, input } = this.HTML;
        const { Slider, Config, doc } = this;
        
        const panDelaySlider = new Slider(input({ style: "margin: 0;", type: "range", min: "0", max: Config.modulators.dictionary["pan delay"].maxRawVol, value: "0", step: "1" }), this.doc, (oldValue: number, newValue: number) => new ChangePanDelay(doc, oldValue, newValue), false);
        const panDelayRow: HTMLElement = div({ class: "selectRow dropFader" },
            span({ class: "tip", style: "margin-left:4px;", onclick: () => editor._openPrompt("panDelay") },"‣ Delay:"),
            panDelaySlider.container);
        const panDropdownGroup: HTMLElement = div({ class: "editor-controls", style: "display: none;" }, panDelayRow);
        this._slider = panDelaySlider;
        this._html = panDropdownGroup
    }
}