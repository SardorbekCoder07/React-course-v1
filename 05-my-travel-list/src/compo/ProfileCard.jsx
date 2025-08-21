import { UserPlus, MessageCircle, Star } from "lucide-react";


export default function ProfileCard({
  name,
  role,
  status,
  avatar,
  tags = [],
  isVerified,
  followers,
}) {
  return (
    <div className="profile-card">
      {/* Status */}
      <div className={`status-dot ${status}`}></div>

      {/* Verified */}
      {isVerified && (
        <div className="verified-badge">
          <Star size={14} color="white" fill="white" />
        </div>
      )}

      {/* Avatar */}
      <div className="avatar">
        <img src={avatar || "/placeholder.svg"} alt={name} />
      </div>

      {/* Info */}
      <div className="info">
        <h3>{name}</h3>
        <p>{role}</p>
        {followers && <span>{followers.toLocaleString()} followers</span>}
      </div>

      {/* Tags */}
      <div className="tags">
        {tags.map((tag, i) => (
          <span key={i} className={tag === "Premium" ? "premium" : ""}>
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="actions">
        <button className="blue">
          <UserPlus size={16} />
        </button>
        <button>
          <MessageCircle size={16} />
        </button>
      </div>
    </div>
  );
}
