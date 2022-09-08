import dbConnect from "../dbConnet";
import Question from "../models/Question";

export async function getAllQuestions() {
    await dbConnect();

    const questions = await Question.find();

    return questions.map(({ _id, question, answer}) => {
        return { id: _id, question, answer};
    });
}

export function getQuestionById(id) {
    return questions.find((question) => question.id === id);
}