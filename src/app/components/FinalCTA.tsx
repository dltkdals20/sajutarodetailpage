export default function FinalCTA() {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="px-4 sm:px-8 relative z-10 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-6 leading-tight px-2">
          2026년, 흔들리는 마음의 <br className="sm:hidden" />'결'을 잡아드립니다.
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-orange-50 mb-8 mx-auto leading-relaxed px-2">
          사주로 흐름을 잡고 타로로 현재 기운을 보완해<br className="hidden sm:block" />
          실행까지 정리해요.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6">
          <a href="https://talk.naver.com/WI2DRB9" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-orange-600 rounded-xl hover:bg-orange-50 transition-all shadow-xl hover:shadow-2xl text-base sm:text-lg font-semibold text-center">
            상담 신청하기
          </a>
          <a href="https://talk.naver.com/WI2DRB9" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-transparent text-white border-2 border-white rounded-xl hover:bg-white/10 transition-all text-base sm:text-lg font-semibold text-center">
            문의하기
          </a>
        </div>

        <p className="text-xs sm:text-sm text-orange-100 px-2">
          네이버 톡톡 · 문자 · 전화 · 줌 | 내게 편한 방식으로 온라인 상담
        </p>
      </div>
    </section>
  );
}