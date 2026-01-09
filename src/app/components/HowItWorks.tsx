import { MessageSquare, CreditCard, Calendar, FileText, PhoneCall, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: "네이버 톡톡으로 문의",
      description: "궁금한 점을 먼저 상담하고 시작하세요"
    },
    {
      icon: CreditCard,
      title: "결제",
      description: "상담 신청 및 간편 결제를 진행해요"
    },
    {
      icon: Calendar,
      title: "채널 선택 & 일정 확정",
      description: "네이버 톡톡/전화/줌 중 편한 방식을 선택하고 일정을 조율해요"
    },
    {
      icon: FileText,
      title: "사전 질문 전달",
      description: "생년월일/시간(가능 시) + 현재 상황 + 궁금한 항목을 보내주세요"
    },
    {
      icon: PhoneCall,
      title: "상담시간에 결쌤이 연락",
      description: "약속된 시간에 선택하신 채널로 결쌤이 연락드려요"
    },
    {
      icon: CheckCircle,
      title: "상담 완료",
      description: "사주 흐름과 타로 리딩으로 2026년 운세 상담이 마무리됩니다"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="px-4 sm:px-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-center mb-10 text-gray-800 px-2">
          진행 방식은 이렇게 간단해요
        </h2>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden sm:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-orange-300 to-orange-500"></div>

          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex items-start gap-3 sm:gap-4 lg:gap-6">
                  {/* Icon with number */}
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-orange-600">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1 sm:pt-2 pb-4">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}