/*
    [grouping o]=> [grouping o]=> [grouping]


 */

interface IGrouping {
    field: string;
    display: string;
    parent: IGrouping;
}

interface IGroupings {
    groupings: Array<IGrouping>;

    add(item: IGrouping);
    insert(item: IGrouping, index: Number);
    remove(item: IGrouping);
    removeAt(index: Number);
    move(fromIndex: Number, toIndex: Number);
}