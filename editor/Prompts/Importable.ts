export type ImportableArgs = "song"|"editor"|"patternEditor"|"trackArea"|"hasContainer"|"promptName"|boolean
export abstract class Importable {
    static promptName: string|string[]
    static args: ImportableArgs[]|Array<ImportableArgs[]>
}