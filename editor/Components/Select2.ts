import { ColorConfig } from "../ColorConfig";
import { SongEditor } from "../SongEditor";
import Component from "./Component";

export class Select2 extends Component<HTMLSelectElement> {
    private $: JQuery<HTMLSelectElement>
    constructor(private _editor: SongEditor, private _container: HTMLSelectElement, private _handler: () => void) {
        super(_editor);
        this._html = this._container
    }
    public init () {
        const container = $("#" + this._container.id)
        this.$ = container.select2({ dropdownAutoWidth: true }) as JQuery<HTMLSelectElement>
        this._attachEvents()
    }
    private _attachEvents(): void {
        const container = $("#" + this._container.id)
        const { _editor: editor } = this
        
        container.on('select2:open', function () {
            console.log("opened!")
            $('.select2-dropdown--below').css('opacity', 0);
            $('.select2-dropdown').css('opacity', 1);
            setTimeout(() => {
                let groups = $('.select2-container--open .select2-results__group');
                let options = $('.select2-container--open .select2-results__option');

                $.each(groups, (_index, v) => {
                    $(v).siblings().hide();
                    $(v)[0].setAttribute("style", "color: " + ColorConfig.getChannelColor(editor.doc.song, editor.doc.channel).primaryNote + ";");
                })
                $.each(options, (_index, v) => {
                    $(v)[0].setAttribute("style", "color: " + ColorConfig.getChannelColor(editor.doc.song, editor.doc.channel).primaryNote + ";");
                })

                $('.select2-dropdown--below').css('opacity', 1);
            }, 0);
        });
        container.on('change', this._handler);
        container.on("select2:close", this._editor._refocus)
    }
    public addOption(option: HTMLOptionElement, label: string) {
        this.$.select2("destroy")
        $(`#${this.container.id} optgroup[label="${label}"]`).append(option).val(option.value)
        this.$.select2({ dropdownAutoWidth: true })
    }
}