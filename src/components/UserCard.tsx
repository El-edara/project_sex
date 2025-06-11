import { FaUserCircle } from "react-icons/fa";

interface Person {
  name: string;
  following: boolean;
}

interface UserCardProps {
  index: number;
  person: Person;
}

const UserCard = ({ person }: UserCardProps) => {
  return (
    <div className="flex justify-between items-center">
      <section className="flex items-center">
        <FaUserCircle className="mr-3 text-3xl text-gray-500" />
        <span>{person.name}</span>
      </section>
      <button
        className={`px-4 py-1 text-sm rounded-full ${
          person.following ? "bg-black text-white" : "bg-gray-200 text-gray-700"
        }`}
      >
        {person.following ? "Following" : "Follow"}
      </button>
    </div>
  );
};
export default UserCard;
