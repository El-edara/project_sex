import { IoMdAddCircle } from "react-icons/io";
import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import TopicsList from "./components/TopicsList";
import TrendsList from "./components/TrendsList";
import { BlogProvider } from "./shared/BlogContext";
import { useState } from "react";
import { Blog } from "./types";
import Model from "./components/Model";
import BlogForm from "./components/BlogForm";
import ArticalList from "./components/ArticalList";

const App = () => {
  const [isModelOpen, setModelOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | undefined>(undefined);

  const openModelForNewBlog = () => {
    setEditingBlog(undefined);
    setModelOpen(true);
  };

  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setModelOpen(true);
  };
  return (
    <div className="flex flex-col">
      <BlogProvider>
        <Navigation />
        <div className="flex justify-center mt-4">
          <section className="mx-auto p-6">
            <div>
              <button
                onClick={openModelForNewBlog}
                className="bg-black ml-[7rem] flex justify-center items-center text-white px-4 py-2 rounded-full mb-4 cursor-pointer "
              >
                Add New Blog <IoMdAddCircle className="ml-[.5rem]" />
              </button>
              {/* Article list */}
              <ArticalList onEdit={openModalForEdit} />
              {isModelOpen && (
                <Model onClose={() => setModelOpen(false)}>
                  <BlogForm
                    existingBlog={editingBlog}
                    onClose={() => setModelOpen(false)}
                  />
                </Model>
              )}
            </div>
          </section>
          <div className="w-[30%]">
            <PeopleToFollow />
            <TrendsList />
            <TopicsList />
          </div>
        </div>
      </BlogProvider>
    </div>
  );
};
export default App;
