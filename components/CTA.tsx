'use client'

import { useState } from 'react'

export function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('투어 신청 이메일:', email)
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-br from-[#552583] to-[#1D428A] text-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            NBA 직관투어 신청하기
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            지금 신청하고 특별한 NBA 경험을 만나보세요
          </p>

          {/* 신청 폼 */}
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mb-8"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소를 입력하세요"
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-[#552583] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                신청하기
              </button>
            </div>
            {submitted && (
              <p className="mt-4 text-green-300">
                신청이 완료되었습니다! 곧 연락드리겠습니다.
              </p>
            )}
          </form>

          {/* 추가 정보 */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-200 mb-4">
              더 자세한 정보가 필요하신가요?
            </p>
            <p className="text-sm text-gray-300">
              투어 관련 문의사항은 이메일을 통해 연락주시면 빠르게 답변드리겠습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

