/**
 * Boolean toggle used on Settings.
 *
 * Training note: props are named `isOn` and `whenToggle`. Most React codebases
 * (and HTML inputs) use `checked` and `onChange` — renaming would match common
 * conventions and docs.
 */
export default function ToggleSwitch(props) {
  const on = props.isOn
  const toggle = props.whenToggle

  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => toggle(!on)}
      className="relative h-[26px] w-[46px] shrink-0 cursor-pointer rounded-full border-0 p-0.5"
      style={{ backgroundColor: on ? '#10B981' : '#9CA3AF' }}
    >
      <span
        className="block h-[22px] w-[22px] rounded-full bg-white transition-[margin] duration-150"
        style={{ marginLeft: on ? 20 : 0 }}
      />
    </button>
  )
}
