export default function Header() {
  return (
    <header className="bg-white border-b border-orange-100 shadow-sm">
      <div className="px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                결 상담소
              </span>
              <span className="text-gray-400">|</span>
              <span className="text-base text-gray-600">결쌤</span>
            </div>
          </div>

          {/* Badge & Buttons */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm border border-orange-200">
              온라인 상담 | 네이버 톡톡·문자·전화·줌
            </span>
            
            <a href="https://talk.naver.com/WI2DRB9" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block px-4 py-2 text-sm text-gray-700 hover:text-orange-600 transition-colors">
              문의하기
            </a>

            <a href="https://talk.naver.com/WI2DRB9" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg text-sm sm:text-base">
              상담 신청하기
            </a>
          </div>
        </div>

        {/* Mobile badge */}
        <div className="sm:hidden mt-3">
          <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs border border-orange-200">
            온라인 상담 | 네이버 톡톡·문자·전화·줌
          </span>
        </div>
      </div>
    </header>
  );
}