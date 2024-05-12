import "./styles.css";

export default function Card({ icon, title, isActive, onClick }) {
  return (
    <div className={`card ${isActive && "activeCard"}`} onClick={onClick}>
      {icon}
      <div className="titleCard">{title}</div>
    </div>
  );
}