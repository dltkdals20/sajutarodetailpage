import { FileText, Sparkles, BrainCircuit } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import reportImage from "figma:asset/b8fda59c75cfbd39bbd9e072f289677406fb841e.png";
import tarotSelectImage from "figma:asset/f3061664269367cb35afd176dcfa2a0d7d4dc07c.png";
import tarotResultImage from "figma:asset/9768ca64395bc02729106b102a9999a4fe21c5b0.png";
import tciImage from "figma:asset/d71f354220b851a4c38302c5cd524688b4a93c37.png";
import hollandImage from "figma:asset/aac2f9e3dba8358bb94a057ce389884a8041406f.png";

export default function Advantages() {
  const advantages = [
    {
      icon: FileText,
      title: "사주 리포트 제공",
      description: "상담 전 상세한 사주 분석 리포트가 먼저 제공됩니다. 타고난 성향, 운세 흐름, 주요 포인트를 문서로 받아보고 상담에 임하실 수 있어요.",
      image: reportImage,
      imageType: "single"
    },
    {
      icon: Sparkles,
      title: "타로카드 직접 뽑기",
      description: "모바일 또는 PC 환경에서 본인이 직접 타로카드를 선택합니다. 나의 에너지로 뽑은 카드이기에 더욱 정확하고 의미있는 리딩이 가능해요.",
      images: [tarotSelectImage, tarotResultImage],
      imageType: "double"
    },
    {
      icon: BrainCircuit,
      title: "심리 진단 추가 가능",
      description: "추가적으로 심리 진단이 필요할 경우, TCI 심리진단 또는 홀랜드 성격유형 검사를 실시할 수 있습니다. 운세와 심리를 결합한 통합 상담이 가능해요.",
      images: [tciImage, hollandImage],
      imageType: "double"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="px-4 sm:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl mb-4 text-gray-800">
            결쌤 사주심리 연구소만의 강점
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            체계적인 준비와 참여형 상담으로 더 깊이있는 결과를 얻을 수 있어요
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-orange-200 shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Icon and Content */}
                <div className="flex gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>

                {/* Example Image */}
                <div className="mt-4 rounded-xl overflow-hidden border border-gray-200">
                  {advantage.imageType === "single" ? (
                    <ImageWithFallback
                      src={advantage.image}
                      alt={`${advantage.title} 예시`}
                      className="w-full h-auto"
                    />
                  ) : (
                    <div className="grid grid-cols-2 gap-2 p-2 bg-gray-50">
                      {advantage.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="rounded-lg overflow-hidden border border-gray-200 h-80">
                          <ImageWithFallback
                            src={img}
                            alt={`${advantage.title} 예시 ${imgIndex + 1}`}
                            className="w-full h-full object-cover object-[center_15%]"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}