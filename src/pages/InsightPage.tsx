import React, { useState } from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { OutlineButton } from '../components/common/OutlineButton';
import { CTASection } from '../components/common/CTASection';
import { insights, InsightItem, YOUTUBE_SERIES_INFO } from '../data/insights';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  X, 
  Tv, 
  Play, 
  Video
} from 'lucide-react';

export const InsightPage: React.FC = () => {
  const [selectedSeries, setSelectedSeries] = useState<string>('전체');
  const [activeArticle, setActiveArticle] = useState<InsightItem | null>(null);

  const seriesTabs = ['전체', 'AI 보안', '케이스 스터디', 'AI 인재양성'];

  const filteredInsights = selectedSeries === '전체'
    ? insights
    : insights.filter((item) => item.시리즈 === selectedSeries);

  return (
    <div id="insight-page" className="w-full">
      {/* 1. Header Hero */}
      <section className="relative bg-[#F1F5F9] py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 text-xs font-extrabold text-[#0A5EDD] bg-white border border-[#0A5EDD]/20 rounded-full shadow-ds-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#0A5EDD]" />
            <span>AIFORIX INSIGHTS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2937] tracking-tight leading-[1.2]">
            AIFORIX 지식과 인사이트
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl font-bold text-[#0A5EDD] tracking-tight">
            보안 전문가의 실무 수칙부터 현장 중심의 케이스 스터디까지
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            단순 기술 트렌드 소개를 넘어, 기업이 현실적으로 마주하는 보안 리스크와 실전 업무 혁신 기록을 공유합니다.
          </p>
        </div>
      </section>

      {/* 2. 아티클 목록 섹션 */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="FEATURED ARTICLES"
            title="실전 인사이트 아티클"
            subtitle="관심 있는 시리즈를 선택하여 깊이 있는 칼럼을 확인하세요."
            align="center"
          />

          {/* 시리즈 탭 */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {seriesTabs.map((tab) => {
              const isSelected = selectedSeries === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setSelectedSeries(tab)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0A5EDD] text-white shadow-ds-sm'
                      : 'bg-[#F1F5F9] text-[#4B5563] hover:bg-gray-200'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* 아티클 그리드 */}
          {filteredInsights.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredInsights.map((article) => (
                <div
                  key={article.slug}
                  onClick={() => setActiveArticle(article)}
                  className="bg-[#F1F5F9] rounded-[12px] border border-gray-200 p-6 shadow-ds-sm hover:border-[#0A5EDD]/50 hover:bg-white hover:shadow-ds-md transition-all flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-[#0A5EDD] bg-white border border-gray-200 px-2.5 py-0.5 rounded-full">
                        {article.시리즈}
                      </span>
                      <div className="flex items-center gap-2 text-[#9CA3AF] text-[11px]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.날짜}
                        </span>
                        {article.readTime && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="font-bold text-[#1F2937] text-base sm:text-lg mb-2 leading-snug group-hover:text-[#0A5EDD] transition-colors">
                      {article.제목}
                    </h3>

                    <p className="text-xs text-[#4B5563] leading-relaxed mb-6 line-clamp-3">
                      {article.요약}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {article.tags?.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] text-[#9CA3AF]">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#0A5EDD] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      전문 읽기
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-[#9CA3AF] text-sm">
              해당 시리즈의 아티클이 준비 중입니다. 곧 업데이트될 예정입니다.
            </div>
          )}
        </div>
      </section>

      {/* 3. YouTube 방송 출연 시리즈 섹션 */}
      <section className="py-16 md:py-20 bg-[#F1F5F9] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="BROADCAST &amp; MEDIA"
            title="미디어 출연 및 영상 인사이트"
            subtitle="방송 및 공식 채널을 통해 전하는 AIFORIX의 생생한 실무 인사이트입니다."
            align="center"
          />

          <div className="bg-white rounded-[16px] border border-gray-200 p-6 sm:p-8 shadow-ds-sm">
            <div className="flex flex-col lg:row gap-8 items-center">
              {/* Video Player Card / Placeholder */}
              <div className="w-full lg:w-1/2 aspect-video bg-[#111827] rounded-[12px] overflow-hidden relative group flex items-center justify-center shadow-ds-md">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-5">
                  <span className="inline-block text-[10px] font-extrabold bg-[#0A5EDD] text-white px-2 py-0.5 rounded-[4px] uppercase tracking-wider mb-1 w-fit">
                    SPECIAL EPISODE
                  </span>
                  <h4 className="text-white text-sm sm:text-base font-bold leading-tight">
                    {YOUTUBE_SERIES_INFO.title}
                  </h4>
                  <p className="text-gray-300 text-xs mt-1">
                    AI 실무 활용과 기업 디지털 전환 전문가 대담
                  </p>
                </div>

                <div className="w-14 h-14 rounded-full bg-white/90 text-[#0A5EDD] flex items-center justify-center shadow-ds-md group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-[#0A5EDD] ml-1" />
                </div>
              </div>

              {/* Series Info & Episodes */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A5EDD] bg-[#E6F0FF] px-2.5 py-1 rounded-[6px] mb-2">
                    <Tv className="w-3.5 h-3.5" />
                    <span>유통물류TV 출연 시리즈</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#1F2937] mb-2">
                    {YOUTUBE_SERIES_INFO.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6">
                    {YOUTUBE_SERIES_INFO.description}
                  </p>

                  <div className="space-y-3">
                    {YOUTUBE_SERIES_INFO.episodes.map((ep, idx) => (
                      <div
                        key={idx}
                        className="bg-[#F1F5F9] p-3.5 rounded-[10px] border border-gray-200 flex items-start justify-between gap-3"
                      >
                        <div className="flex items-start gap-2.5">
                          <Video className="w-4 h-4 text-[#0A5EDD] shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-bold text-[#1F2937] text-xs sm:text-sm">
                              {ep.title}
                            </h5>
                            <p className="text-[11px] text-[#4B5563] mt-0.5">
                              {ep.desc}
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold text-[#9CA3AF] bg-white px-2 py-0.5 rounded-[4px] border border-gray-200 shrink-0">
                          {ep.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 아티클 상세 모달 */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div 
            className="bg-white rounded-[16px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-ds-xl border border-gray-200 flex flex-col animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-7 border-b border-gray-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#0A5EDD] bg-[#E6F0FF] px-2.5 py-0.5 rounded-full">
                    {activeArticle.시리즈}
                  </span>
                  <span className="text-xs text-[#9CA3AF]">· {activeArticle.날짜}</span>
                  {activeArticle.readTime && (
                    <span className="text-xs text-[#9CA3AF]">· 읽는 시간 {activeArticle.readTime}</span>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1F2937]">
                  {activeArticle.제목}
                </h3>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1.5 rounded-lg text-[#9CA3AF] hover:text-[#1F2937] hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="bg-[#F1F5F9] p-4 rounded-[10px] border border-gray-200 text-xs sm:text-sm font-semibold text-[#1F2937] leading-relaxed italic">
                &ldquo;{activeArticle.요약}&rdquo;
              </div>

              {/* Article Content Render */}
              <div className="text-[#4B5563] space-y-4 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                {activeArticle.본문}
              </div>

              {/* Tags */}
              {activeArticle.tags && (
                <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-1.5">
                  {activeArticle.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#F1F5F9] text-[#0A5EDD] px-2.5 py-1 rounded-full font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-5 sm:p-6 border-t border-gray-100 bg-[#F9FAFB] flex items-center justify-end">
              <OutlineButton size="sm" onClick={() => setActiveArticle(null)}>
                닫기
              </OutlineButton>
            </div>
          </div>
        </div>
      )}

      {/* 5. CTASection */}
      <CTASection
        title="기업 맞춤형 AI 인사이트 세미나를 신청하세요"
        subtitle="사내 임직원과 리더십을 위한 AI 보안 및 업무 자동화 특강을 제공합니다."
        buttonText="특강 문의하기"
        buttonTarget="/contact"
      />
    </div>
  );
};
