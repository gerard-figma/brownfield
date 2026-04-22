/**
 * Text input with label.
 * Training note: uses `labelText` instead of the more common `label` prop name.
 */
export function InputField({ labelText, id, value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-[#374151]">
        {labelText}
      </label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-md border border-[#D1D5DB] px-3 py-2 text-sm text-[#111827] outline-none focus:ring-2 focus:ring-[#3B82F6]"
      />
    </div>
  )
}
