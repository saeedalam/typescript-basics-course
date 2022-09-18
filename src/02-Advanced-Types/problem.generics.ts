export enum TaskType {
    feature = "feature",
    bug = "bug"
}

type Task<T = TaskType> = {
    name: string;
    type: T;
};

const whatever: Task = { name: "Single Sign On", type: TaskType.feature };
whatever.type = TaskType.bug;

type FeatureTask = Task<TaskType.feature>;

const feature: FeatureTask = { name: "Single Sign On", type: TaskType.feature };
feature.type = TaskType.bug;

const invalid: FeatureTask = { name: "Single Sign On", type: TaskType.bug };
