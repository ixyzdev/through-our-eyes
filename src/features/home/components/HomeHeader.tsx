import { Button } from '@/components/ui/button'
import type { LucideIcon } from 'lucide-react'

interface HomeHeaderProps {
  title: string
  description: string
  icon: LucideIcon
}

export const HomeHeader = ({
  title,
  description,
  icon: Icon
}: HomeHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-2xl">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
      <Button variant="outline" size="sm">
        Ver todo
      </Button>
    </div>
  )
}
