import React from "react";

type ListProp = {
    children: React.ReactNode;
    isBusy?: boolean;
};

const List = ({
    children = null,
    isBusy = false
}: ListProp): React.ReactElement<ListProp> => (
    <div>
        {children}
        {isBusy ? <div>loading</div> : ""}
    </div>
);

export default List;