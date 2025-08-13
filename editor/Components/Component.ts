import { HTML, SVG } from "imperative-html/dist/esm/elements-strict";
import { SongEditor } from "../SongEditor";
import { SongDocument } from "../SongDocument";
import { Slider } from "../HTMLWrapper";
import { Config } from "../../synth/SynthConfig";
type Functions = { [key: string]: () => any };
export default class Component<T = HTMLElement> {
    protected readonly HTML = HTML
    protected readonly svg = SVG;
    protected readonly Slider = Slider;
    protected readonly Config = Config;
    protected _html: T;
    protected doc: SongDocument;
    protected _slider: Slider
    
    constructor(protected editor: SongEditor, protected readonly functions?: Functions) {
        this.doc = editor.doc;
    }
    get container(): T {
        return this._html;
    }
    get slider() {
        return this._slider;
    }
}