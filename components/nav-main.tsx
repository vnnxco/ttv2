"use client"

import { MailIcon, PlusCircleIcon, type LucideIcon } from "lucide-react"

import { Button } from '@/components/ui/button'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    onClick?: () => void
  }[]
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="min-w-8 bg-white text-black duration-200 ease-linear hover:bg-white/90 hover:text-black active:bg-white/90 active:text-black"
            >
              <PlusCircleIcon />
              <span>Quick Create</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className={
                isMobile
                  ? "h-9 w-9 shrink-0 group-data-[collapsible=icon]:opacity-0 border-[hsl(240_3.7%_15.9%)] bg-transparent text-[hsl(240_4.8%_95.9%)] hover:bg-[hsl(240_3.7%_15.9%)] hover:text-[hsl(240_4.8%_95.9%)]"
                  : "h-9 w-9 shrink-0 group-data-[collapsible=icon]:opacity-0"
              }
              variant="outline"
              onClick={() => {
                // Find the chat navigation item and trigger its onClick
                const chatItem = items.find(item => item.title === 'Agents')
                if (chatItem?.onClick) {
                  chatItem.onClick()
                }
              }}
            >
              <MailIcon />
              <span className="sr-only">Inbox</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton 
                tooltip={item.title}
                isActive={item.isActive}
                onClick={item.onClick}
              >
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}