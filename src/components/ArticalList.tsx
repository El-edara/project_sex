import { useBlogContext } from "../shared/BlogContext";
import { Blog } from "../types";
import ArticalCard from "./ArticalCard";
interface ArticalListProps {
  onEdit: (blog: Blog) => void;
}
const ArticalList: React.FC<ArticalListProps> = ({ onEdit }) => {
  const { blogs, deleteBlog } = useBlogContext();
  return (
    <div className="ml-[5rem]">
      {blogs.map((blog: Blog) => (
        <ArticalCard
          key={blog.id}
          article={blog}
          onDelete={() => deleteBlog(blog.id)}
          onEdit={() => onEdit(blog)}
        />
      ))}
    </div>
  );
};
export default ArticalList;
