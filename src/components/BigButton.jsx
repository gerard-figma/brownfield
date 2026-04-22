/**
 * Primary actions across the app.
 *
 * Training note: `extraStyle` lets any caller override padding/colors, which
 * quickly undoes a consistent button look. Variants also hard-code hex values
 * that are duplicated elsewhere (no single palette module).
 */
export default function BigButton({ children, variant = 'primary', onClick, type = 'button', extraStyle }) {
  const base = {
    padding: '8px 16px',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
    border: 'none',
    fontFamily: 'system-ui, sans-serif',
  }

  let colors = {}
  if (variant === 'primary') {
    colors = { backgroundColor: '#2563EB', color: '#FFFFFF' }
  } else if (variant === 'ghost') {
    colors = {
      backgroundColor: 'transparent',
      color: '#3B82F6',
      border: '1px solid #3B82F6',
    }
  } else if (variant === 'danger') {
    colors = { backgroundColor: '#EF4444', color: '#FFFFFF' }
  }

  return (
    <button type={type} onClick={onClick} style={{ ...base, ...colors, ...extraStyle }}>
      {children}
    </button>
  )
}
