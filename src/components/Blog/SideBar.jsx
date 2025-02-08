const Sidebar = () => {
    return (
      <div className="w-full bg-white shadow-md p-6 rounded-lg">
        {/* Categories */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">CATEGORIES</h3>
          <ul className="text-gray-600 space-y-2">
            <li className="cursor-pointer hover:text-black">Beauty</li>
            <li className="cursor-pointer hover:text-black">Cosmetic</li>
            <li className="cursor-pointer hover:text-black">Fashion</li>
          </ul>
        </div>
  
        {/* Search */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">SEARCH</h3>
          <div className="border rounded-md flex items-center overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 outline-none"
            />
            <button className="px-4 py-2 bg-gray-200">🔍</button>
          </div>
        </div>
  
        {/* Latest Posts */}
        <div>
          <h3 className="font-semibold text-lg mb-3">LATEST POSTS</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-300 rounded-md"></div>
              <div>
                <p className="text-sm font-medium">New Trends in 2020</p>
                <p className="text-xs text-gray-500">October 20, 2020</p>
              </div>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-300 rounded-md"></div>
              <div>
                <p className="text-sm font-medium">Video Post</p>
                <p className="text-xs text-gray-500">October 20, 2020</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  