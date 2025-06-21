import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar as CalendarIcon, Plus, ChevronLeft, ChevronRight } from "lucide-react"

interface Event {
  id: string
  title: string
  time: string
  type: "meeting" | "deadline" | "event" | "reminder"
  description?: string
}

const sampleEvents: Record<string, Event[]> = {
  "2024-06-15": [
    { id: "1", title: "Team Meeting", time: "09:00", type: "meeting", description: "Weekly standup" },
    { id: "2", title: "Project Deadline", time: "17:00", type: "deadline", description: "Submit final design" }
  ],
  "2024-06-18": [
    { id: "3", title: "Client Presentation", time: "14:00", type: "meeting", description: "Q2 Review" }
  ],
  "2024-06-20": [
    { id: "4", title: "Code Review", time: "10:30", type: "event", description: "Feature branch review" },
    { id: "5", title: "Documentation Update", time: "15:00", type: "reminder", description: "Update API docs" }
  ]
}

const eventTypeColors = {
  meeting: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  deadline: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300", 
  event: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  reminder: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    
    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }
    
    return days
  }

  const formatDateKey = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const days = getDaysInMonth(currentDate)
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const selectedEvents = selectedDate ? sampleEvents[selectedDate] || [] : []

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Calendar</h1>
          <p className="text-muted-foreground mt-1">
            Manage your schedule and upcoming events.
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Event
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  {monthNames[month]} {year}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => navigateMonth('prev')}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => navigateMonth('next')}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {days.map((day, index) => {
                  if (day === null) {
                    return <div key={index} className="p-2 h-24" />
                  }
                  
                  const dateKey = formatDateKey(year, month, day)
                  const hasEvents = sampleEvents[dateKey]?.length > 0
                  const isSelected = selectedDate === dateKey
                  
                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(dateKey)}
                      className={`p-2 h-24 border border-border rounded-lg text-left hover:bg-accent hover:text-accent-foreground transition-colors ${
                        isSelected ? 'bg-accent text-accent-foreground' : ''
                      }`}
                    >
                      <div className="font-medium text-sm">{day}</div>
                      {hasEvents && (
                        <div className="mt-1 space-y-1">
                          {sampleEvents[dateKey].slice(0, 2).map(event => (
                            <div key={event.id} className="text-xs p-1 bg-primary/10 text-primary rounded truncate">
                              {event.title}
                            </div>
                          ))}
                          {sampleEvents[dateKey].length > 2 && (
                            <div className="text-xs text-muted-foreground">
                              +{sampleEvents[dateKey].length - 2} more
                            </div>
                          )}
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>
                {selectedDate ? `Events for ${selectedDate}` : 'Select a date'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedEvents.length > 0 ? (
                <div className="space-y-4">
                  {selectedEvents.map(event => (
                    <div key={event.id} className="p-3 border border-border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium">{event.title}</h4>
                        <Badge variant="secondary" className={eventTypeColors[event.type]}>
                          {event.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{event.time}</p>
                      {event.description && (
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : selectedDate ? (
                <p className="text-muted-foreground text-center py-8">
                  No events scheduled for this date.
                </p>
              ) : (
                <p className="text-muted-foreground text-center py-8">
                  Click on a date to view events.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}