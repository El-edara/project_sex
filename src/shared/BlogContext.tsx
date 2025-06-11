/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";
import { Blog } from "../types";

interface BlogContextType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  updateBlog: (blog: Blog) => void;
  deleteBlog: (id: number) => void;
}
// Create the context with a default undefined value
const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Create the BlogProvider component
const BlogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  // Function to add a new blog
  const addBlog = (blog: Blog) => {
    setBlogs([...blogs, blog]);
  };

  // Function to update an existing blog
  const updateBlog = (updatedBlog: Blog) => {
    setBlogs(
      blogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
  };

  // Function to delete a blog by ID
  const deleteBlog = (id: number) => {
    blogs.filter((blog) => blog.id !== id);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

// Custom hook to use the BlogContext
const useBlogContext = (): BlogContextType => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogContext must be used within a BlogProvider");
  }
  return context;
};

export { BlogProvider, useBlogContext };
