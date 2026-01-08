import { MessageSquare, Phone, Video } from "lucide-react";

export default function Channels() {
  const channels = [
    {
      icon: MessageSquare,
      name: "네이버 톡톡",
      tag: "기록 남기며 편하게",
      description: "예약 시간 내 집중 진행",
      features: ["대화 기록 보관", "편한 시간에 질문", "이미지/파일 공유 가능"]
    },
    {
      icon: Phone,
      name: "전화",
      tag: "빠른 정리",
      description: "사전 질문 필수 + 결론 3줄 정리",
      features: ["즉각적인 피드백", "집중 상담", "핵심만 빠르게"]
    },
    {
      icon: Video,
      name: "줌",
      tag: "깊은 대화",
      description: "조용한 환경 권장",
      features: ["대면 상담 느낌", "표정/반응 교류", "화면 공유 가능"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="px-4 sm:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl mb-4 text-gray-800">
            내게 편한 방식으로 온라인 상담이 가능합니다
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            채널이 달라도 상담의 핵심은 동일하고, 전달 방식만 달라요.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-orange-200 shadow-sm hover:shadow-lg hover:border-orange-400 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-2 py-1 bg-orange-50 text-orange-600 rounded text-xs border border-orange-200">
                    {channel.tag}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {channel.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {channel.description}
                </p>

                <ul className="space-y-2">
                  {channel.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-orange-500 mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            * 모든 채널에서 사주 → 타로 순서로 진행되며, 상담 품질은 동일합니다
          </p>
        </div>
      </div>
    </section>
  );
}