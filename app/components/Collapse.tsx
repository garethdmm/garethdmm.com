import { ReactNode } from "react";

type CollapseType = {
  children: ReactNode;
};

export default function Collapse({ children }: CollapseType) {
  return (
    <>
      <details className="mt-8">
        <summary>
          <span className="text-md font-semibold text-gray-900 ml-2">
            Read more
          </span>
        </summary>
        {children}
      </details>
    </>
  );
}
