'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ProgressContextType {
    progress: Record<string, number>;
    updateProgress: (categoryId: string, score: number) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
    const [progress, setProgress] = useState<Record<string, number>>({});

    const updateProgress = (categoryId: string, score: number) => {
        setProgress(prevProgress => ({
            ...prevProgress,
            [categoryId]: Math.max(prevProgress[categoryId] || 0, score),
        }));
    };

    return (
        <ProgressContext.Provider value={{ progress, updateProgress }}>
            {children}
        </ProgressContext.Provider>
    );
}

export function useProgress() {
    const context = useContext(ProgressContext);
    if (context === undefined) {
        throw new Error('useProgress must be used within a ProgressProvider');
    }
    return context;
}
