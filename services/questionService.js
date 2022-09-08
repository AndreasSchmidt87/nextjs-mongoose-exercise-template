import dbConnect from "../dbConnet";
import Question from "../models/Question";

export async function getAllQuestions() {
    await dbConnect();

    const questions = await Question.find();

    const questionArray = questions.map(
        ({ _id, question, answer}) => {
        return { id: _id, question, answer};
    });

    return questionArray;
}

export async function getQuestionById(questionId) {
    await dbConnect();

    const question = await Question.findById(questionId);

    const { _id, question, answer} = question;
    
    return { _id, question, answer};
}