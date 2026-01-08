import { Sparkles } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="px-4 sm:px-8">
        <h2 className="text-2xl sm:text-3xl text-center mb-10 text-gray-800">
          2026년 신년운세 상담 가격
        </h2>

        <div className="max-w-md mx-auto">
          <div className="bg-white border-2 border-orange-300 rounded-2xl p-8 shadow-xl text-center relative overflow-hidden">
            {/* 할인 배지 */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              40% 할인
            </div>

            {/* 아이콘 */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-6 shadow-lg">
              <Sparkles className="w-10 h-10 text-white" />
            </div>

            {/* 제목 */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              사주 + 타로 더블 리딩
            </h3>

            {/* 원가 */}
            <div className="mb-2">
              <span className="text-2xl text-gray-400 line-through">
                50,000원
              </span>
            </div>

            {/* 할인가 */}
            <div className="mb-6">
              <span className="text-5xl font-bold text-orange-600">
                30,000
              </span>
              <span className="text-2xl text-gray-700">원</span>
            </div>

            {/* 설명 */}
            <div className="bg-orange-50 rounded-lg p-4 text-left space-y-2">
              <p className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-500 font-bold">✓</span>
                <span>네이버 톡톡 / 전화 / 줌 중 선택</span>
              </p>
              <p className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-500 font-bold">✓</span>
                <span>사주 흐름 + 타로 현재 기운 종합 리딩</span>
              </p>
              <p className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-orange-500 font-bold">✓</span>
                <span>상담 후 핵심 요약본 제공</span>
              </p>
            </div>

            {/* CTA 버튼 */}
            <a href="https://talk.naver.com/WI2DRB9" target="_blank" rel="noopener noreferrer" className="block w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              지금 신청하기
            </a>
          </div>
        </div>

        {/* 추가 안내 */}
        <p className="text-center text-sm text-gray-500 mt-6">
          * 신년 특별 할인은 한정 기간 운영됩니다
        </p>
      </div>
    </section>
  );
}
