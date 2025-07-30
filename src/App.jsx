import { useState } from "react";
import "./App.css";

const COLORS = [
  { name: "Red", code: "#ff2222" },
  { name: "Green", code: "#22c55e" },
  { name: "Blue", code: "#3b82f6" },
  { name: "Yellow", code: "#facc15" },
  { name: "Pink", code: "#ec4899" },
  { name: "Purple", code: "#a21caf" },
  { name: "Teal", code: "#14b8a6" }
];

function App() {
  const [color, setColor] = useState(COLORS[0]);

  return (
    <div className="bg-root" style={{ backgroundColor: color.code }}>
      <div className="current-color">
        <span>
          Current Color: <span style={{ color: color.code }}>{color.name}</span>
        </span>
      </div>
      <div className="color-buttons">
        {COLORS.map((c) => (
          <button
            key={c.name}
            onClick={() => setColor(c)}
            style={{ backgroundColor: c.code }}
            className={`color-btn${c.name === color.name ? " selected" : ""}`}
            aria-label={`Set background to ${c.name}`}
          >
            {c.name}
          </button>
        ))}
      </div>
      <footer>Made with ❤️ | {new Date().getFullYear()}</footer>
    </div>
  );
}

export default App;

// import { useState } from "react";

// import "./App.css";

// function App() {
//   const [color, setColor] = useState("olive");
//   return (
//     <>
//       <h1
//         className="w-full h-screen duration-200"
//         style={{ backgroundColor: color }}
//       >
//         <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
//           <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full text-white shadow-lg">
//             <button
//               onClick={() => setColor("red")}
//               className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//               style={{ backgroundColor: "red" }}
//             >
//               Red
//             </button>
//             <button
//               onClick={() => setColor("Green")}
//               className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//               style={{ backgroundColor: "Green" }}
//             >
//               Green
//             </button>
//             <button
//               onClick={() => setColor("Blue")}
//               className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//               style={{ backgroundColor: "Blue" }}
//             >
//               Blue
//             </button>
//             <button
//               onClick={() => setColor("Yellow")}
//               className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//               style={{ backgroundColor: "Yellow" }}
//             >
//               Yellow
//             </button>
//             <button
//               onClick={() => setColor("Pink")}
//               className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//               style={{ backgroundColor: "Pink" }}
//             >
//               Pink
//             </button>
//           </div>
//         </div>
//       </h1>
//     </>
//   );
// }

// export default App;