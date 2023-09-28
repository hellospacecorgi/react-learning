import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

function TodoSearch() {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => {
    return state.todoTasks.searchTerm;
  });

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="container mb-5">
      <div className="row justify-content-end align-items-center">
        <div className="col-1">
          <label className="label">Search</label>
        </div>
        <div className="col-3">
          <input
            className="form-control"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
      </div>
    </div>
  );
}

export default TodoSearch;
