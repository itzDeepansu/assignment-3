import { useState, useEffect } from 'react'

export interface ColorScheme {
  name: string
  description: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    foreground: string
    muted: string
    'muted-foreground': string
    border: string
    input: string
    card: string
    'card-foreground': string
    popover: string
    'popover-foreground': string
    'primary-foreground': string
    'secondary-foreground': string
    'accent-foreground': string
    destructive: string
    'destructive-foreground': string
    ring: string
  }
  darkColors?: {
    primary: string
    secondary: string
    accent: string
    background: string
    foreground: string
    muted: string
    'muted-foreground': string
    border: string
    input: string
    card: string
    'card-foreground': string
    popover: string
    'popover-foreground': string
    'primary-foreground': string
    'secondary-foreground': string
    'accent-foreground': string
    destructive: string
    'destructive-foreground': string
    ring: string
  }
}

export const colorSchemes: ColorScheme[] = [
  {
    name: "Default",
    description: "Clean and modern default theme",
    colors: {
      primary: "222.2 47.4% 11.2%",
      secondary: "210 40% 96.1%",
      accent: "210 40% 96.1%",
      background: "0 0% 100%",
      foreground: "222.2 84% 4.9%",
      muted: "210 40% 96.1%",
      'muted-foreground': "215.4 16.3% 46.9%",
      border: "214.3 31.8% 91.4%",
      input: "214.3 31.8% 91.4%",
      card: "0 0% 100%",
      'card-foreground': "222.2 84% 4.9%",
      popover: "0 0% 100%",
      'popover-foreground': "222.2 84% 4.9%",
      'primary-foreground': "210 40% 98%",
      'secondary-foreground': "222.2 47.4% 11.2%",
      'accent-foreground': "222.2 47.4% 11.2%",
      destructive: "0 84.2% 60.2%",
      'destructive-foreground': "210 40% 98%",
      ring: "222.2 84% 4.9%"
    },
    darkColors: {
      primary: "210 40% 98%",
      secondary: "217.2 32.6% 17.5%",
      accent: "217.2 32.6% 17.5%",
      background: "222.2 84% 4.9%",
      foreground: "210 40% 98%",
      muted: "217.2 32.6% 17.5%",
      'muted-foreground': "215 20.2% 65.1%",
      border: "217.2 32.6% 17.5%",
      input: "217.2 32.6% 17.5%",
      card: "222.2 84% 4.9%",
      'card-foreground': "210 40% 98%",
      popover: "222.2 84% 4.9%",
      'popover-foreground': "210 40% 98%",
      'primary-foreground': "222.2 47.4% 11.2%",
      'secondary-foreground': "210 40% 98%",
      'accent-foreground': "210 40% 98%",
      destructive: "0 62.8% 30.6%",
      'destructive-foreground': "210 40% 98%",
      ring: "212.7 26.8% 83.9%"
    }
  },
  {
    name: "Ocean Blue",
    description: "Calming ocean-inspired blues",
    colors: {
      primary: "210 100% 40%",
      secondary: "210 100% 95%",
      accent: "200 100% 90%",
      background: "210 100% 99%",
      foreground: "210 100% 15%",
      muted: "210 50% 95%",
      'muted-foreground': "210 50% 45%",
      border: "210 50% 85%",
      input: "210 50% 85%",
      card: "210 100% 99%",
      'card-foreground': "210 100% 15%",
      popover: "210 100% 99%",
      'popover-foreground': "210 100% 15%",
      'primary-foreground': "210 100% 98%",
      'secondary-foreground': "210 100% 20%",
      'accent-foreground': "210 100% 20%",
      destructive: "0 84.2% 60.2%",
      'destructive-foreground': "210 40% 98%",
      ring: "210 100% 40%"
    },
    darkColors: {
      primary: "210 100% 60%",
      secondary: "210 50% 20%",
      accent: "200 50% 25%",
      background: "210 50% 8%",
      foreground: "210 100% 95%",
      muted: "210 50% 20%",
      'muted-foreground': "210 50% 65%",
      border: "210 50% 20%",
      input: "210 50% 20%",
      card: "210 50% 8%",
      'card-foreground': "210 100% 95%",
      popover: "210 50% 8%",
      'popover-foreground': "210 100% 95%",
      'primary-foreground': "210 100% 10%",
      'secondary-foreground': "210 100% 95%",
      'accent-foreground': "210 100% 95%",
      destructive: "0 62.8% 50%",
      'destructive-foreground': "210 40% 98%",
      ring: "210 100% 60%"
    }
  },
  {
    name: "Forest Green",
    description: "Natural forest green tones",
    colors: {
      primary: "140 50% 30%",
      secondary: "140 50% 95%",
      accent: "140 50% 90%",
      background: "140 50% 99%",
      foreground: "140 50% 15%",
      muted: "140 30% 95%",
      'muted-foreground': "140 30% 45%",
      border: "140 30% 85%",
      input: "140 30% 85%",
      card: "140 50% 99%",
      'card-foreground': "140 50% 15%",
      popover: "140 50% 99%",
      'popover-foreground': "140 50% 15%",
      'primary-foreground': "140 50% 98%",
      'secondary-foreground': "140 50% 20%",
      'accent-foreground': "140 50% 20%",
      destructive: "0 84.2% 60.2%",
      'destructive-foreground': "210 40% 98%",
      ring: "140 50% 30%"
    },
    darkColors: {
      primary: "140 50% 60%",
      secondary: "140 30% 20%",
      accent: "140 30% 25%",
      background: "140 30% 8%",
      foreground: "140 50% 95%",
      muted: "140 30% 20%",
      'muted-foreground': "140 30% 65%",
      border: "140 30% 20%",
      input: "140 30% 20%",
      card: "140 30% 8%",
      'card-foreground': "140 50% 95%",
      popover: "140 30% 8%",
      'popover-foreground': "140 50% 95%",
      'primary-foreground': "140 50% 10%",
      'secondary-foreground': "140 50% 95%",
      'accent-foreground': "140 50% 95%",
      destructive: "0 62.8% 50%",
      'destructive-foreground': "210 40% 98%",
      ring: "140 50% 60%"
    }
  },
  {
    name: "Sunset Orange",
    description: "Warm and energetic orange palette",
    colors: {
      primary: "25 95% 45%",
      secondary: "25 95% 95%",
      accent: "25 95% 90%",
      background: "25 95% 99%",
      foreground: "25 95% 15%",
      muted: "25 50% 95%",
      'muted-foreground': "25 50% 45%",
      border: "25 50% 85%",
      input: "25 50% 85%",
      card: "25 95% 99%",
      'card-foreground': "25 95% 15%",
      popover: "25 95% 99%",
      'popover-foreground': "25 95% 15%",
      'primary-foreground': "25 95% 98%",
      'secondary-foreground': "25 95% 20%",
      'accent-foreground': "25 95% 20%",
      destructive: "0 84.2% 60.2%",
      'destructive-foreground': "210 40% 98%",
      ring: "25 95% 45%"
    },
    darkColors: {
      primary: "25 95% 60%",
      secondary: "25 50% 20%",
      accent: "25 50% 25%",
      background: "25 50% 8%",
      foreground: "25 95% 95%",
      muted: "25 50% 20%",
      'muted-foreground': "25 50% 65%",
      border: "25 50% 20%",
      input: "25 50% 20%",
      card: "25 50% 8%",
      'card-foreground': "25 95% 95%",
      popover: "25 50% 8%",
      'popover-foreground': "25 95% 95%",
      'primary-foreground': "25 95% 10%",
      'secondary-foreground': "25 95% 95%",
      'accent-foreground': "25 95% 95%",
      destructive: "0 62.8% 50%",
      'destructive-foreground': "210 40% 98%",
      ring: "25 95% 60%"
    }
  },
  {
    name: "Royal Purple",
    description: "Elegant purple with gold accents",
    colors: {
      primary: "270 50% 40%",
      secondary: "270 50% 95%",
      accent: "45 90% 85%",
      background: "270 50% 99%",
      foreground: "270 50% 15%",
      muted: "270 30% 95%",
      'muted-foreground': "270 30% 45%",
      border: "270 30% 85%",
      input: "270 30% 85%",
      card: "270 50% 99%",
      'card-foreground': "270 50% 15%",
      popover: "270 50% 99%",
      'popover-foreground': "270 50% 15%",
      'primary-foreground': "270 50% 98%",
      'secondary-foreground': "270 50% 20%",
      'accent-foreground': "45 90% 20%",
      destructive: "0 84.2% 60.2%",
      'destructive-foreground': "210 40% 98%",
      ring: "270 50% 40%"
    },
    darkColors: {
      primary: "270 50% 60%",
      secondary: "270 30% 20%",
      accent: "45 70% 35%",
      background: "270 30% 8%",
      foreground: "270 50% 95%",
      muted: "270 30% 20%",
      'muted-foreground': "270 30% 65%",
      border: "270 30% 20%",
      input: "270 30% 20%",
      card: "270 30% 8%",
      'card-foreground': "270 50% 95%",
      popover: "270 30% 8%",
      'popover-foreground': "270 50% 95%",
      'primary-foreground': "270 50% 10%",
      'secondary-foreground': "270 50% 95%",
      'accent-foreground': "45 90% 95%",
      destructive: "0 62.8% 50%",
      'destructive-foreground': "210 40% 98%",
      ring: "270 50% 60%"
    }
  },
  {
    name: "Monochrome",
    description: "Classic black and white contrast",
    colors: {
      primary: "0 0% 10%",
      secondary: "0 0% 95%",
      accent: "0 0% 90%",
      background: "0 0% 100%",
      foreground: "0 0% 10%",
      muted: "0 0% 95%",
      'muted-foreground': "0 0% 45%",
      border: "0 0% 85%",
      input: "0 0% 85%",
      card: "0 0% 100%",
      'card-foreground': "0 0% 10%",
      popover: "0 0% 100%",
      'popover-foreground': "0 0% 10%",
      'primary-foreground': "0 0% 98%",
      'secondary-foreground': "0 0% 20%",
      'accent-foreground': "0 0% 20%",
      destructive: "0 84.2% 60.2%",
      'destructive-foreground': "210 40% 98%",
      ring: "0 0% 10%"
    },
    darkColors: {
      primary: "0 0% 90%",
      secondary: "0 0% 20%",
      accent: "0 0% 25%",
      background: "0 0% 8%",
      foreground: "0 0% 95%",
      muted: "0 0% 20%",
      'muted-foreground': "0 0% 65%",
      border: "0 0% 20%",
      input: "0 0% 20%",
      card: "0 0% 8%",
      'card-foreground': "0 0% 95%",
      popover: "0 0% 8%",
      'popover-foreground': "0 0% 95%",
      'primary-foreground': "0 0% 10%",
      'secondary-foreground': "0 0% 95%",
      'accent-foreground': "0 0% 95%",
      destructive: "0 62.8% 50%",
      'destructive-foreground': "210 40% 98%",
      ring: "0 0% 90%"
    }
  }
]

export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'Default'
    }
    return 'Default'
  })
  
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true'
    }
    return false
  })

  const applyThemeColors = (scheme: ColorScheme, dark: boolean = false) => {
    const colors = dark && scheme.darkColors ? scheme.darkColors : scheme.colors
    const root = document.documentElement
    
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value)
    })
    
    // Update dark mode class
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  const applyTheme = (themeName: string) => {
    const scheme = colorSchemes.find(s => s.name === themeName)
    if (scheme) {
      setCurrentTheme(themeName)
      localStorage.setItem('theme', themeName)
      applyThemeColors(scheme, isDark)
    }
  }

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    
    const scheme = colorSchemes.find(s => s.name === currentTheme)
    if (scheme) {
      applyThemeColors(scheme, newDarkMode)
    }
  }

  // Apply theme on mount and theme/dark mode changes
  useEffect(() => {
    const scheme = colorSchemes.find(s => s.name === currentTheme)
    if (scheme) {
      applyThemeColors(scheme, isDark)
    }
  }, [currentTheme, isDark])

  return {
    currentTheme,
    isDark,
    colorSchemes,
    applyTheme,
    toggleDarkMode
  }
}