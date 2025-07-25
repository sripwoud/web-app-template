import { useLatom } from "h/useLatom";

export const Latom = () => {
  const { latom, reset, set } = useLatom();

  return latom.mapOrElseSync(
    () => (
      <button onClick={() => set("some value")} type="button">
        Set
      </button>
    ),
    (value) => (
      <div className="flex items-center gap-2">
        <button onClick={reset} type="button">
          Reset
        </button>
        <span>{value}</span>
      </div>
    ),
  );
};
