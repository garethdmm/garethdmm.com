import Collapse from "./Collapse";
import { ReactNode } from "react";

type ExperienceType = {
  id?: string;
  place: string;
  role: string;
  left: boolean;
  description?: string;
  time: string;
  details?: ReactNode[];
  stack?: string[];
};

export default function Experience({
  left,
  role,
  place,
  description,
  details,
  stack,
  id,
}: ExperienceType) {
  return (
    <div
      id={id || ""}
      className={`${
        left ? "ml-auto mr-0" : null
      } rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800`}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {role}
      </h5>
      <h4 className="text-base text-gray-600">{place}</h4>
      {description && (
        <p className="mt-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      )}
      {stack && (
        <div className="mt-4 line-clamp-2 flex flex-wrap gap-x-2 gap-y-3">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      {details && (
        <Collapse>
          <ul className="ml-4 list-disc space-y-3 pt-3">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </Collapse>
      )}
    </div>
  );
}
