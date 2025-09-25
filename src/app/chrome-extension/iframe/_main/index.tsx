"use client";

import axios from "axios";
import React from "react";
import { Case, CaseSection } from "../components/caseSection";

export const Main = ({
  activeCases,
  token,
}: {
  activeCases: any[];
  token: string | null;
}) => {
  const mapToSectionCase = (caseItem: any): Case => ({
    id: caseItem._id ?? caseItem.id,
    title: caseItem.name ?? caseItem.title,
    status: caseItem.status,
    ticker: caseItem.ticker,
    caseId: caseItem.caseId ?? caseItem.stockCaseId,
    classStart: caseItem.classStart,
    classEnd: caseItem.classEnd,
    applied: caseItem.applied,
    stockCaseId: String(caseItem.stockCaseId ?? caseItem.id ?? ""),
  });
  const [showManualScan, setShowManualScan] = React.useState(false);

  const activeList: Case[] = React.useMemo(
    () =>
      activeCases
        .filter((c: any) => c.status === "active")
        .map(mapToSectionCase),
    [activeCases]
  );
  const newList: Case[] = React.useMemo(
    () =>
      activeCases.filter((c: any) => c.status === "new").map(mapToSectionCase),
    [activeCases]
  );
  const settlementList: Case[] = React.useMemo(
    () =>
      activeCases
        .filter((c: any) => c.status === "settlement")
        .map(mapToSectionCase),
    [activeCases]
  );

  const handleExplore = async (stockCaseId: string) => {
    try {
      const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/stock/explore-link/${stockCaseId}`,
        { headers }
      );
      if (data?.exploreLink) {
        window.open(data.exploreLink, "_blank");
      }
    } catch (err) {
      console.error("Error fetching explore link:", err);
    }
  };

  return (
    <>
      <div className="w-full bg-white fixed top-0 left-0 right-0 z-50">
        <div className="bg-gradient-to-r from-primary to-secondary text-white p-3 text-center">
          <img
            src="/sws-logo.png"
            alt="Logo"
            className="max-w-48 mx-auto mb-2"
          />
          <h1 className="text-lg font-bold">Active Case Checker</h1>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50 p-4 pt-32">
        {activeList.length > 0 && (
          <CaseSection
            title="Active Cases:"
            cases={activeList}
            onExplore={handleExplore}
          />
        )}
        {newList.length > 0 && (
          <CaseSection
            title="New Cases:"
            cases={newList}
            onExplore={handleExplore}
          />
        )}
        {settlementList.length > 0 && (
          <CaseSection
            title="Settlement Cases:"
            cases={settlementList}
            onExplore={handleExplore}
          />
        )}
      </div>
    </>
  );
};
