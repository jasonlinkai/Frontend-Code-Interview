import PageWrap from "@/components/wrap/PageWrap";
import PageHeader from "@/components/text/PageHeader";
import SectionWrap from "@/components/wrap/SectionWrap";
import SectionHeader from "@/components/text/SectionHeader";
import HeightLightText from "@/components/text/HeightLightText";
import StrongText from "@/components/text/StrongText";
import LinkText from "@/components/text/LinkText";

export default function Home() {
  return (
    <PageWrap>
      <PageHeader>Frontend Engineer Assessment</PageHeader>
      <p className="mt-6">
        Welcome to our frontend engineer assessment! This test is designed to
        evaluate your frontend development skills and related knowledge.
      </p>
      <p className="mt-4">
        Please read each question carefully and imagine them as typical work
        tasks. Respond in the same manner you would during your regular work.
      </p>
      <p className="mt-4">
        You can create any folders, ts/tsx/css files you need at any position
        that you think is appropriate.
      </p>
      <p className="mt-4">Here's the requirements for the assessment:</p>
      <ul className="list-decimal pl-6">
        <li className="mt-1">
          <StrongText>NEVER</StrongText> change anything in the directories
          named in the pattern
          <HeightLightText>**/api/**</HeightLightText>
        </li>
        <li className="mt-1">Style with tailwindcss and css file.</li>
        <li className="mt-1">
          Use
          <HeightLightText>axios</HeightLightText>
          to fetch data
        </li>
        <li className="mt-1">
          Implement Responsive Web Design (RWD) with a breakpoint at 768px (md
          in tailwindcss default breakpoints)
        </li>
        <li className="mt-1">
          <p>
            Submit the URL of your answer repository by
            <StrongText className="mx-1">
              23:59 on the 5th day after receiving the questions,
            </StrongText>
            and cease answering (pushing commits). For example: if you receive
            the questions on Mar 1st, you should submit the answer by 23:59 on
            Mar 5th.
          </p>
        </li>
      </ul>
      <p className="mt-4">Good luck! Let's get started.</p>
      <SectionWrap>
        <SectionHeader>Problem 1: Refactoring</SectionHeader>
        <p className="mt-1">
          For this task, your objective is to refactor the current page
          following your coding conventions and best practices. Look for
          opportunities to enhance code structure, eliminate redundancy, clarify
          variable names, and simplify complex logic.
        </p>
      </SectionWrap>
      <SectionWrap>
        <SectionHeader>Problem 2: Maze</SectionHeader>
        <p className="mt-1">
          For this task, your objective is to implement a page where a mouse
          traverses a maze to find cheese.
        </p>
        <p className="mt-4">
          During server-side rendering, you need to hit the
          <HeightLightText>/api/maze</HeightLightText>
          endpoint to fetch the maze map array and display all the maps along
          with their respective start buttons on the screen. When the user
          clicks the start button, the mouse on that map will begin to solve the
          maze using Depth-First Search (DFS), with each step taking 100 ms.
        </p>
        <p className="mt-4">
          Meanwhile, the start button will disappear, replaced by a reset
          button. Clicking the reset button will stop the mouse's movement,
          reset the map to its initial state, and the reset button will be
          replaced by the start button again.
        </p>
        <p className="mt-4">
          <LinkText
            className="underline font-bold text-amber-500 cursor-pointer hover:text-amber-400 mr-1"
            href="https://youtube.com/shorts/uA744cMSNK8?si=U80OGTvH3rGV17zu"
            target="_blank"
          >
            Click
          </LinkText>
          to watch a demonstration of the expected behavior.
        </p>
        <p className="mt-4">Note that:</p>
        <ul className="list-decimal pl-6">
          <li className="mt-1">
            Put this page at the route
            <HeightLightText>/find-the-cheese</HeightLightText>, and title it
            <StrongText className="mx-1">'Find the cheese'.</StrongText>
          </li>
          <li className="mt-1">
            Add description, "Click 'Start' to see how the mouse find the cheese
            by using DFS!", below page title
          </li>
          <li className="mt-1">
            The color of the walls is
            <HeightLightText>green-800</HeightLightText>
          </li>
          <li className="mt-1">
            The color of the path is
            <HeightLightText>lime-50</HeightLightText>
          </li>
          <li className="mt-1">
            The icon of the mouse is
            <HeightLightText>LuRat</HeightLightText>
            with color
            <HeightLightText>neutral-500</HeightLightText>
          </li>
          <li className="mt-1">
            The icon of the cheese is
            <HeightLightText>FaCheese</HeightLightText>
            with color
            <HeightLightText>amber-400</HeightLightText>
          </li>
          <li className="mt-1">
            Highlight current path with color
            <HeightLightText>amber-200</HeightLightText>
          </li>
          <li className="mt-1">
            The button has a background color of amber-500, and a hover
            background color of amber-400.
          </li>
          <li className="mt-1">
            <HeightLightText>/api/maze</HeightLightText>
            simulates an endpoint on another server, so you need to use axios to
            fetch the data.
          </li>
        </ul>
      </SectionWrap>
      <SectionWrap>
        <SectionHeader>Problem 3: Layout</SectionHeader>
        <p className="mt-1">
          For this task, your objective is to create and apply a global shared
          layout. The layout should consist of:
        </p>
        <ul className="list-decimal pl-6">
          <li className="mt-1">
            A header displaying
            <StrongText className="mx-1">'Jedi Software'</StrongText> that
            collapses when scrolling up and reappears when scrolling stops.
          </li>
          <li className="mt-1">
            A collapsible menu offering redirection to the homepage and
            <HeightLightText>/find-the-cheese</HeightLightText>.
          </li>
        </ul>
      </SectionWrap>
    </PageWrap>
  );
}
