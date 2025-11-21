'use client'

import { useState, useEffect } from 'react'

export function SideNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'games', 'itinerary', 'pricing', 'faq']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'hero', label: '홈', icon: '🏠' },
    { id: 'games', label: '경기', icon: '🏀' },
    { id: 'itinerary', label: '일정', icon: '📅' },
    { id: 'pricing', label: '가격', icon: '💰' },
    { id: 'faq', label: 'FAQ', icon: '❓' },
  ]

  if (!isVisible) return null

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <div className="bg-gradient-to-b from-nba-blue/90 to-nba-purple/90 backdrop-blur-md rounded-2xl p-3 shadow-2xl border-2 border-basketball-orange/50">
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative p-3 rounded-xl transition-all duration-300 group ${
                activeSection === item.id
                  ? 'bg-basketball-orange text-white scale-110 shadow-lg shadow-basketball-orange/50'
                  : 'bg-white/10 text-white hover:bg-white/20 hover:scale-105'
              }`}
              aria-label={item.label}
            >
              <span className="text-2xl block group-hover:animate-bounce-basketball">
                {item.icon}
              </span>
              {activeSection === item.id && (
                <span className="absolute -left-12 top-1/2 -translate-y-1/2 bg-basketball-orange text-white px-3 py-1 rounded-lg text-sm font-bold whitespace-nowrap animate-fade-in-up shadow-lg">
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

