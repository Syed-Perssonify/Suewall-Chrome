"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export const Main = ({
  activeCases,
  token,
}: {
  activeCases: any[];
  token: string | null;
}) => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCases, setSelectedCases] = useState<number[]>([]);

  const handleCaseSelect = (index: number) => {
    setSelectedCases((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleJoinClickWithNotification = async () => {
    if (selectedCases.length === 0) return;
    // Simulate loading
    setIsLoading(true);
    try {
      console.log("Selected Cases to join:", selectedCases);
      const casesToJoin = selectedCases.map((i) => activeCases[i]);
      console.log("Cases to join details:", casesToJoin);
      const stockIds = casesToJoin.map((c) => c?._id) || [];
      console.log("Stock IDs to join:", stockIds);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/stock/apply-cases`,
        {
          stockIds,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Join case response:", response.data);
      window.parent.postMessage(
        { type: "CACHE_UPDATE", payload: { stockIds, selectedCases } },
        "*"
      );
      setShowThankYou(true);
      setSelectedCases([]);
    } catch (error) {
      console.error("Error joining case:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {showThankYou ? (
          <div className="flex flex-col items-center justify-center text-center p-8">
            <svg
              width="80"
              height="80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-green-500 mb-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              Thank you for joining!
            </h2>
            <p className="text-xl text-gray-700">
              We will get back to you soon.
            </p>
          </div>
        ) : (
          <>
            {isLoading ? (
              <div className="flex justify-center items-center py-8">
                <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-600 mr-3"></span>
                <span className="text-gray-600 text-lg">Loading...</span>
              </div>
            ) : (
              <>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="space-y-3 text-center">
                    <p className="text-lg text-gray-700">
                      You have{" "}
                      <span className="font-bold text-green-600">
                        {activeCases.length}
                      </span>{" "}
                      active cases.
                    </p>
                  </div>
                </div>
                {activeCases.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      Active Cases
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeCases.map((caseItem, index) => (
                        <div
                          key={index}
                          className={`transition-all p-4 hover:border-green-300 ${
                            caseItem.applied
                              ? "opacity-60 border-green-200"
                              : "border-gray-200"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={selectedCases.includes(index)}
                              onChange={() => handleCaseSelect(index)}
                              id={`case-checkbox-${index}`}
                              className="accent-green-600 w-5 h-5"
                            />
                            <label
                              htmlFor={`case-checkbox-${index}`}
                              className="font-medium text-gray-800 cursor-pointer flex items-center gap-2"
                            >
                              {caseItem.name}
                              {caseItem.applied && (
                                <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full">
                                  Applied
                                </span>
                              )}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-center gap-4 pb-6">
                  {activeCases?.length > 0 && (
                    <button
                      className="bg-green-600 text-white py-3 px-8 rounded-lg shadow-lg text-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all transform hover:scale-105"
                      onClick={handleJoinClickWithNotification}
                      disabled={selectedCases.length === 0}
                    >
                      Join Case ({selectedCases.length})
                    </button>
                  )}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};
