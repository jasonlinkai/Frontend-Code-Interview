import clsx from "clsx";
import { LuRat } from "react-icons/lu";
import { FaCheese } from "react-icons/fa";
import SectionWrap from "@/components/wrap/SectionWrap";
import Row from "@/components/atomic/Row";
import Maze from "@/model/api/maze/maze";
import { useEffect, useRef, useState } from "react";
import SolidButton from "@/components/button/SolidButton";

interface ICell {
  index: string;
  type: string;
  x: number;
  y: number;
  visited: boolean;
  paced: boolean;
  prev: ICell | null;
}

const clsxWithCellStyle: typeof clsx = (...args) =>
  clsx([
    "w-[20px] h-[20px] md:w-[40px] md:h-[40px] justify-center items-center",
    ...args,
  ]);

const Wall: React.FC<ICell> = () => {
  return <Row className={clsxWithCellStyle(["bg-green-800"])} />;
};

const Path: React.FC<ICell> = ({ paced }) => {
  return (
    <Row
      className={clsxWithCellStyle([
        {
          "bg-lime-50": !paced,
          "bg-amber-200": paced,
        },
      ])}
    />
  );
};

const Rat: React.FC<ICell> = () => {
  return (
    <Row className={clsxWithCellStyle(["bg-amber-200"])}>
      <LuRat className="text-neutral-500" />
    </Row>
  );
};

const Cheese: React.FC<ICell> = () => {
  return (
    <Row
      className={clsxWithCellStyle()}
    >
      <FaCheese className="text-amber-400" />
    </Row>
  );
};

const Cell = (props: ICell) => {
  switch (props.type) {
    case "wall":
      return <Wall {...props} />;
    case "path":
      return <Path {...props} />;
    case "start":
      return <Rat {...props} />;
    case "end":
      return <Cheese {...props} />;
    default:
      return null;
  }
};

const getCellIndexByXY = (x: number, y: number) => `${x}-${y}`;

const genCells = (matrix: Maze) => {
  let startKey = "";
  const cells = matrix.reduce(
    (acc, row, i) => {
      row.forEach((cell, j) => {
        const index = getCellIndexByXY(i, j);
        acc[index] = {
          index,
          type: cell,
          x: i,
          y: j,
          visited: false,
          paced: false,
          prev: null,
        };
        // 處理起點
        if (cell === "start") {
          acc[index].visited = true;
          acc[index].paced = true;
          startKey = acc[index].index;
        }
      });
      return acc;
    },
    {} as Record<string, ICell>
  );
  return { cells, cell: cells[startKey] };
};

const MazeView: React.FC<{ matrix: Maze }> = ({ matrix }) => {
  const nextTick = useRef<number>();
  const [cells, setCells] = useState<Record<string, ICell> | null>(null);
  const [cell, setCell] = useState<ICell | null>(null);
  const [started, setStarted] = useState(false);

  const onStart = () => {
    clearTimeout(nextTick.current);
    setStarted(true);
    if (cells && cell) {
      visitToNextCell(cells, cell);
    }
  };

  const onReset = () => {
    clearTimeout(nextTick.current);
    setStarted(false);
    const { cells, cell } = genCells(matrix);
    setCells(cells);
    setCell(cell);
  };

  const visitToNextCell = (
    prevCells: Record<string, ICell>,
    prevCell: ICell
  ) => {
    const visitNew = (x: number, y: number) => {
      const cell = prevCells[getCellIndexByXY(x, y)];
      if (cell && cell.type !== "wall" && !cell.visited) {
        return {
          ...cell,
          visited: true,
          paced: true,
          prev: prevCell,
        };
      } else {
        return null;
      }
    };

    const prevX = prevCell.x;
    const prevY = prevCell.y;

    const leftVisitNew = () => {
      return visitNew(prevX, prevY - 1);
    };
    const downVisitNew = () => {
      return visitNew(prevX + 1, prevY);
    };
    const rightVisitNew = () => {
      return visitNew(prevX, prevY + 1);
    };
    const upVisitNew = () => {
      return visitNew(prevX - 1, prevY);
    };

    let nextCells = { ...prevCells };
    let nextCell: ICell | null =
      leftVisitNew() ||
      downVisitNew() ||
      rightVisitNew() ||
      upVisitNew() ||
      prevCell.prev;

    const isRollBack = nextCell && nextCell === prevCell.prev;
    const isEnd = nextCell && nextCell.type === "end";

    if (nextCell) {
      nextCell = { ...nextCell, type: "start" };
      nextCells = {
        ...nextCells,
        [prevCell.index]: { ...prevCell, type: "path", paced: !isRollBack },
        [nextCell.index]: nextCell,
      };
      setCells(nextCells);
      setCell(nextCell);
      if (!isEnd) {
        nextTick.current = window.setTimeout(() => {
          visitToNextCell(nextCells, nextCell as ICell);
        }, 100);
      }
    }
  };

  useEffect(() => {
    onReset();
    return () => {
      clearTimeout(nextTick.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!cells) return null;

  return (
    <SectionWrap>
      {matrix.map((row, i) => {
        return (
          <div key={`row-${i}`} className="flex flex-row justify-center">
            {row.map((col, j) => {
              const cellData = cells[getCellIndexByXY(i, j)];
              return <Cell {...cellData} key={`cell-${j}`} />;
            })}
          </div>
        );
      })}
      <Row className="justify-center my-4">
        <SolidButton onClick={started ? onReset : onStart}>
          {started ? "Reset!" : "Start!"}
        </SolidButton>
      </Row>
    </SectionWrap>
  );
};

export default MazeView;
