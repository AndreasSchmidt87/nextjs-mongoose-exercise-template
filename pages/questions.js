import Link from "next/link";
import { getServerSideProps } from "../questions/[id]";
import { getAllQuestions } from "../services/questionService";

export async function getServerSideProps() {
    const questions = await getAllQuestions();

    return {
        props: {
            questions: questions,
        },
    };
}

export default function Products({ products }) {
    return (
      <>
        <h1>Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`products/${product.id}`}>
                <a>{product.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
}