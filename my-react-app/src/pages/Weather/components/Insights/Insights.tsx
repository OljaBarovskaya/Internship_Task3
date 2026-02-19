import ReactMarkdown from "react-markdown";
import * as S from "./Insights.styled";
import { useState } from "react";
import Chevron from "@/assets/img/chevron.svg?react";
import { UNEXPECTED_ERROR } from "@/constants";

export function Insights({ insightsData }: { insightsData: string | null }) {
  const [showInsigts, setShowInsights] = useState(false);

  if (insightsData === null) {
    return <p> {UNEXPECTED_ERROR}</p>;
  }

  return (
    <div className="flex">
      <S.InsightsContainer $showInsights={showInsigts}>
        <S.InsightsContent>
          <ReactMarkdown>{insightsData}</ReactMarkdown>
        </S.InsightsContent>
      </S.InsightsContainer>
      <S.Button onClick={() => setShowInsights(!showInsigts)}>
        {showInsigts ? "Hide" : "Show"} insights
        <Chevron
          className={`transition-transform duration-300 ${showInsigts ? "rotate-180" : "rotate-0"}`}
        />
      </S.Button>
    </div>
  );
}
