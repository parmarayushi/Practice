export class FileUpload {
    id: number;
    name: string;
    size: number;
    content: string;
    type: string;
    constructor(
        id: number,
        name: string,
        size: number,
        content: string,
        type: string
    ) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.content = content;
        this.type = type;
    }
}