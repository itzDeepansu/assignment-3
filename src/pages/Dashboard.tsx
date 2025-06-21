import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Calendar, Kanban, Table2, TrendingUp, Users } from "lucide-react"

const stats = [
  {
    title: "Total Users",
    value: "12,543",
    change: "+12.3%",
    icon: Users,
    trend: "up"
  },
  {
    title: "Active Projects",
    value: "234",
    change: "+5.2%", 
    icon: Kanban,
    trend: "up"
  },
  {
    title: "Completed Tasks",
    value: "1,847",
    change: "+23.1%",
    icon: Calendar,
    trend: "up"
  },
  {
    title: "Data Records",
    value: "89,012",
    change: "+18.7%",
    icon: Table2,
    trend: "up"
  }
]

const recentActivity = [
  { action: "New user registered", time: "2 minutes ago", type: "user" },
  { action: "Project 'Website Redesign' completed", time: "15 minutes ago", type: "project" },
  { action: "Data export completed", time: "1 hour ago", type: "data" },
  { action: "System backup successful", time: "2 hours ago", type: "system" },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening with your projects.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                {stat.change} from last month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center p-4 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors">
                <Kanban className="h-8 w-8 mb-2" />
                <span className="text-sm font-medium">New Project</span>
              </button>
              <button className="flex flex-col items-center p-4 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors">
                <Table2 className="h-8 w-8 mb-2" />
                <span className="text-sm font-medium">Import Data</span>
              </button>
              <button className="flex flex-col items-center p-4 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors">
                <Calendar className="h-8 w-8 mb-2" />
                <span className="text-sm font-medium">Schedule Event</span>
              </button>
              <button className="flex flex-col items-center p-4 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors">
                <BarChart3 className="h-8 w-8 mb-2" />
                <span className="text-sm font-medium">View Reports</span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}