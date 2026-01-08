import { ArrowRight } from 'lucide-react'

import { type ReadingStat } from '@/lib/dashboard'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

interface HomeStatCardProps {
  stat: ReadingStat
}

export const HomeStateCard = ({ stat }: HomeStatCardProps) => {
  const trendColor =
    stat.trend === 'up'
      ? 'text-emerald-600'
      : stat.trend === 'down'
        ? 'text-red-500'
        : 'text-muted-foreground'

  return (
    <Card className="border-border/70 bg-card/80 p-4 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-sm">{stat.label}</p>
        <Badge
          variant="outline"
          className="bg-muted/40 flex items-center gap-2 text-[11px] tracking-wide uppercase"
        >
          {stat.trend === 'up'
            ? 'Mejorando'
            : stat.trend === 'down'
              ? 'Bajando'
              : 'Estable'}
          {stat.trend === 'up' ? (
            <ArrowRight className="h-3 w-3 rotate-90 text-emerald-600" />
          ) : stat.trend === 'down' ? (
            <ArrowRight className="h-3 w-3 -rotate-90 text-red-500" />
          ) : (
            <ArrowRight className="text-muted-foreground h-3 w-3" />
          )}
        </Badge>
      </div>
      <div className="mt-4 flex items-end justify-between">
        <p className="text-3xl font-semibold">{stat.value}</p>
        <span className={`text-xs font-semibold ${trendColor}`}>
          {stat.delta}
        </span>
      </div>
    </Card>
  )
}
