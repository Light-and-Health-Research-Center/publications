import { Popover, Fragment, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { usePublications } from "./publicationsContext";

export default function FundingSelector() {
  const context = usePublications();
  return (
    <Popover className="m-2">
      {({ open }) => (
        <>
          <Popover.Button
            className={`${
              open
                ? "border-barbiePink-100 bg-barbiePink-10 text-barbiePink-100 ring-barbiePink-60 ring-opacity-70 ring-2"
                : "text-black-60"
            } rounded-full border border-black-20 px-4 py-1 font-medium flex hover:text-barbiePink-100 ms-focus-barbiePink`}
          >
            Funding
            {open ? (
              <ChevronUpIcon className="ml-2 w-6 text-barbiePink-100" />
            ) : (
              <ChevronDownIcon className="ml-2 w-6 text-barbiePink-100" />
            )}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            {open && (
              <Popover.Panel className="absolute z-10 mt-4 w-max bg-white-100">
                <div className="relative p-4 rounded-lg shadow-lg ring-1 ring-black-100 ring-opacity-5">
                  <div className="mb-2">
                    {context.allFundings.map((funding) => {
                      return (
                        <div key={funding}>
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              className="cursor-pointer rounded border-black-20 text-barbiePink-100 shoadow-sm focus:border-barbiePink-100 focus:ring focus:ring-offset-0 focus:ring-barbiePink-80 focus:ring-opacity-50 form-checkbox w-5 h-5"
                              type="checkbox"
                              checked={context.fundingIsSelected(funding)}
                              onChange={() => {
                                context.toggleFunding(funding);
                              }}
                            />
                            <span className="ml-4 text-black-60 font-medium">
                              {funding}
                            </span>
                          </label>
                        </div>
                      );
                    })}
                  </div>

                  <div className="w-full flex text-sm text-barbiePink-100 font-medium justify-between">
                    <button
                      className="rounded-lg px-2 py-1 ms-focus-visible-barbiePink active:bg-barbiePink-10"
                      onClick={() => {
                        context.selectAllFundings();
                      }}
                    >
                      All
                    </button>
                    <button
                      className="rounded-lg px-2 py-1 ms-focus-visible-barbiePink active:bg-barbiePink-10"
                      onClick={() => {
                        context.deselectAllFundings();
                      }}
                    >
                      None
                    </button>
                  </div>
                </div>
              </Popover.Panel>
            )}
          </Transition>
        </>
      )}
    </Popover>
  );
}
