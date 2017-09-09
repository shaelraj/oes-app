export class Category {
    private _categoryId: number;
    private _name: string;
    private _description: string;
    private _updateDt: Date;
    private _insDt: Date;

    constructor () {}

    public get categoryId(): number {
        return this.categoryId;
    }

    public get name(): string {
        return this._name;
    }

    public get description(): string {
        return this._description;
    }

    public get updateDt(): Date {
        return this._updateDt;
    }

    public get insDt(): Date {
        return this._insDt;
    }

    public set categoryId(categoryId: number) {
        this.categoryId = categoryId;
    }

    public set name(name: string) {
        this.name = name;
    }

    public set description(description: string) {
        this._description = description;
    }

    public set updateDt(updateDt: Date) {
        this._updateDt = updateDt;
    }

    public set insDt(insDt: Date) {
        this._insDt = insDt;
    }
}
