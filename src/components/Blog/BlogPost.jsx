

const BlogPost = ({ image, date, title, description, categories }) => {
  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden mb-6">
      {/* Blog Image */}
      <div className="relative w-1/3">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-2 left-2 bg-black text-white text-xs px-3 py-1">
          {date}
        </span>
      </div>

      {/* Blog Content */}
      <div className="w-2/3 p-6">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="text-sm text-gray-500 mt-2">{categories.join(" • ")}</p>
        <button className="mt-4 border border-black px-4 py-2 text-sm">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
