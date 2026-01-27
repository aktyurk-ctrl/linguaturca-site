"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface LeadModalConfig {
  title: string;
  subtitle: string;
  defaultFormat?: string;
  source?: string;
  level?: string;
  startDate?: string;
}

interface LeadModalContextType {
  isOpen: boolean;
  config: LeadModalConfig | null;
  openModal: (config: LeadModalConfig) => void;
  closeModal: () => void;
}

const LeadModalContext = createContext<LeadModalContextType | undefined>(undefined);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState<LeadModalConfig | null>(null);

  const openModal = (newConfig: LeadModalConfig) => {
    setConfig(newConfig);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Keep config for a moment to allow animations
    setTimeout(() => setConfig(null), 300);
  };

  return (
    <LeadModalContext.Provider value={{ isOpen, config, openModal, closeModal }}>
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error("useLeadModal must be used within LeadModalProvider");
  }
  return context;
}
