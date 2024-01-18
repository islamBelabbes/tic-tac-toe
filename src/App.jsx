import tictactoe from "./assets/tictactoe.png";
import { cn } from "./util";
import useTicTacToe from "./useTicTacToe";
function App() {
  const helpers = useTicTacToe();

  return (
    <div className="flex items-center justify-center w-screen min-h-screen p-3 bg-primary">
      <div className="bg-secondary w-full md:w-[500px] min-h-0 h-[600px] p-10 flex flex-col gap-10 rounded-[30px]">
        <Board score={helpers.score} />
        <Boxes {...helpers} />
        {helpers.isGameOver && (
          <button
            onClick={helpers.resetGame}
            className="p-2 border rounded bg-g11"
          >
            Rest Game
          </button>
        )}
      </div>
      <div className="fixed bottom-0 left-0 w-[250px] hidden md:block">
        <img className="object-contain w-auto h-full" src={tictactoe} alt="" />
      </div>
    </div>
  );
}

const Board = ({ score }) => {
  return (
    <div className="flex justify-around">
      <div className="w-[100px] h-[100px] rounded-xl bg-g10 flex flex-col justify-center gap-1 items-center font-bold">
        <span className="text-[20px]">Player X</span>
        <span className="text-[30px]">{score["x"]}</span>
      </div>
      <div className="w-[100px] h-[100px] rounded-xl bg-g11 flex flex-col justify-center gap-1 items-center font-bold">
        <span className="text-[20px]">Draw</span>
        <span className="text-[30px]">{score["draw"]}</span>
      </div>
      <div className="w-[100px] h-[100px] rounded-xl bg-g12 flex flex-col justify-center gap-1 items-center font-bold">
        <span className="text-[20px]">Player O</span>
        <span className="text-[30px]">{score["o"]}</span>
      </div>
    </div>
  );
};

const Boxes = ({ cells, isGameOver, handleClick, victory }) => {
  return (
    <>
      <div className="grid items-center grid-cols-3 gap-y-2">
        {cells.map((cell) => (
          <div
            key={cell.id}
            className={cn(
              "bg-primary h-[100px] w-[100px] m-auto rounded-xl flex justify-center items-center font-bold text-g10 text-[50px] uppercase cursor-pointer",
              {
                "text-red-800":
                  isGameOver && victory && victory !== cell.content,
              },
              {
                "text-red-800": isGameOver && !victory,
              }
            )}
            onClick={() => handleClick(cell.id)}
          >
            {cell.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
