import { Instrument } from "../../synth/synth";

type JSONInstrument = ReturnType<Instrument["toJsonObject"]> & {url?: string, isDrum?: boolean, isMod?: boolean};
export interface UserPreset {
    name: string;
    instrument: JSONInstrument;
}
interface PresetCollection {
    name: string;
    presets: UserPreset[];
}

export class PresetsEditor {
    public presets: PresetCollection[] = [];
    public constructor(json?: PresetCollection[]) {
        if (json) this.presets = json
        else if (localStorage.getItem("userPresets")) this.presets = JSON.parse(localStorage.getItem("userPresets")!)
        else this.presets = [{ name: "My Presets", presets: [] }]
        this.save();
    }
    public getPreset = (name: string, group: string): UserPreset|null => {
        const collection = this.presets.find((collection) => collection.name === group);
        if (!collection) return null;
        const preset = collection.presets.find(preset => preset.name === name)
        console.log(preset)
        return preset ?? null;
    }
    public addPreset = (preset: UserPreset, group: string): void => {
        let collection = this.presets.find((collection) => collection.name === group);
        if (!collection) {
            collection = { name: group, presets: [] };
            this.presets.push(collection);
        }
        collection.presets.push(preset);
        this.save();
    }

    public save = (): void => {
        const presets = this.presets.filter((collection) => collection.presets.length > 0);
        localStorage.setItem("userPresets", JSON.stringify(presets));
    }
}