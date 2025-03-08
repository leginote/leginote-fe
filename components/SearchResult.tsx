"use client";

import { useState } from "react";
import { Search, X, ChevronUp, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import PDFViewer from "./pdf-viewer";

export default function SearchResult() {
  const [isPDFOpen, setIsPDFOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState({
    caseType: true,
    court: true,
  });

  const toggleFilter = (filter) => {
    setFiltersOpen((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  return (
    <div className="h-screen flex">
      <div className="flex-1 max-w-full overflow-auto">
        <div className="max-w-5xl mx-auto p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">LegiNote</h1>
            <div className="relative flex-1 mx-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              <Input
                className="pl-10 pr-8 py-2 w-full bg-gray-50"
                placeholder="검색어를 입력하세요"
                defaultValue="강도"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <Tabs defaultValue="판례" className="mb-6">
            <TabsList className="border-b w-full justify-start rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger
                value="판례"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange-500 data-[state=active]:text-orange-500"
              >
                판례
              </TabsTrigger>
              <TabsTrigger
                value="법령"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange-500"
              >
                법령
              </TabsTrigger>
              <TabsTrigger
                value="주석서"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange-500"
              >
                주석서
              </TabsTrigger>
              <TabsTrigger
                value="논문"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange-500"
              >
                논문
              </TabsTrigger>
              <TabsTrigger
                value="결정례"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange-500"
              >
                결정례
                <Badge className="ml-1 bg-orange-500">NEW</Badge>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Filter Pills */}
          <div className="flex gap-2 mb-6">
            <Button
              variant="secondary"
              size="sm"
              className="rounded-full bg-gray-700 text-white hover:bg-gray-600"
            >
              전문판례
            </Button>
            <Button variant="secondary" size="sm" className="rounded-full">
              미리보기 판례
            </Button>
            <Button variant="secondary" size="sm" className="rounded-full">
              전체
            </Button>
            <div className="ml-auto">
              <Button variant="secondary" size="sm" className="rounded-full">
                # 정렬할 판례보기
              </Button>
            </div>
          </div>

          {/* Search Results */}
          <div className="flex gap-8">
            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-4">
                15,980건의 검색 결과
              </div>

              {/* Result Items */}
              <div className="space-y-6">
                <div
                  role="button"
                  onClick={() => setIsPDFOpen(true)}
                  className="block w-full text-left border rounded-lg p-4 hover:border-gray-400 transition-colors"
                >
                  <h3 className="font-medium mb-2">
                    대법원 2006. 9. 14. 선고 2004도6432 판결 강도예비
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    [1] 강도를 할 목적에 이르지 않고 준강도할 목적이 있음에
                    그치는 경우에 강도예비·음모죄가 성립하는지 여부(소극) [2]
                    항소심이 이유에서만 항소가 이유 없다고 판단하고 주문에서는
                    항소기각의 선고를 하지 않은 경우에 형사소송법 제364조
                    제4항을 위반한 위법이 있는지 여부(적극)
                  </p>
                  <Badge variant="outline" className="text-xs">
                    피기(자법), 전적 10년
                  </Badge>
                </div>

                <div
                  role="button"
                  onClick={() => setIsPDFOpen(true)}
                  className="block w-full text-left border rounded-lg p-4 hover:border-gray-400 transition-colors"
                >
                  <h3 className="font-medium mb-2">
                    대법원 2013. 4. 18. 선고 2013노55 판결
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    이 사건에서 피고인의 강도범행 횟수가 1회에 불과하지만,
                    피고인에 대한 법정절차적조치 기재에 의하면 피고인이 1989년경
                    강도상해죄로 징역 4년형, 1994년경 강도상해죄로 징역 5년형,
                    2000년경 특정범죄가중처벌등에관한법률위반(강도상해등)죄로
                    징역 6년형을 각 선고받았고, 2006년경 다시 2회의 상습강도
                    범행을 저질러...
                  </p>
                  <Badge variant="outline" className="text-xs">
                    피기(자법), 전적 7년
                  </Badge>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="w-64 flex-shrink-0">
              {/* Case Type Filter - 버튼 중첩 문제 해결 */}
              <div className="mb-4">
                <div
                  className="flex items-center justify-between w-full py-2 cursor-pointer"
                  onClick={() => toggleFilter("caseType")}
                >
                  <span className="font-medium">사건 종류</span>
                  <span className="text-gray-500">
                    {filtersOpen.caseType ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </span>
                </div>
                {filtersOpen.caseType && (
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="형사" />
                      <label htmlFor="형사" className="text-sm">
                        형사
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="민사" />
                      <label htmlFor="민사" className="text-sm">
                        민사
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="행정" />
                      <label htmlFor="행정" className="text-sm">
                        행정
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="헌법" />
                      <label htmlFor="헌법" className="text-sm">
                        헌법
                      </label>
                    </div>
                  </div>
                )}
              </div>

              {/* Court Filter - 버튼 중첩 문제 해결 */}
              <div className="mb-4">
                <div
                  className="flex items-center justify-between w-full py-2 cursor-pointer"
                  onClick={() => toggleFilter("court")}
                >
                  <span className="font-medium">법원</span>
                  <span className="text-gray-500">
                    {filtersOpen.court ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </span>
                </div>
                {filtersOpen.court && (
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="대법원" />
                      <label htmlFor="대법원" className="text-sm">
                        대법원
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="고등법원" />
                      <label htmlFor="고등법원" className="text-sm">
                        고등법원/특허법원/고등군사법원
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="지방법원" />
                      <label htmlFor="지방법원" className="text-sm">
                        지방법원/행정법원/가정법원/회생법원
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer Panel */}
      <div
        className={`w-[600px] border-l bg-white transition-transform duration-300 fixed top-0 right-0 bottom-0 transform ${
          isPDFOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {isPDFOpen && <PDFViewer onClose={() => setIsPDFOpen(false)} />}
      </div>
    </div>
  );
}
