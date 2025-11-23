'use client'

import { TOUR_INFO } from '@/lib/constants'
import { NBAButton } from './NBAButton'

export function CTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="cta" className="relative py-20 bg-gradient-to-br from-nba-blue via-nba-purple to-nba-blue overflow-hidden court-pattern">
      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-basketball-orange/30 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-nba-red/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-basketball-orange/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-6 animate-fade-in-up">
          <span className="text-6xl animate-bounce-basketball inline-block">🏀</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          지금 바로 투어에 신청하세요!
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-semibold animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {TOUR_INFO.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <NBAButton
            onClick={() => window.open('https://form.naver.com/response/F86hdXHkmqFym7xNkOGMZw', '_blank')}
            size="lg"
            variant="primary"
            className="bg-white text-basketball-orange hover:text-white"
          >
            <span>🏀</span>
            투어 신청하기
          </NBAButton>
          <NBAButton
            onClick={() => scrollToSection('itinerary')}
            size="lg"
            variant="secondary"
          >
            <span>📅</span>
            일정 자세히 보기
          </NBAButton>
        </div>
        <div className="mt-8 inline-block bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-basketball-orange/50 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg font-semibold mb-2 text-white">
            <span className="text-basketball-orange">📅</span> {TOUR_INFO.dateDisplay}
          </p>
          <p className="text-3xl md:text-4xl font-black text-basketball-orange">
            ₩{TOUR_INFO.price.toLocaleString()}
          </p>
        </div>
      </div>
    </section>
  )
}

