import { useRecoilState, useRecoilValue } from "recoil";
import titleState from "../store/atoms/TitleAtom";
import descriptionState from "../store/atoms/DescriptionAtom";
import toDosState from "../store/atoms/ToDo";
import searchInputState from "../store/atoms/SearchInputAtom";
import toDoListSearchedState from "../store/atoms/ToDoListSearchedAtom";

export default function ToDo() {
  const [title, setTitle] = useRecoilState(titleState);
  const [description, setDescription] = useRecoilState(descriptionState);
  const [toDos, setToDos] = useRecoilState(toDosState);
  const [search, setSearch] = useRecoilState(searchInputState);
  const searchedToDos = useRecoilValue(toDoListSearchedState);

  function handleButton() {
    const newTask = {
      title: title,
      description: description,
    };

    setToDos((toDos) => [...toDos, newTask]);
    setTitle("");
    setDescription("");
    // setToDos((toDos) => console.log(toDos));
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        value={title}
      />

      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Tasks"
      />

      <button onClick={handleButton}>Add Task</button>

      {search ? (
        <div>
          <div>Search results </div>
          {searchedToDos.map((ToDo) => {
            return <ToDoItem item={ToDo} />;
          })}
        </div>
      ) : (
        <div>
          {toDos.map((ToDo) => {
            return <ToDoItem item={ToDo} />;
          })}
        </div>
      )}
    </div>
  );
}

function ToDoItem({ item }) {
  return (
    <div key={item.id}>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
}
