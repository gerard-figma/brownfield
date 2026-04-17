export default function BigButton({ children, variant = 'primary', onClick, type = 'button', extraStyle }) {
  const base = {
    padding: '8px 16px',
    borderRadius: 6,
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
    border: 'none',
    fontFamily: 'system-ui, sans-serif',
    marginTop: 0,
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
    <button
      type={type}
      onClick={onClick}
      style={{ ...base, ...colors, ...extraStyle }}
    >
      {children}
    </button>
  )
}
