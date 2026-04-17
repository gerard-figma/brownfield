export function InputField({ labelText, id, value, onChange, placeholder }) {
  return (
    <div style={{ marginBottom: 17 }}>
      <label
        htmlFor={id}
        style={{ display: 'block', marginBottom: 5, fontSize: 14, fontWeight: 600, color: '#374151' }}
      >
        {labelText}
      </label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded border border-[#D1D5DB] px-3 py-2 outline-none focus:ring-2 focus:ring-[#3B82F6]"
        style={{ fontSize: 14, color: '#111827' }}
      />
    </div>
  )
}
