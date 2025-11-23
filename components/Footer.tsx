'use client'

import { TOUR_INFO } from '@/lib/constants'
import { NBAButton } from './NBAButton'

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { id: 'games', label: '경기 일정', icon: '🏀' },
    { id: 'itinerary', label: '투어 일정', icon: '📅' },
    { id: 'pricing', label: '가격 정보', icon: '💰' },
    { id: 'faq', label: 'FAQ', icon: '❓' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-nba-blue to-gray-900 text-white py-12 court-pattern overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-basketball-orange rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-nba-red rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 투어 정보 */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl animate-bounce-basketball">🏀</span>
              <h3 className="text-2xl font-black text-basketball-orange">{TOUR_INFO.shortTitle}</h3>
            </div>
            <p className="text-gray-300 mb-3 leading-relaxed">{TOUR_INFO.description}</p>
            <div className="flex items-center gap-2 text-basketball-orange font-bold">
              <span>📅</span>
              <span>투어 기간: {TOUR_INFO.dateDisplay}</span>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold mb-4 text-basketball-orange flex items-center gap-2">
              <span>⚡</span> 빠른 링크
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="flex items-center gap-2 text-gray-300 hover:text-basketball-orange transition-all hover:translate-x-2 group"
                  >
                    <span className="group-hover:animate-bounce-basketball">{link.icon}</span>
                    <span className="font-semibold">{link.label}</span>
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-4 text-basketball-orange flex items-center gap-2">
              <span>📞</span> 연락처
            </h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p className="font-bold text-lg mb-3" style={{ color: '#001f3f' }}>민투어(국내외여행업)</p>
              <div className="space-y-1">
                <p className="flex items-center gap-2">
                  <span>📋</span> 등록번호: 146-02-02477
                </p>
                <p className="flex items-center gap-2">
                  <span>📍</span> 강원특별자치도 원주시 서원대로 172, 3층(단계동)
                </p>
                <p className="flex items-center gap-2">
                  <span>☎️</span> 033-742-8053, 010-4766-8053
                </p>
                <p className="flex items-center gap-2">
                  <span>👤</span> 대표: 김민규
                </p>
                <p className="flex items-center gap-2">
                  <span>💬</span> 카카오톡: mintour
                </p>
              </div>
              <div className="pt-4">
                <NBAButton
                  onClick={() => window.open('https://form.naver.com/response/F86hdXHkmqFym7xNkOGMZw', '_blank')}
                  size="sm"
                  variant="secondary"
                  className="w-full"
                >
                  투어 신청하기
                </NBAButton>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 저작권 */}
        <div className="border-t-2 border-basketball-orange/30 pt-8 text-center">
          <p className="text-gray-400 mb-2">
            &copy; 2026 <span className="font-bold text-basketball-orange">{TOUR_INFO.shortTitle}</span>. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <span className="animate-bounce-basketball">🏀</span>
            <span>민투어 제공</span>
            <span className="animate-bounce-basketball" style={{ animationDelay: '0.5s' }}>🏀</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

