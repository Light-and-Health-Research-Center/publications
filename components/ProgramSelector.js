import { Popover, Fragment, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { usePublications } from "../contexts/publicationsContext";
import { useState } from "react";
import { usePopper } from "react-popper";

export default function ProgramSelector() {
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement);
  const context = usePublications();
  const classes = {
    human:
      "text-programs-human-100 shoadow-sm focus:border-programs-human-100 focus:ring-programs-human-80",
    plant:
      "text-programs-plant-100 shoadow-sm focus:border-programs-plant-100 focus:ring-programs-plant-80",
    energy:
      "text-programs-energy-100 shoadow-sm focus:border-programs-energy-100 focus:ring-programs-energy-80",
    transportation:
      "text-programs-transportation-100 shoadow-sm focus:border-programs-transportation-100 focus:ring-programs-transportation-80",
  };
  const text = {
    human: "Human Health",
    plant: "Plant Health",
    energy: "Energy Efficiency",
    transportation: "Transportation Safety",
  };
  return (
    <Popover className="m-2">
      {({ open }) => (
        <>
          <Popover.Button
            ref={setReferenceElement}
            className={`${
              open
                ? "border-barbiePink-100 bg-barbiePink-10 text-barbiePink-100 ring-barbiePink-60 ring-opacity-70 ring-2"
                : "text-black-60"
            } rounded-full border border-black-20 px-4 py-1 font-medium flex hover:text-barbiePink-100 ms-focus-barbiePink`}
          >
            Program
            {open ? (
              <ChevronUpIcon className="ml-2 w-6 text-barbiePink-100" />
            ) : (
              <ChevronDownIcon className="ml-2 w-6 text-barbiePink-100" />
            )}
          </Popover.Button>
          {open && (
            <Popover.Panel
              className="z-10 mt-4 w-max bg-white-100"
              ref={setPopperElement}
              style={styles.popper}
              {...attributes.popper}
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black-100 ring-opacity-5">
                <div className="mb-2 max-h-64 w-60 overflow-y-auto px-4 pt-4">
                  {context.allPrograms.map((program) => {
                    return (
                      <div key={program}>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            className={`cursor-pointer rounded border-black-20 ${classes[program]} focus:ring focus:ring-offset-0  focus:ring-opacity-50 form-checkbox w-5 h-5`}
                            type="checkbox"
                            checked={context.programIsSelected(program)}
                            onChange={() => {
                              context.toggleProgram(program);
                            }}
                          />
                          <span className="ml-4 text-black-60 font-medium">
                            {text[program]}
                          </span>
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className="w-full flex text-sm text-barbiePink-100 font-medium justify-between p-2">
                  <button
                    className="w-full h-8 rounded-lg px-2 py-1 ms-focus-visible-barbiePink active:bg-barbiePink-10"
                    onClick={() => {
                      context.selectAllPrograms();
                    }}
                  >
                    All
                  </button>
                  <button
                    className="w-full h-8 srounded-lg px-2 py-1 ms-focus-visible-barbiePink active:bg-barbiePink-10"
                    onClick={() => {
                      context.deselectAllPrograms();
                    }}
                  >
                    None
                  </button>
                </div>
              </div>
            </Popover.Panel>
          )}
        </>
      )}
    </Popover>
  );
}
