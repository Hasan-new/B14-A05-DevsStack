
import type { Ilanguage } from "../types/languageType";

interface YourStackProps {
  stack: Ilanguage[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <div className="col-span-1">
      <div className="rounded-xl bg-white p-5 shadow-sm">
       
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Your Stack</h2>

          <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-600">
            {stack.length}
          </span>
        </div>

        <p className="mt-2 text-sm text-gray-500">
          Your selected technologies will appear here.
        </p>

        <button
          type="button"
          onClick={onRemoveAll}
          disabled={stack.length === 0}
          className="mt-4 w-full rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-300">
          Remove All
        </button>

  
        <div className="mt-5 space-y-3">
          {stack.length === 0 ? (
            <p className="text-gray-400">
              No technologies added yet.
            </p>
          ) : (
            stack.map((language) => (
              <div
                key={language.id}
                className="flex items-center justify-between gap-2 rounded-lg bg-slate-50 p-3"
              >
               
                <div className="flex min-w-0 items-center gap-3">
                  <img
                    src={language.icon}
                    alt={language.name}
                    className="h-10 w-10 shrink-0 object-contain"
                  />

                  <div className="min-w-0">
                    <h3 className="truncate font-semibold">
                      {language.name}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {language.category}
                    </p>
                  </div>
                </div>

                
                <button
                  type="button"
                  onClick={() => onRemove(language.id)}
                  aria-label={`Remove ${language.name}`}
                  className="shrink-0 rounded-full px-2 py-1 text-red-500 hover:bg-red-100">
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default YourStack;
