import { BiSearch, BiSort } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { MdAdd, MdSearch } from "react-icons/md";

function SearchSortAdd({
  searchQuery,
  setSearchQuery,
  showPop,
  setShowPop,
  sortBy,
  setSortBy,
}) {
  return (
    <>
      <section className="mx-3 mb-5 rounded-lg border-l-4 border-[#968cc4] bg-white p-5 shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="relative flex items-center">
          <div className="absolute left-3 text-[#968cc4]">
            <BiSearch />
          </div>
          <input
            type="text"
            placeholder="Search tasks by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-[#968cc4]/30 bg-[#f8f7fc] py-3 pr-4 pl-10 text-sm text-[#5e5488] transition-all outline-none focus:border-[#7a6faa] focus:bg-white focus:ring-2 focus:ring-[#7a6faa]/50"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 text-[#968cc4] transition-colors hover:text-[#5e5488]"
            >
              <MdSearch />
            </button>
          )}
        </div>
      </section>

      <section className="mx-3 mb-6 rounded-lg border-l-4 border-[#968cc4] bg-white p-5 shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <button
            onClick={() => setShowPop(!showPop)}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#968cc4] to-[#7a6faa] px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:from-[#7a6faa] hover:to-[#5e5488] hover:shadow-lg focus:ring-2 focus:ring-[#7a6faa] focus:ring-offset-2 focus:outline-none active:from-[#5e5488] active:to-[#5e5488] sm:w-auto"
          >
            <MdAdd className="h-5 w-5" />
            Create New Task
          </button>

          <div className="relative w-full flex-1 sm:w-auto">
            <div className="absolute top-1/2 left-3 -translate-y-1/2 text-[#968cc4]">
              <BiSort className="h-5 w-5" />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full cursor-pointer appearance-none rounded-lg border border-[#968cc4]/30 bg-[#f8f7fc] py-3 pr-10 pl-10 text-sm text-[#5e5488] transition-all outline-none focus:border-[#7a6faa] focus:bg-white focus:ring-2 focus:ring-[#7a6faa]/50"
            >
              <option value="title">Sort by Title</option>
              <option value="date">Sort by Date</option>
            </select>
            <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[#968cc4]">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchSortAdd;
