export interface QuestionCardType {
    title: String;
    status?: "solved" | "unsolved" | "attempted";
    acceptance?: String;
    difficulty: "Easy"| "Hard" | "Medium";
}