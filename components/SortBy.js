import { Menu, Transition, Fragment } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { usePublications } from "../contexts/publicationsContext";
export default function SortBy() {
  const context = usePublications();
  return (
    <Menu className="relative">
      {({ open }) => (
        <div className="relative">
          <Menu.Button className="flex text-sm text-black-60 rounded-lg px-2 py-1 ms-focus-visible-barbiePink active:bg-barbiePink-10 hover:text-barbiePink-100">
            Sort by: {context.sortBy}
            {open ? (
              <ChevronUpIcon className="w-5 h-5 text-barbiePink-100" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 text-barbiePink-100" />
            )}
          </Menu.Button>
          {open && (
            <Menu.Items className="absolute w-32 bg-white-100 z-10 right-0 mt-2">
              <div className="relative py-4 rounded-lg shadow-lg ring-1 ring-black-100 ring-opacity-5 text-black-60">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${active && "bg-gray-100"} ${
                        context.isSortedByYear() &&
                        "bg-barbiePink-10 text-barbiePink-100"
                      } flex justify-center px-4 py-2 text-sm hover:bg-gray-50 w-full`}
                      onClick={() => {
                        context.setSortByYear();
                      }}
                    >
                      Year
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${active && "bg-gray-100"} ${
                        context.isSortedByTitle() &&
                        "bg-barbiePink-10 text-barbiePink-100"
                      } flex justify-center px-4 py-2 text-sm hover:bg-gray-50 w-full`}
                      onClick={() => {
                        context.setSortByTitle();
                      }}
                    >
                      Title
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          )}
        </div>
      )}
    </Menu>
  );
}
