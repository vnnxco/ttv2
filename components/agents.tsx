"use client"

import * as React from "react"
import { 
  PlusIcon,
  BotIcon,
  SettingsIcon,
  PlayIcon,
  PauseIcon,
  MoreVerticalIcon,
  SearchIcon,
  FilterIcon
} from "lucide-react"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const agents = [
  {
    id: 1,
    name: "Document Analyzer",
    description: "Analyzes and extracts insights from documents and reports",
    status: "active",
    type: "Analysis",
    lastUsed: "2 hours ago",
    avatar: "📄",
    bgColor: "bg-blue-500"
  },
  {
    id: 2,
    name: "Content Writer",
    description: "Creates high-quality content for various purposes",
    status: "active",
    type: "Content",
    lastUsed: "1 day ago",
    avatar: "✍️",
    bgColor: "bg-green-500"
  },
  {
    id: 3,
    name: "Code Reviewer",
    description: "Reviews code for best practices and potential issues",
    status: "paused",
    type: "Development",
    lastUsed: "3 days ago",
    avatar: "🔍",
    bgColor: "bg-purple-500"
  },
  {
    id: 4,
    name: "Data Processor",
    description: "Processes and transforms large datasets efficiently",
    status: "active",
    type: "Data",
    lastUsed: "5 hours ago",
    avatar: "📊",
    bgColor: "bg-orange-500"
  },
  {
    id: 5,
    name: "Research Assistant",
    description: "Conducts research and compiles comprehensive reports",
    status: "inactive",
    type: "Research",
    lastUsed: "1 week ago",
    avatar: "🔬",
    bgColor: "bg-red-500"
  },
  {
    id: 6,
    name: "Translation Bot",
    description: "Translates content between multiple languages accurately",
    status: "active",
    type: "Language",
    lastUsed: "30 minutes ago",
    avatar: "🌐",
    bgColor: "bg-cyan-500"
  }
]

const agentTypes = ["All", "Analysis", "Content", "Development", "Data", "Research", "Language"]

export function Agents() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedType, setSelectedType] = React.useState("All")

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === "All" || agent.type === selectedType
    return matchesSearch && matchesType
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "paused":
        return "bg-yellow-500"
      case "inactive":
        return "bg-gray-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Active"
      case "paused":
        return "Paused"
      case "inactive":
        return "Inactive"
      default:
        return "Unknown"
    }
  }

  return (
    <div className="flex flex-col h-full w-full max-w-full overflow-hidden">
      {/* Header Section */}
      <div className="flex-shrink-0 px-4 sm:px-6 lg:px-16 xl:px-24 py-6 border-b border-gray-700">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-medium text-white mb-2">
              AI Agents
            </h1>
            <p className="text-gray-400">
              Manage and monitor your AI agents
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
            >
              <SettingsIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-blue-600 border-blue-500 text-white hover:bg-blue-700 hover:border-blue-600"
            >
              <PlusIcon className="h-4 w-4 mr-2" />
              Create Agent
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search agents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-sidebar border-sidebar-border text-white placeholder:text-gray-400"
            />
          </div>
          <div className="flex items-center gap-2">
            <FilterIcon className="h-4 w-4 text-gray-400" />
            <div className="flex gap-2 overflow-x-auto">
              {agentTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                  className={`whitespace-nowrap ${
                    selectedType === type
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "text-gray-400 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="flex-1 overflow-y-auto min-h-0 px-4 sm:px-6 lg:px-16 xl:px-24 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <Card
              key={agent.id}
              className="bg-sidebar border-sidebar-border hover:bg-sidebar-accent transition-colors cursor-pointer p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`${agent.bgColor} w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0`}>
                    {agent.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sidebar-foreground font-semibold mb-1 truncate">
                      {agent.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(agent.status)}`} />
                      <span className="text-xs text-sidebar-foreground/70">
                        {getStatusText(agent.status)}
                      </span>
                    </div>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-sidebar-foreground/70 hover:text-sidebar-foreground"
                    >
                      <MoreVerticalIcon className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <PlayIcon className="h-4 w-4 mr-2" />
                      Start
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <PauseIcon className="h-4 w-4 mr-2" />
                      Pause
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <SettingsIcon className="h-4 w-4 mr-2" />
                      Configure
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <p className="text-sidebar-foreground/70 text-sm mb-4 line-clamp-2">
                {agent.description}
              </p>

              <div className="flex items-center justify-between">
                <Badge
                  variant="outline"
                  className="text-xs text-sidebar-foreground/70 border-sidebar-border"
                >
                  {agent.type}
                </Badge>
                <span className="text-xs text-sidebar-foreground/50">
                  {agent.lastUsed}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {filteredAgents.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12">
            <BotIcon className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">No agents found</h3>
            <p className="text-gray-400 text-center max-w-md">
              {searchQuery || selectedType !== "All"
                ? "Try adjusting your search or filter criteria"
                : "Create your first AI agent to get started"}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}