import { EvervaultCardDemo } from "./components/EverVaultCardDemo";
import { InfiniteMovingCardsDemo } from "./components/InfiniteCardsDemo";
import { TypewriterEffectSmoothDemo } from "./components/TypeWriterEffectDemo";

function App() {
  return (
    <>
      <div className="p-3 text-white font-bold text-[24px]">
        <h3 className="my-4 mb-10">Aceternity UI</h3>
        <EvervaultCardDemo />
        <TypewriterEffectSmoothDemo />
        <InfiniteMovingCardsDemo />
      </div>
    </>
  );
}

export default App;
