const topics = [
  "Technology",
  "Design Thinking",
  "Crypto",
  "NFT",
  "Personal Growth",
  "Reading",
];
const TopicsList = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-8">
      <h3 className="text-lg font-semibold mb-4">Topics for you</h3>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full text-sm text-gray-700 bg-gray-200 cursor-pointer hover:bg-gray-300"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};
export default TopicsList;
