
import { useState } from "react";
import type { Ilanguage } from "../types/languageType";
import { IoIosStar } from "react-icons/io";
import { toast } from "react-toastify";
import YourStack from "./YourStack";

interface AvailableLanguageProps {
  languages: Ilanguage[];
}

const AvailableLanguage = ({
  languages,
}: AvailableLanguageProps) => {
  const [stack, setStack] = useState<Ilanguage[]>([]);

  
  const handleAddToStack = (language: Ilanguage) => {
    const alreadyAdded = stack.some(
      (item) => item.id === language.id
    );

    if (alreadyAdded) {
      toast.warning(`${language.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      language,
    ]);

    toast.success("Added to Stack!");
  };


  const handleRemoveFromStack = (id: number) => {
    const technology = stack.find(
      (item) => item.id === id
    );

    if (!technology) return;

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    toast.info(`${technology.name} removed from your stack!`);
  };


  const handleRemoveAll = () => {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty!");
      return;
    }

    setStack([]);
    toast.success("All technologies removed!");
  };

  return (
    <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-4">
      {/* Available Technologies */}
      <div className="grid grid-cols-1 gap-4 md:col-span-3 md:grid-cols-2 lg:grid-cols-3">
        {languages.map((language) => {
          const isAdded = stack.some(
            (item) => item.id === language.id
          );

          return (
            <div
              key={language.id}
              className="card w-full bg-base-100 shadow-sm"
            >
             
              <div className="flex items-center justify-between px-6 pt-6">
                <figure className="h-16 w-16">
                  <img
                    src={language.icon}
                    alt={language.name}
                    className="h-full w-full object-contain"
                  />
                </figure>

                <span className="rounded-full bg-sky-50 px-4 py-2 text-sm text-sky-500">
                  {language.badge}
                </span>
              </div>

        
              <div className="card-body mb-4">
                <h2 className="card-title">
                  {language.name}
                </h2>

                <p>{language.description}</p>

             
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span>{language.category}</span>
                  <span>{language.difficulty}</span>

                  <span className="flex items-center gap-1">
                    <IoIosStar className="text-amber-400" />
                    {language.rating}
                  </span>
                </div>

            
                <div className="card-actions mt-6">
                  <button
                    type="button"
                    onClick={() => handleAddToStack(language)}
                    className={`w-full rounded-xl py-3 text-lg font-normal text-white ${
                      isAdded
                        ? "cursor-pointer bg-gray-400"
                        : "bg-slate-950 hover:bg-slate-800"
                    }`}
                  >
                    {isAdded ? "Added to Stack" : "Add to Stack"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      
      <YourStack
        stack={stack}
        onRemove={handleRemoveFromStack}
        onRemoveAll={handleRemoveAll}
      />
    </div>
  );
};

export default AvailableLanguage;
