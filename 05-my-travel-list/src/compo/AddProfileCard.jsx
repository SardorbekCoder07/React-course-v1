import { PlusCircle } from "lucide-react";


export default function AddProfileCard() {
  return (
    <div className="add-card">
      <div className="add-icon">
        <PlusCircle size={32} />
      </div>
      <h3>Add New Member</h3>
      <p>Invite someone to join your team</p>
    </div>
  );
}
