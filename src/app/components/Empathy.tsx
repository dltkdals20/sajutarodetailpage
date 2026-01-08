import { Check } from "lucide-react";

export default function Empathy() {
  const checkItems = [
    "이직/사업/재물/관계… 방향이 흐릿하다",
    "선택지가 많아 우선순위가 안 잡힌다",
    "결정만 하려면 불안해진다",
    "같은 패턴이 반복된다",
    "계획이 늘 흐지부지 끝난다",
    "올해는 '감'이 아니라 기준이 필요하다"
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="px-4 sm:px-8">
        <h2 className="text-2xl sm:text-3xl text-center mb-10 text-gray-800">
          혹시 지금, 이런 상태인가요?
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {checkItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 p-4 bg-orange-50/50 rounded-lg border border-orange-100 hover:border-orange-300 transition-colors"
            >
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            하나라도 해당된다면, 이번 상담은 <span className="font-semibold text-orange-600">'결정의 기준'</span>을 만들어주는 시간이 될 거예요.
          </p>
        </div>
      </div>
    </section>
  );
}