import { HTML, SVG } from "imperative-html/dist/esm/elements-strict";
import { SongEditor } from "../SongEditor";
import { SongDocument } from "../SongDocument";
import { Slider } from "../HTMLWrapper";
import { Config } from "../../synth/SynthConfig";
const { button, div, input, select, span, optgroup, option, canvas } = HTML;
type Functions = { [key: string]: () => any };
export default class Component {
    protected readonly button = button
    protected readonly div = div
    protected readonly input = input
    protected readonly select = select
    protected readonly span = span
    protected readonly optgroup = optgroup
    protected readonly option = option
    protected readonly canvas = canvas
    protected readonly svg = SVG;
    protected readonly Slider = Slider;
    protected readonly Config = Config;
    protected _html: HTMLElement;
    protected doc: SongDocument;
    private readonly _sliders: Map<string, Slider> = new Map();
    
    constructor(protected editor: SongEditor, protected readonly functions?: Functions) {
        this.doc = editor.doc;
    }
    get container() {
        return this._html;
    }
    protected addSlider(name: string, slider: Slider) {
        this._sliders.set(name, slider);
    }
    public getSlider(name: string): Slider|null {
        return this._sliders.get(name) ?? null
    }
    get sliders() {
        return this._sliders;
    }
}