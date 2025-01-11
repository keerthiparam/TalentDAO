'use client'

import { useState } from 'react'
import { MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Message = {
  id: string;
  sender: string;
  content: string;
  read: boolean;
}

export function MessageDropdown() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'Alice', content: 'Hey, how\'s the project going?', read: false },
    { id: '2', sender: 'Bob', content: 'Can we schedule a call?', read: false },
    { id: '3', sender: 'Charlie', content: 'I\'ve sent the files you requested.', read: true },
  ])

  const unreadCount = messages.filter(m => !m.read).length

  const markAsRead = (id: string) => {
    setMessages(messages.map(m => 
      m.id === id ? { ...m, read: true } : m
    ))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <MessageSquare className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        {messages.map((message) => (
          <DropdownMenuItem 
            key={message.id} 
            onClick={() => markAsRead(message.id)}
            className={message.read ? 'opacity-50' : ''}
          >
            <div>
              <div className="font-bold">{message.sender}</div>
              <div className="text-sm truncate">{message.content}</div>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

