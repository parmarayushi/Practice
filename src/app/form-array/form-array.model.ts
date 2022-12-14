export class Tasks {
    public tasks: string;

    constructor(
        tasks: string,
    ) {
        this.tasks = tasks
    }
}

export class TaskData {
    name: string;
    city: string;
    tasks: Tasks[];

    constructor(
        name: string,
        city: string,
        tasks: Tasks[],
    ) {
        this.name = name,
        this.city = city,
        this.tasks = tasks
    }
}
