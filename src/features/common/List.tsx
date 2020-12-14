import React from "react";

type ListProp<T, C> = {
    items: T[];
    createRow: (item: T) => C;
    status: string;
};

type ListType = <T, C>(props: ListProp<T, C>) => React.ReactElement<ListProp<T, C>>;

const List: ListType = (props) => (
    <div>
        {props.items.map((item) => props.createRow(item))}
        {props.status == 'loading' ? <div>{props.status}</div> : ""}
    </div>
);

export default List;