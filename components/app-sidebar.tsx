"use client"

import * as React from "react"
import {
  ArrowUpCircleIcon,
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  HomeIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
  BotIcon,
} from "lucide-react"

import { NavDocuments } from '@/components/nav-documents'
import { NavMain } from '@/components/nav-main'
import { NavSecondary } from '@/components/nav-secondary'
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  currentView?: 'home' | 'chat' | 'agents'
  onNavigate?: (view: 'home' | 'chat' | 'agents') => void
  onNavigateToChat?: () => void
}

export function AppSidebar({ currentView = 'home', onNavigate, onNavigateToChat, ...props }: AppSidebarProps) {
  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Home",
        url: "#",
        icon: HomeIcon,
        isActive: currentView === 'home',
        onClick: () => onNavigate?.('home'),
      },
      {
        title: "Projects",
        url: "#",
        icon: ListIcon,
        isActive: false,
      },
      {
        title: "Agents",
        url: "#",
        icon: BotIcon,
        isActive: currentView === 'agents',
        onClick: () => onNavigate?.('agents'),
      },
      {
        title: "Projects",
        url: "#",
        icon: FolderIcon,
        isActive: false,
      },
      {
        title: "Team",
        url: "#",
        icon: UsersIcon,
        isActive: false,
      },
    ],
    navClouds: [
      {
        title: "Capture",
        icon: CameraIcon,
        isActive: true,
        url: "#",
        items: [
          {
            title: "Active Proposals",
            url: "#",
          },
          {
            title: "Archived",
            url: "#",
          },
        ],
      },
      {
        title: "Proposal",
        icon: FileTextIcon,
        url: "#",
        items: [
          {
            title: "Active Proposals",
            url: "#",
          },
          {
            title: "Archived",
            url: "#",
          },
        ],
      },
      {
        title: "Prompts",
        icon: FileCodeIcon,
        url: "#",
        items: [
          {
            title: "Active Proposals",
            url: "#",
          },
          {
            title: "Archived",
            url: "#",
          },
        ],
      },
    ],
    navSecondary: [
      {
        title: "Settings",
        url: "#",
        icon: SettingsIcon,
      },
      {
        title: "Get Help",
        url: "#",
        icon: HelpCircleIcon,
      },
      {
        title: "Search",
        url: "#",
        icon: SearchIcon,
      },
    ],
    documents: [
      {
        name: "Data Library",
        url: "#",
        icon: DatabaseIcon,
      },
      {
        name: "Reports",
        url: "#",
        icon: ClipboardListIcon,
      },
      {
        name: "Word Assistant",
        url: "#",
        icon: FileIcon,
      },
    ],
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} onNavigateToChat={onNavigateToChat} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}