import Image from "next/image";
import QuestionTab from "@/components/questioncards/question-tab";

export default function Home() {
  return (
    <main className="px-40">
     <QuestionTab
      title={"1. Two Sum"}
      difficulty="Easy"
      acceptance={"54"}
      status="unsolved"
     />
    </main>
  );
}
