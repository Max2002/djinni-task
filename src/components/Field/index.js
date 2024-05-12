import "./styles.css";

export default function Field({type, label, name, register, placeholder, maxLength, error}) {
  return (
    <div className="wrapperInput">
      {label && <label className="label" for={name}>{error ? `${label} *` : label}</label>}
      <div className="wrapperField">
        <input
              className={error && "errorState"}
              {...register}
              type={type}
              placeholder={placeholder}
              id={name}
              maxLength={maxLength}
              autoComplete="off"
            />
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
}