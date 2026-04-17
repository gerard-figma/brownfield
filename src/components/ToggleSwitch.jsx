export default function ToggleSwitch(props) {
  const on = props.isOn
  const toggle = props.whenToggle

  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => toggle(!on)}
      style={{
        width: 46,
        height: 26,
        borderRadius: 999,
        border: 'none',
        cursor: 'pointer',
        backgroundColor: on ? '#10B981' : '#9CA3AF',
        position: 'relative',
        padding: 2,
        marginTop: 12,
      }}
    >
      <span
        style={{
          display: 'block',
          width: 22,
          height: 22,
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          marginLeft: on ? 20 : 0,
          transition: 'margin 0.15s',
        }}
      />
    </button>
  )
}
