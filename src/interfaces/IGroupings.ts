/*
    [grouping o]=> [grouping o]=> [grouping]
 */

interface IOrderGroupItem {
    field: string;
    display: string;
    parent?: IOrderGroupItem;
}

interface IOrderedGroup {
    groupings: Array<IOrderGroupItem>;

    add(item: IOrderGroupItem);
    insert(item: IOrderGroupItem, index: number);
    remove(item: IOrderGroupItem);
    removeAt(index: number);
    move(fromIndex: number, toIndex: number);
    clear();
    validateFromModel(model: any);
}