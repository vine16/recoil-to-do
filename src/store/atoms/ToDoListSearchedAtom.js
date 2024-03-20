import { selector } from "recoil";
import searchInputState from "./SearchInputAtom";
import toDosState from "./ToDo";
const toDoListSearchedState = selector({
  key: "toDoListSearchedState",
  get: ({ get }) => {
    const searchInput = get(searchInputState);
    const list = get(toDosState);
    console.log(list + "🔥");
    return list.filter(
      (item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.description.toLowerCase().includes(searchInput.toLowerCase())
    );
  },
});

export default toDoListSearchedState;
