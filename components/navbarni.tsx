export default function Navbarni() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          {/* <a className="btn btn-ghost normal-case text-xl">Navbar Ni</a> */}
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div className="avatar online">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://imgs.search.brave.com/Imb2awpLnp3U4lLu7iK-mrdr5WBYoPX318kY1DYaDo8/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5LVm5jc3Bh/MmNKU0JxdjJJNnpq/WFV3SGFIYSZwaWQ9/QXBp" />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
