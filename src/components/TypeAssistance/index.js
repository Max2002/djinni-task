import "./styles.css";

export default function TypeAssistance({ icon, title, onClick, isActive }) {
  return (
    <div className="wrapperAssistance" onClick={onClick}>
      <div className={`icon ${isActive && 'activeIcon'}`}>
        {icon}
      </div>
      <div className={`titleAssistance ${isActive && 'activeType'}`}>{title}</div>
    </div>
  );
}