import { BookAIcon, BookKey, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { BookText } from "lucide-react";
import React from "react";

export default function LeginoteMain() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="text-xl font-bold">LegiNote.</div>
        <div className="flex items-center gap-4">
          <button className="text-orange-500 border border-orange-500 rounded-full px-4 py-1">
            LegiNote Plus
          </button>
          <button className="text-gray-600">로그인</button>
          <button className="bg-gray-900 text-white px-4 py-1 rounded">
            회원가입
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-3xl font-bold">
            국내 최다 판례 무료 검색, LegiNote.
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <span>전체 판례 4,916,681건</span>
            <span>하급심 판례 4,716,648건</span>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="키워드를 검색하세요"
              className="w-full px-6 py-3 rounded-full text-black"
            />
            <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold">
            LegiNote의 스마트한 기능 활용하기
          </h2>
          <span className="text-gray-500">인증회원 안내</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard
            title="판례 요청"
            description="필요한 판례 15분 내로 받기"
            icon={BookText}
            tag="인증회원 특혜"
          />
          <FeatureCard
            title="서면으로 검색"
            description="서면, 소장, 법률 문서로 검색"
            icon={BookText}
            tag="인증회원 특혜"
          />
          <FeatureCard
            title="AI 요점보기"
            description="판결문 요약한 핵심키 추출"
            icon={BookText}
          />
          <FeatureCard
            title="쟁점별 판례보기"
            description="쟁점 키워드별 판례 보기"
            icon={BookText}
          />
          <FeatureCard
            title="보관함"
            description="사건별 판례 보관 및 정리"
            icon={BookText}
          />
        </div>
      </div>

      {/* Plus Section */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-bold mb-8">
          LegiNote Plus 하나로 충분합니다.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <PlusCard
            icon={BookAIcon}
            title="무제한 문서 열람 & 판례요청"
            description="LegiNote의 모든 기능을 무제한으로"
          />
          <PlusCard
            icon={BookAIcon}
            title="주석서"
            description="한국사법행정학회의 모든 주석서"
          />
          <PlusCard
            icon={BookAIcon}
            title="논문"
            description="법학 행정학이 14만건 이상 논문"
          />
        </div>
        <button className="w-full bg-orange-500 text-white py-4 rounded-lg font-medium">
          월 24,750원으로 LegiNote의 모든 기능 이용
        </button>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon,
  tag,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  tag?: string;
}) {
  return (
    <Card className="p-6 space-y-4">
      {tag && (
        <span className="inline-block bg-blue-50 text-blue-600 text-sm px-2 py-1 rounded">
          {tag}
        </span>
      )}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-bold mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        {React.createElement(icon, { width: 24, height: 24 })}{" "}
      </div>
    </Card>
  );
}

function PlusCard({
  icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6 flex items-start gap-4">
      {React.createElement(icon, { width: 24, height: 24 })}{" "}
      <div>
        <h3 className="font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Card>
  );
}
