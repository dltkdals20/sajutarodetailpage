import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "김00님",
      age: "32세, 커리어 전환",
      rating: 5,
      channel: "줌 상담",
      content: "이직을 고민하다가 신청했는데, 사주로 '2026년 봄이 타이밍'이라는 걸 알았고 타로로 '지금 준비해야 할 것'을 집어주셨어요. 막연했던 불안이 구체적인 실행 계획으로 바뀌었습니다.",
      highlight: "사주+타로 조합이 정말 명확했어요"
    },
    {
      name: "박00님",
      age: "28세, 연애·결혼",
      rating: 5,
      channel: "네이버 톡톡 상담",
      content: "연애운이 궁금해서 가볍게 시작했는데, 사주로 제 성향을, 타로로 상대방의 현재 마음을 보니까 '아, 이래서 안 풀렸구나' 싶었어요. 네이버 톡톡이라 부담 없이 질문할 수 있어서 좋았습니다.",
      highlight: "네이버 톡톡으로 편하게 대화하듯 상담받았어요"
    },
    {
      name: "이00님",
      age: "35세, 사업 시작",
      rating: 5,
      channel: "전화 상담",
      content: "사업 타이밍을 보려고 신청했어요. 사주로 큰 흐름 보고, 타로로 '지금 집중해야 할 영역'을 짚어주시니까 우선순위가 명확해졌어요. 전화라 즉각 질문하고 답변받는 게 효율적이었습니다.",
      highlight: "실행 계획까지 정리돼서 나왔어요"
    },
    {
      name: "최00님",
      age: "41세, 종합 운세",
      rating: 5,
      channel: "문자 상담",
      content: "신년운세를 제대로 보고 싶어서 프리미엄으로 신청했어요. 사주·타로 다 보고 나니 2026년 전체 그림이 그려지더라고요. 문자로 천천히 답변 받으면서 정리할 수 있어서 좋았습니다.",
      highlight: "한 번에 다 보니까 연결되는 느낌"
    },
    {
      name: "정00님",
      age: "26세, 진로 고민",
      rating: 5,
      channel: "줌 상담",
      content: "취업 vs 대학원 고민 중이었는데, 사주로 저한테 맞는 길을, 타로로 각 선택지의 현재 에너지를 보니까 결정이 됐어요. 얼굴 보면서 이야기하니까 더 신뢰가 갔습니다.",
      highlight: "고민이 결정으로 바뀌었어요"
    },
    {
      name: "한00님",
      age: "38세, 재물·건강",
      rating: 5,
      channel: "네이버 톡톡 상담",
      content: "재물운이랑 건강 둘 다 궁금했는데, 사주로 2026년 조심할 시기를 알았고 타로로 지금 해야 할 액션을 받았어요. 요약본도 주셔서 나중에 다시 보기 좋았습니다.",
      highlight: "요약 자료 받아서 계속 참고해요"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl mb-3 text-gray-800 px-2">
            실제로 받아보신 분들의 이야기
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 px-2">
            사주+타로 더블 리딩, 그리고 내게 맞는 채널로 상담받은 실제 후기입니다
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 sm:p-6 border-2 border-orange-100 hover:border-orange-300 transition-all hover:shadow-lg"
            >
              {/* Quote Icon */}
              <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-orange-200 mb-3" />

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>

              {/* Highlight */}
              <div className="mb-3 px-2.5 sm:px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg inline-block text-xs sm:text-sm font-medium">
                {testimonial.highlight}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-4 text-xs sm:text-sm lg:text-base">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <div className="font-medium text-gray-800 text-sm sm:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    {testimonial.age}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs sm:text-sm text-orange-600 font-medium">
                    {testimonial.channel}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 p-5 sm:p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border-2 border-orange-200">
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 px-2">
            <span className="font-semibold text-orange-600">이미 많은 분들</span>이 사주+타로 더블 리딩으로<br className="hidden sm:block" />
            2026년 운세를 정리했어요
          </p>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg text-sm sm:text-base font-medium">
            나도 상담 받아보기
          </button>
        </div>
      </div>
    </section>
  );
}