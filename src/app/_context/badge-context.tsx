"use client";

import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { CardData } from '../_types/card';

interface BadgeContextType {
  cardData: CardData | null;
  updateCardData: (data: CardData) => void;
  shouldRegenerateBadge: boolean;
  triggerBadgeRegeneration: () => void;
  resetBadgeRegeneration: () => void;
}

const BadgeContext = createContext<BadgeContextType | undefined>(undefined);

export const useBadgeContext = () => {
  const context = useContext(BadgeContext);
  if (!context) {
    throw new Error('useBadgeContext must be used within a BadgeProvider');
  }
  return context;
};

interface BadgeProviderProps {
  children: ReactNode;
}

export const BadgeProvider: React.FC<BadgeProviderProps> = ({ children }) => {
  const [cardData, setCardData] = useState<CardData | null>(null);
  const [shouldRegenerateBadge, setShouldRegenerateBadge] = useState(false);

  const updateCardData = (data: CardData) => {
    setCardData(data);
  };

  const triggerBadgeRegeneration = () => {
    setShouldRegenerateBadge(true);
  };

  const resetBadgeRegeneration = () => {
    setShouldRegenerateBadge(false);
  };

  return (
    <BadgeContext.Provider
      value={{
        cardData,
        updateCardData,
        shouldRegenerateBadge,
        triggerBadgeRegeneration,
        resetBadgeRegeneration,
      }}
    >
      {children}
    </BadgeContext.Provider>
  );
}; 