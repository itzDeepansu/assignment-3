import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, MoreHorizontal } from "lucide-react"

interface Task {
  id: string
  title: string
  description: string
  priority: "low" | "medium" | "high"
  assignee: string
  tags: string[]
}

interface Column {
  id: string
  title: string
  tasks: Task[]
  color: string
}

const initialColumns: Column[] = [
  {
    id: "todo",
    title: "To Do",
    color: "border-l-gray-500",
    tasks: [
      {
        id: "1",
        title: "Design System Update",
        description: "Update the design system with new components",
        priority: "high",
        assignee: "JD",
        tags: ["design", "frontend"]
      },
      {
        id: "2", 
        title: "API Documentation",
        description: "Complete the API documentation for v2.0",
        priority: "medium",
        assignee: "AS",
        tags: ["docs", "api"]
      }
    ]
  },
  {
    id: "inprogress",
    title: "In Progress", 
    color: "border-l-blue-500",
    tasks: [
      {
        id: "3",
        title: "User Authentication",
        description: "Implement OAuth2 authentication flow",
        priority: "high",
        assignee: "CB",
        tags: ["backend", "security"]
      }
    ]
  },
  {
    id: "review",
    title: "In Review",
    color: "border-l-yellow-500", 
    tasks: [
      {
        id: "4",
        title: "Mobile Responsive Design",
        description: "Make the dashboard mobile-friendly",
        priority: "medium",
        assignee: "AW",
        tags: ["frontend", "mobile"]
      }
    ]
  },
  {
    id: "done",
    title: "Done",
    color: "border-l-green-500",
    tasks: [
      {
        id: "5",
        title: "Database Migration",
        description: "Migrate user data to new schema",
        priority: "high", 
        assignee: "BJ",
        tags: ["backend", "database"]
      }
    ]
  }
]

const priorityColors = {
  low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
}

export default function Kanban() {
  const [columns, setColumns] = useState<Column[]>(initialColumns)
  const [draggedTask, setDraggedTask] = useState<Task | null>(null)
  const [draggedFrom, setDraggedFrom] = useState<string | null>(null)

  const handleDragStart = (task: Task, columnId: string) => {
    setDraggedTask(task)
    setDraggedFrom(columnId)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault()
    
    if (!draggedTask || !draggedFrom || draggedFrom === targetColumnId) {
      setDraggedTask(null)
      setDraggedFrom(null)
      return
    }

    setColumns(prev => prev.map(column => {
      if (column.id === draggedFrom) {
        return {
          ...column,
          tasks: column.tasks.filter(task => task.id !== draggedTask.id)
        }
      }
      if (column.id === targetColumnId) {
        return {
          ...column,
          tasks: [...column.tasks, draggedTask]
        }
      }
      return column
    }))

    setDraggedTask(null)
    setDraggedFrom(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Kanban Board</h1>
          <p className="text-muted-foreground mt-1">
            Organize and track your project tasks with drag-and-drop simplicity.
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Task
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {columns.map(column => (
          <div
            key={column.id}
            className="space-y-4"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column.id)}
          >
            <div className={`border-l-4 ${column.color} pl-4`}>
              <h3 className="font-semibold text-foreground">{column.title}</h3>
              <p className="text-sm text-muted-foreground">{column.tasks.length} tasks</p>
            </div>

            <div className="space-y-3">
              {column.tasks.map(task => (
                <Card
                  key={task.id}
                  draggable
                  onDragStart={() => handleDragStart(task, column.id)}
                  className="cursor-move hover:shadow-md transition-shadow"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-sm font-medium leading-none">
                        {task.title}
                      </CardTitle>
                      <Button variant="ghost" size="sm" className="h-auto p-1">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {task.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className={priorityColors[task.priority]}>
                        {task.priority}
                      </Badge>
                      <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-xs font-medium text-accent-foreground">
                          {task.assignee}
                        </span>
                      </div>
                    </div>

                    {task.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {task.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}

              <Button
                variant="ghost"
                className="w-full border-2 border-dashed border-border hover:border-accent-foreground/20 h-24 flex items-center justify-center"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Task
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}