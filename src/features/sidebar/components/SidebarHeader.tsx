import { PiBooksFill } from 'react-icons/pi'

export function SidebarHeader() {
  return (
    <div className="flex items-center justify-start gap-2">
      <PiBooksFill className="size-10" />
      <div className="overflow-hidden font-medium">Through Our Eyes</div>
    </div>
  )
}
