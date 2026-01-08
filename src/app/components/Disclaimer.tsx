import { AlertCircle } from "lucide-react";

export default function Disclaimer() {
  return (
    <section className="py-10 sm:py-12 bg-gray-50">
      <div className="px-4 sm:px-8">
        <div className="bg-white rounded-xl border-2 border-gray-300 p-6 sm:p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                면책 및 주의사항
              </h3>
              <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
                <p>
                  • 본 상담은 사주와 타로를 활용한 <span className="font-medium">참고 정보</span>를 제공하며, 최종 선택과 책임은 본인에게 있습니다.
                </p>
                <p>
                  • 의학적 진단, 법률 자문, 투자 조언을 대체할 수 없으며, 해당 영역은 반드시 전문가와 상담하시기 바랍니다.
                </p>
                <p>
                  • 상담 내용은 개인의 프라이버시를 존중하며, 외부에 공유되지 않습니다.
                </p>
                <p>
                  • 결과에 대한 해석은 상담사의 경험과 관점에 따라 달라질 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}