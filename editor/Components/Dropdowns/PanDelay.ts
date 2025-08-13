// import { ChangePanDelay } from "../../changes";
// import { SongEditor } from "../../SongEditor";
// import Component from "../Component";

// export class PanDelay extends Component {
//     constructor(protected editor: SongEditor) {
//         super(editor, {});
//         const { div, span, input, doc } = this;
//         const { Slider, Config } = this;
        
//         const panDelaySlider = new Slider(input({ style: "margin: 0;", type: "range", min: "0", max: Config.modulators.dictionary["pan delay"].maxRawVol, value: "0", step: "1" }), this.doc, (oldValue: number, newValue: number) => new ChangePanDelay(doc, oldValue, newValue), false);
//         const panDelayRow: HTMLElement = div({ class: "selectRow dropFader" },
//             span({ class: "tip", style: "margin-left:4px;", onclick: () => editor.openPrompt("panDelay") },"‣ Delay:"),
//             panDelaySlider.container);
//         const panDropdownGroup: HTMLElement = div({ class: "editor-controls", style: "display: none;" }, panDelayRow);
//     }
// }