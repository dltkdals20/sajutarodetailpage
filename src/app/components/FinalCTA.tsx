export default function FinalCTA() {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="px-4 sm:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl text-white mb-6 leading-tight">
          2026년, 흔들리는 마음의 <br className="sm:hidden" />'결'을 잡아드립니다.
        </h2>

        <p className="text-lg sm:text-xl text-orange-50 mb-8 mx-auto leading-relaxed">
          사주로 흐름을 잡고 타로로 현재 기운을 보완해<br className="hidden sm:block" />
          실행까지 정리해요.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <a href="https://talk.naver.com/WI2DRB9" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-4 bg-white text-orange-600 rounded-xl hover:bg-orange-50 transition-all shadow-xl hover:shadow-2xl text-base sm:text-lg font-semibold">
            상담 신청하기
          </a>
          <a href="https://talk.naver.com/WI2DRB9" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-4 bg-transparent text-white border-2 border-white rounded-xl hover:bg-white/10 transition-all text-base sm:text-lg font-semibold">
            문의하기
          </a>
        </div>

        <p className="text-sm text-orange-100">
          톡톡 · 전화 · 줌 | 내게 편한 방식으로 온라인 상담
        </p>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-orange-400/30">
        <div className="px-4 sm:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-orange-100 text-sm">
            <p>© 2026 결 상담소. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-white transition-colors">환불정책</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}