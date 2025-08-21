import { useState } from "react";
import { Bell, Search } from "lucide-react";
import ProfileCard from "./ProfileCard";
import AddProfileCard from "./AddProfileCard";
import FilterButtons from "./FilterButtons";


const profiles = [
  {
    name: "Alex Thompson",
    role: "UI/UX Designer",
    status: "online",
    avatar: "/memoji-alex.png",
    tags: ["Premium"],
    isVerified: true,
    followers: 1240,
  },
  {
    name: "Michael Chen",
    role: "Frontend Developer",
    status: "online",
    avatar: "/memoji-michael.png",
    tags: ["Guest"],
    isVerified: false,
    followers: 856,
  },
  {
    name: "Emily Wilson",
    role: "Product Manager",
    status: "away",
    avatar: "/memoji-emily.png",
    tags: ["Premium"],
    isVerified: true,
    followers: 2100,
  },
  {
    name: "David Rodriguez",
    role: "Marketing Specialist",
    status: "offline",
    avatar: "/memoji-david.png",
    tags: ["Guest"],
    isVerified: false,
    followers: 432,
  },
];

export default function ProfileCardGrid() {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const filteredProfiles = selectedFilter
    ? profiles.filter((profile) => profile.tags?.includes(selectedFilter))
    : profiles;

  return (
    <div className="grid-container">
      <div className="grid-header">
        <div>
          <h1>Team Members</h1>
          <p>Connect with your colleagues</p>
        </div>
        <div className="header-actions">
          <button className="icon-btn">
            <Bell />
          </button>
          <button className="icon-btn">
            <Search />
          </button>
        </div>
      </div>

      {/* Filter buttons */}
      <FilterButtons
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />

      {/* Cards */}
      <div className="cards-grid">
        {filteredProfiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
        <AddProfileCard />
      </div>
    </div>
  );
}
