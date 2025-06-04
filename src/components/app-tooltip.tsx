import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface AppTooltipProps {
  children: React.ReactNode;
    title: string;
}

export const AppTooltip = ({children, title}:AppTooltipProps ) => {
  return (
     <Tooltip>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent>
        {title}
      </TooltipContent>
    </Tooltip>
  )
}
