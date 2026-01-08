import { Calendar, Sparkles, TrendingUp, Heart, Briefcase, DollarSign, Shield, Users } from "lucide-react";

export default function WhatWeSee() {
  const sajuInsights = [
    {
      icon: Calendar,
      title: "일간&일주",
      subtitle: "타고난 나 + 현실에서의 나",
      description: "일간은 사주에서 '나(본체)'를 뜻하는 태어난 날의 천간으로, 내가 원래 어떤 사람인지(기본 기질과 에너지의 방향)를 보여줍니다.",
      details: [
        "일주 = 일간 + 일지가 합쳐진 '태어난 날의 기둥'",
        "실제 일상에서 어떻게 드러나는지: 말투, 선택, 관계 방식, 습관",
        "동양 심리 진단의 틀로 성격과 행동 패턴 분석"
      ]
    },
    {
      icon: TrendingUp,
      title: "용신",
      subtitle: "내 사주에 필요한 에너지",
      description: "용신은 내 사주에 부족한 에너지, 즉 나를 균형있게 만들어주는 '필요한 기운'입니다.",
      details: [
        "어떤 환경, 색깔, 행동이 나를 돕는지 구체적으로 파악",
        "목 기운: 등산, 산림욕, 새벽 시간, 강원도, 식물 가꾸기",
        "화 기운: 조깅, 낮 활동, 햇볕 드는 지역(제주도), 밝은 조명"
      ]
    },
    {
      icon: Briefcase,
      title: "개운법",
      subtitle: "일상에서 실천하는 운 관리",
      description: "용신을 알면 개운법을 통해 실생활에서 바로 실행할 수 있습니다.",
      details: [
        "운동, 시간대, 지역 선택 가이드",
        "도움되는 인간관계: 동료(비겁), 아랫사람(식상), 아내/아버지(재성)",
        "좋은 활동: 함께하기, 소모임, 회식·동호회"
      ]
    },
    {
      icon: Heart,
      title: "2026년 신년운세",
      subtitle: "병오년 5대 영역 분석",
      description: "병오년인 2026년, 내게 찾아오는 흐름을 직장운·사업운·재물운·건강운·연애운 5대 영역으로 나누어 분석합니다.",
      details: [
        "올해 특히 조심해야 할 점",
        "기회가 오는 시기와 타이밍",
        "지금 당장 실행해야 할 행동까지 구체적 안내"
      ]
    }
  ];

  const taroInsights = [
    {
      icon: Sparkles,
      title: "올해 전체 총운",
      description: "2026년 전반적인 흐름과 주요 테마"
    },
    {
      icon: DollarSign,
      title: "금전 & 재물",
      description: "재물운, 수입 증감, 투자 타이밍"
    },
    {
      icon: Users,
      title: "형제 & 가족",
      description: "형제자매와의 관계, 가정 내 분위기, 가족 간 소통"
    },
    {
      icon: Heart,
      title: "연애 & 결혼",
      description: "만남, 이별, 관계 진전 여부 + 결혼 가능성, 파트너십 심화"
    },
    {
      icon: Shield,
      title: "건강",
      description: "몸과 마음의 컨디션, 주의해야 할 건강 포인트"
    },
    {
      icon: Users,
      title: "타인의 도움 & 우정",
      description: "귀인운, 멘토, 협력자 출현 + 친구 관계, 인간관계 확장"
    },
    {
      icon: Briefcase,
      title: "직장·사업·자영업",
      description: "직장 내 평가, 승진, 이직 + 사업 확장, 투자 유치, 고객 유입, 수익 안정성"
    },
    {
      icon: TrendingUp,
      title: "시험운 & 학운",
      description: "시험 합격 가능성, 학업 성취도, 자격증 취득"
    },
    {
      icon: Shield,
      title: "장애물 & 올해의 결과",
      description: "올해 마주할 어려움과 극복 방법 + 연말 도달할 지점과 성과"
    }
  ];

  const additionalReadings = [
    {
      icon: Sparkles,
      title: "현재 에너지",
      question: "지금 내 상태는 어떤가요?",
      answer: "막혀있는지, 흐르고 있는지, 어디에 집중할지",
      detail: "지금 이 순간의 기운과 감정 상태를 정확히 짚어요"
    },
    {
      icon: Users,
      title: "상대방 마음",
      question: "저 사람은 날 어떻게 생각하나요?",
      answer: "상대의 현재 감정과 의도, 관계의 방향성",
      detail: "연애든 비즈니스든, 상대 마음을 읽으면 전략이 달라져요"
    },
    {
      icon: DollarSign,
      title: "선택지별 결과",
      question: "A vs B, 뭘 선택해야 할까요?",
      answer: "각 선택지의 현재 에너지와 예상 결과",
      detail: "고민되는 선택 앞에서 카드가 방향을 보여줘요"
    },
    {
      icon: Shield,
      title: "액션 플랜",
      question: "구체적으로 뭘 해야 하나요?",
      answer: "지금 당장 실행해야 할 것, 멈춰야 할 것",
      detail: "카드가 알려주는 '다음 스텝'으로 고민을 실행으로"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="px-4 sm:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl mb-4 text-gray-800">
            무엇을 보나요?
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            추상적인 운세가 아니라 <span className="font-semibold text-orange-600">구체적인 답변과 실행 방향</span>을 드려요
          </p>
        </div>

        {/* 사주 Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
            <div className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm sm:text-base font-semibold shadow-lg">
              사주로 보는 것 → 타고난 기질 그리고 운명
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {sajuInsights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-lg"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1 text-base sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <div className="ml-1 space-y-2">
                    <div className="text-sm text-gray-800 font-medium">
                      {item.description}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      {item.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center">
                          <span className="mr-2">•</span>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 타로 Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
            <div className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-sm sm:text-base font-semibold shadow-lg">
              타로로 보는 것 → 지금의 변수와 선택
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {taroInsights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-lg"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1 text-base sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Readings Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
            <div className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-sm sm:text-base font-semibold shadow-lg">
              추가로 알아볼 수 있는 것
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {additionalReadings.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-lg"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1 text-base sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.question}
                      </p>
                    </div>
                  </div>
                  
                  <div className="ml-1 space-y-2">
                    <div className="text-sm text-gray-800 font-medium">
                      {item.answer}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      {item.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Impact Box */}
        <div className="mt-10 p-6 sm:p-8 bg-gradient-to-br from-orange-500 via-orange-600 to-purple-600 rounded-2xl text-white text-center">
          <div className="mb-4">
            <span className="text-3xl sm:text-4xl">✨</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-3">
            사주로 <span className="underline">언제</span>가 좋은지 알고,<br className="hidden sm:block" />
            타로로 <span className="underline">지금 무엇</span>을 해야 할지 정리해요
          </h3>
          <p className="text-sm sm:text-base text-orange-50">
            상담이 끝나면 "막연한 궁금증"이 "실행 가능한 계획"으로 바뀝니다
          </p>
        </div>
      </div>
    </section>
  );
}