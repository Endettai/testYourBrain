import { Scenario } from './../app/data/quiz.interface';
import { Subject } from "rxjs";

export class QuizService {
    onAnswerSelect = new Subject<any>();
    scenari: Scenario[] = [
        {
            description: "scenarioCube",
            id: 0,
            title: "cubo"
        },
        {
            description: "scenarioLadder",
            id: 1,
            title: "ladder"
        },
        {
            description: "scenarioHorse",
            id: 2,
            title: "horse"
        },
        {
            description: "scenarioBatterfly",
            id: 3,
            title: "Batterfly"
        },
        {
            description: "scenarioFlower",
            id: 4,
            title: "flower"
        },
        {
            description: "scenarioSandStorm",
            id: 5,
            title: "SandStorm"
        }
    ];

    getScenario(scenarioId): Scenario {
        console.log(scenarioId);
        return this.scenari.find((s) => {
            return s.id == scenarioId
        });
    }
}