﻿import { IMessageDataWrapper } from '../../../../../../core/communication/messages/IMessageDataWrapper';
import { PetFigureDataParser } from './PetFigureDataParser';

export class PetData
{
    private _id: number;
    private _name: string;
    private _figureData: PetFigureDataParser;
    private _level: number;

    constructor(wrapper: IMessageDataWrapper)
    {
        if(!wrapper) throw new Error('invalid_wrapper');

        this._id            = wrapper.readInt();
        this._name          = wrapper.readString();
        this._figureData    = new PetFigureDataParser(wrapper);
        this._level         = wrapper.readInt();
    }

    public get id(): number
    {
        return this._id;
    }

    public get name(): string
    {
        return this._name;
    }

    public get typeId(): number
    {
        return this._figureData.typeId;
    }

    public get paletteId(): number
    {
        return this._figureData.paletteId;
    }

    public get color(): string
    {
        return this._figureData.color;
    }

    public get _Str_3343(): number
    {
        return this._figureData.breedId;
    }

    public get _Str_13619(): number
    {
        return this._figureData.custompartCount;
    }

    public get _Str_4217(): string
    {
        return this._figureData.figuredata;
    }

    public get figureData():PetFigureDataParser
    {
        return this._figureData;
    }

    public get level(): number
    {
        return this._level;
    }
}