import { Shield, Heart, Zap, Phone, VideoOff } from "lucide-react";

export default function Principles() {
  const principles = [
    {
      icon: Shield,
      title: "무섭게 말하지 않습니다",
      description: "불안을 조장하지 않고, 있는 그대로 이해를 돕습니다"
    },
    {
      icon: Heart,
      title: "판단보다 이해를 우선합니다",
      description: "옳고 그름이 아닌, 흐름과 변수를 함께 봅니다"
    },
    {
      icon: Zap,
      title: "실행으로 끝냅니다",
      description: "상담 후 구체적인 방향과 실천 가능한 조언을 제공합니다"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="px-4 sm:px-8">
        {/* 상담 방식 안내 카드들 */}
        <div className="max-w-2xl mx-auto mb-12 space-y-4">
          {/* 전화 상담 안내 */}
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-300 rounded-2xl p-6 sm:p-8 text-center shadow-md">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-4 shadow-lg">
              <Phone className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              전화 상담시 결쌤이 먼저 연락을 드립니다
            </h3>
            <p className="text-base sm:text-lg text-gray-700">
              먼저 연락을 드리니 차분히 기다리시면 됩니다.
            </p>
          </div>

          {/* 줌 상담 안내 */}
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-300 rounded-2xl p-6 sm:p-8 text-center shadow-md">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-4 shadow-lg">
              <VideoOff className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              줌 또한 얼굴 화면을 끄고 음성으로만 진행됩니다
            </h3>
            <p className="text-base sm:text-lg text-gray-700">
              얼굴 노출 걱정은 안하셔도 됩니다.
            </p>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl text-center mb-10 text-gray-800">
          결 상담소의 약속
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 bg-orange-50 rounded-xl border border-orange-200 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}