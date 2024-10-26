"use client";
import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { Send, X, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

type Message = {
  id: number
  text: string
  sender: 'user' | 'bot'
}

export default function ChatbotModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm your financial assistant. How can I help you today?", sender: 'bot' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  const handleSend = async () => {
    if (input.trim() && !isLoading) {
      const userMessage: Message = { id: messages.length + 1, text: input, sender: 'user' }
      setMessages(prevMessages => [...prevMessages, userMessage])
      setInput('')
      setIsLoading(true)

      try {
        const response = await axios.post('http://localhost:5000/financial-assistant', {
          question: input,
          context: "General financial inquiry",
          task: "Provide financial advice or information",
        }, {
          headers: {
            'Content-Type': 'application/json',
          }
        });

        const botMessage: Message = { id: messages.length + 2, text: response.data.answer, sender: 'bot' }
        setMessages(prevMessages => [...prevMessages, botMessage])
      } catch (error) {
        console.error('Error:', error)
        let errorText = "Sorry, I couldn't process your request. Please try again.";
        if (axios.isAxiosError(error)) {
          errorText = error.response?.data?.error || errorText;
        }
        const errorMessage: Message = { 
          id: messages.length + 2, 
          text: errorText, 
          sender: 'bot' 
        }
        setMessages(prevMessages => [...prevMessages, errorMessage])
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="fixed bottom-4 right-4 rounded-full p-4">
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open chat</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] h-[80vh] flex flex-col p-0">
        <DialogHeader className="p-4 border-b flex flex-row items-center justify-between">
          <DialogTitle>Financial Assistant</DialogTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 rounded-full"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="border-t p-4">
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1"
              disabled={isLoading}
            />
            <Button onClick={handleSend} disabled={isLoading}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}