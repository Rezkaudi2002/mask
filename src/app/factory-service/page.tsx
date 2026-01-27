"use client";
import React from "react";
import { Index as FactoryServicePage } from "@/components/pages/factory-service/index";
import { FactoryServiceSchema, BreadcrumbSchema, generateBreadcrumbs } from '@/components/seo/schemas';

const FactoryService: React.FC = () => {
  return (
    <>
      {/* ✅ Structured Data */}
      <FactoryServiceSchema />
      <BreadcrumbSchema items={generateBreadcrumbs.factoryService()} />
      <FactoryServicePage />
    </>
  );
};

export default FactoryService;
