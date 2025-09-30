export default function SemiCircleIcon({ count }: { count?: number }) {
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width="34"
        height="43"
        viewBox="0 0 34 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 2.43007C16.0094 2.43007 18.9761 3.14232 21.6576 4.50857C24.339 5.87483 26.659 7.8563 28.4279 10.291C30.1968 12.7257 31.3644 15.5444 31.8352 18.5168C32.3059 21.4892 32.0666 24.5308 31.1366 27.393C30.2066 30.2551 28.6125 32.8565 26.4845 34.9845C24.3565 37.1125 21.7551 38.7066 18.8929 39.6366C16.0308 40.5666 12.9892 40.806 10.0168 40.3352C7.04439 39.8644 4.22563 38.6968 1.79094 36.9279"
          stroke="#86D5C6"
          strokeWidth="3.46726"
          strokeLinecap="round"
        />
      </svg>
      {count !== undefined && (
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#093B42] text-[12px] font-semibold">
          {count}
        </span>
      )}
    </div>
  );
}
