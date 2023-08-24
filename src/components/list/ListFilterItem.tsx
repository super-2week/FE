import React from "react";
import { useDispatch } from "react-redux";
import { setsortBy } from "../../store/slice/parameterSilce";

interface ListFilterItemProps {
  item: { id: string; label: string };
  classActive: (sortBy: string) => string;
  itemParameter: { sortBy: string };
}

const ListFilterItem: React.FC<ListFilterItemProps> = ({
  item,
  classActive,
  itemParameter,
}) => {
  const dispatch = useDispatch();

  const clickFilter = (e: React.MouseEvent<HTMLLIElement>) => {
    // console.log("필터 옵션 :", itemParameter.sortBy);
    dispatch(setsortBy(e.currentTarget.id));
  };
  return (
    <li
      className={classActive(`${item.id}`)}
      id={`${item.id}`}
      onClick={clickFilter}
    >
      {itemParameter.sortBy === `${item.id}` && <>✔</>} {item.label}
    </li>
  );
};

export default ListFilterItem;
