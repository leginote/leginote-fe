"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PDFViewerProps {
  onClose: () => void;
}

export default function PDFViewer({ onClose }: PDFViewerProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-medium">
          대법원 2006. 9. 14. 선고 2004도6432 판결
        </h3>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 p-4">
        {/* This is a placeholder for the actual PDF content */}
        <div className="bg-white h-full rounded-lg p-6 shadow-sm">
          <h4 className="font-medium mb-4">판시사항</h4>
          <p className="text-sm text-gray-600 mb-6">
            [1] 강도를 할 목적에 이르지 않고 준강도할 목적이 있음에 그치는
            경우에 강도예비·음모죄가 성립하는지 여부(소극)
          </p>
          <h4 className="font-medium mb-4">판결요지</h4>
          <p className="text-sm text-gray-600">
            [1] 형법 제342조, 제343조에서 정한 준강도죄는 절도가 재물의 탈환을
            항거하거나 체포를 면탈하거나 죄적을 인멸할 목적으로 폭행 또는 협박을
            가한 때에 성립하는 범죄로서 강도죄와는 별개의 구성요건을 가진 독립된
            범죄이다.
          </p>
        </div>
      </div>
    </div>
  );
}
