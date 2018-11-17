export interface Quiz {
    shortName: string;
    question?: string;
    answers: {
        checked: boolean;
        shortAnsw: string;
        text?: string;
    }[];
}