export interface ParentData {
    parentField1: string;
    parentField2: string;
    parentHiddenField1: string;
    children: ChildData[];
};

export interface ChildData {
    id: number;
    childField1: string;
    childField2: string;
    childHiddenField1: string;
};
