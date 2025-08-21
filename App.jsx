import React from "react";
import { createRoot } from "react-dom/client";
import { setup, tw } from "twind";

setup({});

const rows = Array.from({ length: 25 }, (_, i) => i + 1);

const App = () => (
  <section className={tw`fixed inset-0 w-full h-full relative overflow-hidden bg-black`}>
    <article
      className={tw`absolute inset-0 flex flex-col w-full h-full z-[-1] transform -rotate-30 scale-200`}
    >
      {rows.map((d) => (
        <aside
          key={d}
          className={tw`flex-grow min-h-[43px] relative -top-[4px] bg-[url('assets/band.png')] bg-repeat-x bg-[length:837px] animate-[move_20s_linear_infinite]`}
          style={{ "--d": d }}
        />
      ))}
    </article>
    <style>{`
      @keyframes move {
        0% { background-position-x: 0; }
        100% { background-position-x: -837px; }
      }
    `}</style>
  </section>
);

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);
const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
