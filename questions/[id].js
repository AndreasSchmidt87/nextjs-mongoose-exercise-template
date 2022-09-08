import Head from "next/head";
import ProductForm from "../../components/questionForm";
import { getQuestionById } from "../services/questionService";
import { getAllQuestions } from "../services/questionService";

export async function getServerSideProps(context) {
    const {id} = context.parms;
    const questions = getAllQuestions();
    const question = await getQuestionById(id);

    return {
        props: {
            question,
            questions,
        },
    };
}

export default function Question({question, qeuestions}) {
    const {id, question, answer} = question;

    function updateQuestion(updatedQuestion) {
        console.log(updatedQuestion);
    }

    function deleteQuestion() {
        console.log("deleted!");
    }

    return (
        <>
            <Head>
                <title>Question: {question}</title>
            </Head>
            <h1>Question: {question}</h1>
            <p>ID: {_id}</p>
            <questionForm
                onHandleSubmit={updateQuestion}
                questions={questions}
                question={question}
            />
        </>
    );
}