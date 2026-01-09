import { Brain, Target, TrendingUp, MapPin, Cloud } from "lucide-react";

export default function Why() {
  const benefits = [
    {
      icon: Brain,
      title: "이해가 깊어짐",
      description: "사주의 큰 흐름과 타로의 현재 기운을 함께 보면 상황을 입체적으로 이해할 수 있어요"
    },
    {
      icon: Target,
      title: "결정이 쉬워짐",
      description: "흐름과 변수를 모두 파악하면 선택의 기준이 명확해집니다"
    },
    {
      icon: TrendingUp,
      title: "실행으로 연결",
      description: "이해와 결정이 분명해지면 자연스럽게 행동으로 이어져요"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="px-4 sm:px-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-center mb-6 text-gray-800 px-2">
          왜 사주와 타로를 함께 보나요?
        </h2>

        <div className="mx-auto mb-10 space-y-4 px-2">
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed text-center">
            사주는 태어난 정보로 보기 때문에 <span className="font-semibold text-orange-600">2026년의 큰 방향과 타이밍</span>을 잡는 데 강점이 있어요.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed text-center">
            하지만 사람의 마음, 관계, 환경은 계속 변하죠. 그래서 사주만으로는 <span className="font-semibold text-orange-600">'지금의 기운'과 '현재 변수'</span>를 세밀하게 담기 어려운 점이 있습니다.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed text-center">
            타로는 바로 그 부분을 보완해요. 그래서 두 도구를 함께 보면 <span className="font-semibold text-orange-600">이해가 깊어지고 고민이 더 현실적으로 해결</span>될 수 있습니다.
          </p>
        </div>

        {/* Visual Comparison */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {/* 사주 Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 sm:p-6 rounded-2xl border-2 border-orange-300 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-md">
                  <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-800 mb-2">
                사주 = 연간 지도
              </h3>
              <p className="text-xs sm:text-sm text-center text-gray-700 leading-relaxed">
                2026년 전체의 큰 흐름과<br />주요 이벤트 타이밍을 알려줘요
              </p>
              <div className="mt-4 p-3 bg-white rounded-lg">
                <p className="text-xs text-gray-600 text-center">
                  "3월에 기회, 7월 조심, 10월 전환점"
                </p>
              </div>
            </div>

            {/* 타로 Card */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 sm:p-6 rounded-2xl border-2 border-purple-300 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                  <Cloud className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-800 mb-2">
                타로 = 지금의 날씨
              </h3>
              <p className="text-xs sm:text-sm text-center text-gray-700 leading-relaxed">
                현재의 감정, 변수, 관계,<br />지금 당장 무엇을 해야 할지 알려줘요
              </p>
              <div className="mt-4 p-3 bg-white rounded-lg">
                <p className="text-xs text-gray-600 text-center">
                  "지금은 기다릴 때, 이 사람은 관심 있음"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">{benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white p-5 sm:p-6 rounded-xl border border-orange-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 text-center">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}