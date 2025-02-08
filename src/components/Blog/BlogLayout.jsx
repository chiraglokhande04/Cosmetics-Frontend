import BlogPost from "./BlogPost";
import Sidebar from "./SideBar";

export default function BlogLayout() {
  return (
    <div className="flex gap-6 p-10 bg-gray-100">
      {/* Blog Section */}
      <div className="w-2/3">
        <BlogPost
          image="/blog1.jpg"
          date="OCTOBER 20, 2020"
          title="New Trends in 2020"
          description="As concerns about climate change continue to grow, the beauty industry is starting to take notice..."
          categories={["Cosmetic", "Fashion"]}
        />
        <BlogPost
          image="/blog2.jpg"
          date="OCTOBER 20, 2020"
          title="Video Post"
          description="The beauty industry has long been criticized for its environmental impact..."
          categories={["Beauty", "Sustainability"]}
        />
      </div>

      {/* Sidebar Section */}
      <div className="w-1/3">
        <Sidebar />
      </div>
    </div>
  );
}
