export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 py-12 sm:py-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="px-4 sm:px-8 relative z-10">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          <span className="px-4 py-1.5 bg-white border border-orange-200 text-orange-700 rounded-full text-sm shadow-sm">
            온라인 상담(네이버 톡톡·문자·전화·줌)
          </span>
          <span className="px-4 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm shadow-md">
            사주+타로 더블 리딩
          </span>
          <span className="px-4 py-1.5 bg-white border border-orange-200 text-orange-700 rounded-full text-sm shadow-sm">
            핵심 요약 제공
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-6 leading-tight px-2">
          <span className="block text-gray-800">2026 병오년 신년운세,</span>
          <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            사주로 한 번. 타로로 한 번 더.
          </span>
        </h1>

        {/* Subheading */}
        <div className="mx-auto mb-8 space-y-3 text-center">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            사주는 태어난 정보로 보는 <br className="sm:hidden" />
            <span className="font-semibold text-orange-600">정해진 큰 흐름(타이밍·강약)</span>이고,
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            타로는 지금의 상황이 만든 <br className="sm:hidden" />
            <span className="font-semibold text-orange-600">현재 기운(변수·선택)</span>을 담아요.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            그래서 상담이 끝나면 이해가 깊어지고 <br className="sm:hidden" />
            고민이 <span className="font-semibold text-orange-600">결정과 실행</span>으로 정리됩니다.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://talk.naver.com/WI2DRB9" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl text-base sm:text-lg font-medium text-center">
            상담 신청하기
          </a>
        </div>
      </div>
    </section>
  );
}