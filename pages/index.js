import { getAllQuestions } from "../services/questionService";
import QuestionCard from "../src/QuestionCard";

export async function getServerSideProps() {

  const questions = await getAllQuestions();

  return {
    props: {
      questions:questions,
    },
  };
}

export default function IndexPage({questions}) {
  return (
    <main>
      <h1>All questions</h1>
      <ul>
        {
          questions.map(({id, question, answer, options}) => {
            return (
            <QuestionCard 
              key={id} 
              question={question}
              answer={answer}
              options={options}
              />
            )
          })
        }
      </ul>
    </main>
  );
}
