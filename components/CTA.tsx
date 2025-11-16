'use client'

import { TOUR_INFO } from '@/lib/constants'

export function CTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          지금 바로 투어에 신청하세요!
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {TOUR_INFO.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => window.open('https://form.naver.com/response/BhPR2bzXaqj-sF66MgL_1w', '_blank')}
            className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            투어 신청하기
          </button>
          <button
            onClick={() => scrollToSection('itinerary')}
            className="px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-400 transition-all border-2 border-white/30"
          >
            일정 자세히 보기
          </button>
        </div>
        <div className="mt-8 text-white/90">
          <p className="text-lg font-semibold mb-2">{TOUR_INFO.dateDisplay}</p>
          <p className="text-2xl font-bold">₩{TOUR_INFO.price.toLocaleString()}</p>
        </div>
      </div>
    </section>
  )
}

