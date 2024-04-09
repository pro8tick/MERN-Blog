import { Link } from "react-router-dom";
import CallToAction from "../component/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../component/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([]);
  const boxStyle =
    "bg-white  group relative rounded-xl p-2 flex flex-col items-center justify-center  bg-white dark:bg-[#2D4D6C] shadow-md shadow-blue-700/30 dark:shadow-gray-200/40 hover:shadow-cyan-500/50  overflow-hidden rounded-lg transition-all";

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts?limit=7");
      const data = await res.json();
      setPosts(data.posts);
    };
    const fetchCategory = async () => {
      const res = await fetch("/api/category");
      const data = await res.json();
      setCategory(data);
    };
    fetchPosts();
    fetchCategory();
  }, []);

  return (
    <div className="mx-20">
      <div className="flex gap-5 bg-gray-100 overflow-hidden">
        {category.map((cat) => (
          <Link
            to={`/search?category=${cat.value}`}
            className="p-2 text-blue-950"
            id={cat.value}
          >
            {cat.label}
          </Link>
        ))}
      </div>
      <div className="grid md:grid-cols-4 auto-rows-[450px] sm:auto-rows-[250px] gap-4 my-10">
        {/* <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link> */}
        {posts.map((post, i) => (
          <div
            key={i}
            className={`${boxStyle} ${
              i == 0 || i === 4 || i === 5 || i === 6 ? "md:col-span-2" : ""
            } ${i === 2 ? "md:row-span-2" : ""}`}
          >
            <Link
              to={`/post/${post.slug}`}
              className={`flex flex-col ${
                i == 0 || i === 4 || i === 5 || i === 6 ? "md:flex-row" : ""
              }`}
            >
              {i !== 1 && i !== 3 && (
                <img
                  src={post.image} // Assuming post.image contains the image URL
                  alt={post.title}
                  className={`w-full h-48 object-cover filter hue-rotate-90 ${
                    i === 0 || i === 4 || i === 5 ? "md:w-1/2" : ""
                  } ${i === 1 || i === 3 ? "hidden md:block" : ""}`}
                />
              )}

              {/* Content */}
              <div className="flex flex-col justify-between flex-grow p-4">
                <h2 className="text-xl text-black dark:text-white font-semibold line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-[#21875B] dark:text-gra">
                  {post.author}
                </p>
                <p className="text-sm text-gray-700 dark:text-green-100 line-clamp-4">
                  {post.content}
                </p>
              </div>
              <Link
                to={`/post/${post.slug}`}
                className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
              >
                Read article
              </Link>
            </Link>
          </div>
        ))}
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>

      {posts && posts.length > 0 && (
        <div className="flex flex-col gap-6 justify-center items-center my-5">
          <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
          <Link
            to={"/search"}
            className="text-lg text-teal-500 hover:underline text-center"
          >
            View all posts
          </Link>
        </div>
      )}
    </div>
  );
}
