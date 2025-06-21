import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Palette, Check, Moon, Sun } from "lucide-react"
import { useTheme } from "@/hooks/useTheme"

export default function Themes() {
  const { currentTheme, isDark, colorSchemes, applyTheme, toggleDarkMode } = useTheme()

  const getPreviewColor = (colorValue: string) => {
    return `hsl(${colorValue})`
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Theme Customization</h1>
        <p className="text-muted-foreground mt-1">
          Personalize your dashboard with beautiful color schemes and themes.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Color Schemes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {colorSchemes.map((theme) => (
                  <div
                    key={theme.name}
                    className={`p-4 border border-border rounded-lg cursor-pointer hover:border-primary transition-colors ${
                      currentTheme === theme.name ? 'border-primary bg-accent/20' : ''
                    }`}
                    onClick={() => applyTheme(theme.name)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-foreground">{theme.name}</h4>
                        <p className="text-sm text-muted-foreground">{theme.description}</p>
                      </div>
                      {currentTheme === theme.name && (
                        <Check className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <div 
                        className="w-6 h-6 rounded-full border border-border"
                        style={{ backgroundColor: getPreviewColor(theme.colors.primary) }}
                        title="Primary"
                      />
                      <div 
                        className="w-6 h-6 rounded-full border border-border"
                        style={{ backgroundColor: getPreviewColor(theme.colors.secondary) }}
                        title="Secondary"
                      />
                      <div 
                        className="w-6 h-6 rounded-full border border-border"
                        style={{ backgroundColor: getPreviewColor(theme.colors.accent) }}
                        title="Accent"
                      />
                      <div 
                        className="w-6 h-6 rounded-full border border-border"
                        style={{ backgroundColor: getPreviewColor(theme.colors.background) }}
                        title="Background"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Theme Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Dark Mode</h4>
                  <p className="text-sm text-muted-foreground">Toggle dark/light theme</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleDarkMode}
                  className="gap-2"
                >
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  {isDark ? 'Light' : 'Dark'}
                </Button>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Current Theme</h4>
                <Badge variant="secondary" className="w-fit">
                  {currentTheme}
                </Badge>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Mode</h4>
                <Badge variant="secondary" className="w-fit">
                  {isDark ? 'Dark' : 'Light'}
                </Badge>
              </div>

              <div className="pt-4 border-t border-border">
                <Button className="w-full gap-2">
                  <Palette className="h-4 w-4" />
                  Create Custom Theme
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-primary text-primary-foreground rounded-md">
                  <p className="text-sm font-medium">Primary Component</p>
                  <p className="text-xs opacity-90">This shows primary colors</p>
                </div>
                <div className="p-3 bg-secondary text-secondary-foreground rounded-md">
                  <p className="text-sm font-medium">Secondary Component</p>
                  <p className="text-xs opacity-90">This shows secondary colors</p>
                </div>
                <div className="p-3 bg-accent text-accent-foreground rounded-md">
                  <p className="text-sm font-medium">Accent Component</p>
                  <p className="text-xs opacity-90">This shows accent colors</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}