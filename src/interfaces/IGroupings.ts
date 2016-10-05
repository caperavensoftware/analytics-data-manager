/*
    [grouping o]=> [grouping o]=> [grouping]
 */

interface IGrouping {
    field: string;
    display: string;
    parent?: IGrouping;
}

interface IGroupings {
    groupings: Array<IGrouping>;

    add(item: IGrouping);
    insert(item: IGrouping, index: number);
    remove(item: IGrouping);
    removeAt(index: number);
    move(fromIndex: number, toIndex: number);
}