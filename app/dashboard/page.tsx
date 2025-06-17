"use client"

import { useState } from 'react'
import { AppSidebar } from '@/components/app-sidebar'
import { AiChat } from '@/components/ai-chat'
import { Homepage } from '@/components/homepage'
import { SiteHeader } from '@/components/site-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function Page() {
  const [currentView, setCurrentView] = useState<'home' | 'chat'>('home')

  const handleNavigateToChat = () => {
    setCurrentView('chat')
  }

  const handleNavigateToHome = () => {
    setCurrentView('home')
  }

  return (
    <SidebarProvider>
      <AppSidebar 
        variant="inset" 
        currentView={currentView}
        onNavigate={(view) => setCurrentView(view)}
      />
      <SidebarInset className="overflow-hidden">
        <SiteHeader />
        <div className="flex flex-1 flex-col min-h-0 overflow-hidden">
          {currentView === 'home' ? (
            <Homepage onNavigateToChat={handleNavigateToChat} />
          ) : (
            <AiChat />
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}