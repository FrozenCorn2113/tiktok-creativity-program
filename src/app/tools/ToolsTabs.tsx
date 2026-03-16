// ToolsTabs — client component for interactive category tabs
// Tools/Resources page v4

"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AffiliateCardGrid } from "@/components/affiliate/affiliate-card-grid";

interface Tool {
  toolName: string;
  slug: string;
  domain: string;
  review: string;
  bestFor: string;
  priceRange: string;
  ctaText: string;
  isEditorsPick: boolean;
}

interface Category {
  id: string;
  label: string;
  description: string;
  tools: Tool[];
}

interface ToolsTabsProps {
  categories: Category[];
}

export function ToolsTabs({ categories }: ToolsTabsProps) {
  return (
    <Tabs defaultValue={categories[0]?.id} className="w-full">
      {/* Sticky tab bar */}
      <div className="bg-white border-b border-border-default sticky top-0 z-10">
        <div className="max-w-container mx-auto px-6">
          <TabsList className="flex gap-0 overflow-x-auto pb-px h-auto bg-transparent rounded-none p-0">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="px-4 py-3 text-sm font-manrope whitespace-nowrap rounded-none border-b-2 border-transparent data-[state=active]:border-brand-primary data-[state=active]:text-brand-ink data-[state=active]:font-semibold text-text-secondary hover:text-text-primary bg-transparent data-[state=active]:bg-transparent"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </div>

      {/* Category sections */}
      {categories.map((cat) => (
        <TabsContent key={cat.id} value={cat.id} className="mt-0">
          <div className="max-w-container mx-auto px-6 py-12" id={cat.id}>
            <h2 className="text-[1.75rem] font-bold text-brand-ink">{cat.label}</h2>
            <p className="text-[1rem] text-text-secondary leading-[1.75] max-w-2xl mt-2 mb-8">
              {cat.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.tools.map((tool) => (
                <AffiliateCardGrid
                  key={tool.slug}
                  toolName={tool.toolName}
                  slug={tool.slug}
                  domain={tool.domain}
                  review={tool.review}
                  bestFor={tool.bestFor}
                  priceRange={tool.priceRange}
                  ctaText={tool.ctaText}
                  isEditorsPick={tool.isEditorsPick}
                />
              ))}
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default ToolsTabs;
