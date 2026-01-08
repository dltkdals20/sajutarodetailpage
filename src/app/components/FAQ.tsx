import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "왜 사주와 타로를 둘 다 보나요?",
      answer: "사주는 태어난 정보로 보는 '정해진 큰 흐름'이고, 타로는 지금의 상황이 만든 '현재 기운'을 담습니다. 두 가지를 함께 보면 2026년의 큰 방향과 지금 마주한 선택지를 모두 이해할 수 있어, 더 입체적이고 현실적인 조언이 가능해요."
    },
    {
      question: "출생 시간을 모르면 어떻게 하나요?",
      answer: "출생 시간이 없어도 상담 가능합니다. 일간과 일주를 중심으로 사주를 보고, 타로로 현재 기운을 더 세밀하게 보완하기 때문에 충분히 의미 있는 상담이 됩니다. 다만 시간을 아신다면 더 정확한 분석이 가능해요."
    },
    {
      question: "질문 개수에 제한이 있나요?",
      answer: "옵션별로 다릅니다. 라이트는 1가지 핵심 질문, 스탠다드는 2-3가지, 시그니처는 모든 영역을 다룹니다. 하지만 상담 시간 내에서 자연스럽게 여러 주제가 연결되어 다뤄지는 경우가 많아요."
    },
    {
      question: "어떤 채널을 선택하는 게 좋을까요?",
      answer: "기록을 남기고 싶다면 톡톡, 빠른 정리를 원한다면 전화, 깊은 대화를 원한다면 줌을 추천합니다. 채널이 달라도 상담의 핵심 내용은 동일하며, 전달 방식만 달라요."
    },
    {
      question: "일정 변경이나 취소는 가능한가요?",
      answer: "상담 24시간 전까지는 일정 변경이 가능합니다. 취소는 48시간 전까지 전액 환불, 24시간 전까지는 50% 환불이 가능하며, 그 이후는 환불이 어려운 점 양해 부탁드립니다."
    },
    {
      question: "건강운은 의학적 진단인가요?",
      answer: "아닙니다. 사주와 타로로 보는 건강운은 기운의 흐름과 주의가 필요한 영역을 참고하는 것일 뿐, 의학적 진단이나 치료를 대체할 수 없습니다. 건강 문제는 반드시 전문 의료기관을 방문하시기 바랍니다."
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="px-4 sm:px-8">
        <h2 className="text-2xl sm:text-3xl text-center mb-10 text-gray-800">
          자주 묻는 질문
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-orange-50 transition-colors"
              >
                <span className="font-medium text-gray-800 pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-orange-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-orange-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}