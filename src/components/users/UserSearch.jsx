import React, { useContext, useState } from "react";
import { AlertContext } from "../../context/alert/AlertContext";
import GithubContext from "../../context/github/GithubContext";

function UserSearch() {
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert("enter something", 'error');
    } else {
      searchUsers(text)
      setText("");
    }
  };
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
        <div>
          <button onClick={clearUsers} className="btn btn-ghost btn-lg">Clear</button>
        </div>
      
    </div>
  );
}

export default UserSearch;
