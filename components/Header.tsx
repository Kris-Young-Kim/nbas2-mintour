'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { TOUR_INFO } from '@/lib/constants'
import { NBAButton } from './NBAButton'

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'games', label: '경기 일정', icon: '🏀' },
    { id: 'itinerary', label: '투어 일정', icon: '📅' },
    { id: 'pricing', label: '가격 정보', icon: '💰' },
    { id: 'faq', label: 'FAQ', icon: '❓' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-nba-blue via-nba-purple to-nba-blue shadow-2xl border-b-4 border-basketball-orange'
          : 'bg-gradient-to-r from-nba-blue/95 via-nba-purple/95 to-nba-blue/95 backdrop-blur-md border-b-2 border-basketball-orange/50'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group"
            aria-label="홈으로 이동"
          >
            <span className="text-3xl animate-bounce-basketball">🏀</span>
            <span className="text-xl md:text-2xl font-black text-white drop-shadow-lg group-hover:scale-110 transition-transform">
              {TOUR_INFO.shortTitle}
            </span>
          </button>

          {/* 데스크톱 네비게이션 */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-lg text-white font-semibold hover:bg-white/20 transition-all hover:scale-110 flex items-center gap-2 group relative overflow-hidden"
              >
                <span className="group-hover:animate-bounce-basketball">{item.icon}</span>
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-basketball-orange group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* 우측 액션 버튼 */}
          <div className="flex items-center space-x-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all hover:rotate-180 hover:scale-110"
                aria-label="테마 전환"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            )}
            <div className="hidden md:block">
              <NBAButton
                onClick={() => window.open('https://form.naver.com/response/BhPR2bzXaqj-sF66MgL_1w', '_blank')}
                size="md"
              >
                신청하기
              </NBAButton>
            </div>
            {/* 모바일 메뉴 버튼 */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all"
              aria-label="메뉴 열기/닫기"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20 animate-slide-down">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-3 text-white font-semibold hover:bg-white/20 rounded-lg transition-all flex items-center gap-2 group"
                >
                  <span className="group-hover:animate-bounce-basketball">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
              <div className="pt-2">
                <NBAButton
                  onClick={() => window.open('https://form.naver.com/response/BhPR2bzXaqj-sF66MgL_1w', '_blank')}
                  size="md"
                  className="w-full"
                >
                  투어 신청하기
                </NBAButton>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

