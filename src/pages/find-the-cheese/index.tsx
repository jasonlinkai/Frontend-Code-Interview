import { GetServerSideProps } from "next";
import Head from "next/head";
import axios from "axios";
import PageWrap from "@/components/wrap/PageWrap";
import PageHeader from "@/components/text/PageHeader";
import PageDescription from "@/components/text/PageDescription";
import MazeView from "@/components/maze/MazeView";
import Maze from "@/model/api/maze/maze";

const title = "Find the cheese";
const description =
  "Click 'Start' to see how the mouse find the cheese by using DFS!";

interface FindTheCheeseProps {
  maze: Maze[];
}

export default function FindTheCheese({ maze = [] }: FindTheCheeseProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <PageWrap>
        <PageHeader>{title}</PageHeader>
        <PageDescription>{description}</PageDescription>
        {maze.map((matrix, i) => {
          return <MazeView key={`maze-${i}`} matrix={matrix} />;
        })}
      </PageWrap>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  FindTheCheeseProps
> = async () => {
  let maze = [];
  try {
    const response = await axios.get("http://localhost:3000/api/maze");
    maze = response?.data || [];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return {
    props: {
      maze,
    },
  };
};
