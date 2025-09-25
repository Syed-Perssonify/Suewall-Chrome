import React, { useState } from "react";
import { CaseStatusBadge } from "./caseItem";
import { formatClassPeriod } from "@/commen/config/data";

export interface Case {
  id: string;
  title: string;
  status: string;
  ticker?: string;
  caseId?: string;
  stockCaseId: string;
  classStart?: string;
  classEnd?: string;
  applied?: boolean;
}

interface CaseSectionProps {
  title: string;
  cases: Case[];
}

export const CaseSection: React.FC<
  CaseSectionProps & { onExplore?: (id: string) => Promise<void> | void }
> = ({ title, cases, onExplore }) => {
  const [loadingCaseId, setLoadingCaseId] = useState<string | null>(null);

  const handleExplore = async (id: string) => {
    setLoadingCaseId(id);
    try {
      await onExplore?.(id);
    } finally {
      setLoadingCaseId(null);
    }
  };

  return (
    <section className="mb-6">
      <h2 className="font-bold text-base mb-2 mt-3 text-primary text-center">
        {title}
      </h2>
      {cases.length === 0 ? (
        <div className="text-gray-400">No cases found.</div>
      ) : (
        <div className="flex flex-col gap-4">
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              className={`transition-all rounded-lg shadow-sm p-3 flex items-center border gap-4 ${
                caseItem.applied
                  ? "opacity-60 border-primary cursor-not-allowed"
                  : "border-gray-500"
              } bg-white`}
            >
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2">
                  <label className="font-semibold text-[0.7rem] text-black flex items-center gap-2">
                    {caseItem.title}
                  </label>
                </div>
                <div className="flex items-center gap-2 mt-1 text-[0.44rem] text-gray-400 font-bold">
                  {caseItem.ticker && (
                    <>
                      <div className="flex items-center gap-1">
                        {caseItem.ticker} - Class Period:{" "}
                        {formatClassPeriod(
                          caseItem.classStart,
                          caseItem.classEnd
                        )}
                      </div>{" "}
                      <CaseStatusBadge status={caseItem.status} />
                    </>
                  )}
                </div>
              </div>
              {onExplore && (
                <button
                  className="ml-auto bg-primary text-white px-3 py-1 rounded text-[0.74rem] font-semibold hover:bg-primary-dark transition-all cursor-pointer flex items-center justify-center min-w-[20px] h-[25px]"
                  onClick={() =>
                    handleExplore(caseItem.stockCaseId || caseItem.id)
                  }
                  disabled={caseItem.applied || loadingCaseId === caseItem.id}
                >
                  {loadingCaseId === caseItem.id ? (
                    <span className="w-8 h-5 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 200"
                      >
                        <circle
                          fill="#FFFFFF"
                          stroke="#FFFFFF"
                          stroke-width="15"
                          r="15"
                          cx="40"
                          cy="65"
                        >
                          <animate
                            attributeName="cy"
                            calcMode="spline"
                            dur="2"
                            values="65;135;65;"
                            keySplines=".5 0 .5 1;.5 0 .5 1"
                            repeatCount="indefinite"
                            begin="-.4"
                          ></animate>
                        </circle>
                        <circle
                          fill="#FFFFFF"
                          stroke="#FFFFFF"
                          stroke-width="15"
                          r="15"
                          cx="100"
                          cy="65"
                        >
                          <animate
                            attributeName="cy"
                            calcMode="spline"
                            dur="2"
                            values="65;135;65;"
                            keySplines=".5 0 .5 1;.5 0 .5 1"
                            repeatCount="indefinite"
                            begin="-.2"
                          ></animate>
                        </circle>
                        <circle
                          fill="#FFFFFF"
                          stroke="#FFFFFF"
                          stroke-width="15"
                          r="15"
                          cx="160"
                          cy="65"
                        >
                          <animate
                            attributeName="cy"
                            calcMode="spline"
                            dur="2"
                            values="65;135;65;"
                            keySplines=".5 0 .5 1;.5 0 .5 1"
                            repeatCount="indefinite"
                            begin="0"
                          ></animate>
                        </circle>
                      </svg>
                    </span>
                  ) : (
                    "More Info"
                  )}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CaseSection;
