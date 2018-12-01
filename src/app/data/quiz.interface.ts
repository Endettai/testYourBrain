export interface Quiz {
    isFirst?: boolean;
    scenarioId: number;
    shortName: string;
    question?: string;
    answers: {
        checked: boolean;
        shortAnsw: string;
        text?: string;
    }[];
}

export interface Scenario {
    id: number;
    title: string;
    description: string;
}