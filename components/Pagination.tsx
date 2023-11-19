"use client";
import { useRouter } from "next/navigation";

const Pagination = ({
  page,
  hasPrev,
  hasNext,
}: {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  const router = useRouter();
  return (
    <div className="my-10 w-full flex justify-between items-center">
      <button
        onClick={() => {
          router.push(`/?page=${hasPrev ? page - 1 : page}`);
        }}
        className={`px-4 py-2 w-fit rounded-sm text-white text-sm ${
          !hasPrev ? "bg-red-400 cursor-not-allowed" : "bg-red-700"
        }`}
        disabled={!hasPrev}
      >
        Previous
      </button>
      {
        <button
          onClick={() => {
            router.push(`/?page=${hasNext ? page + 1 : page}`);
          }}
          className={`px-4 py-2 w-fit rounded-sm text-white text-sm ${
            !hasNext ? "bg-red-400 cursor-not-allowed" : "bg-red-700"
          }`}
          disabled={!hasNext}
        >
          Next
        </button>
      }
    </div>
  );
};

export default Pagination;
