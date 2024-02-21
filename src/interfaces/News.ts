export interface News {
    record:   Record;
    metadata: Metadata;
}

export interface Metadata {
    id:        string;
    private:   boolean;
    createdAt: Date;
    name:      string;
}

export interface Record {
    notes: Note[];
}

export interface Note {
    id:      string;
    date:    DateEnum;
    title:   string;
    autor:   Autor;
    section: Section;
    image:   string;
    type:    Type;
}

export enum Autor {
    JeanPaul = "Jean Paul",
    Jp = "Jp",
}

export enum DateEnum {
    The19102022135010 = "19-10-2022 13:50:10",
}

export enum Section {
    News = "news",
    Note = "note",
}

export enum Type {
    SectionNote = "section_note",
    SliderGrid = "slider_grid",
    SliderNote = "slider_note",
}
