export default function Metrics() {
  return (
    <div className="border-2 border-slate-800 flex-col items-center justify-center relative inline-flex w-60 h-72  md:w-96 md:h-96 overflow-hidden p-[3px] md:p-[1.2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 rounded-md">
      <svg
        fill="#ffcc15"
        xmlns="http://www.w3.org/2000/svg"
        width="800px"
        height="800px"
        viewBox="0 0 52 52"
        enableBackground="new 0 0 52 52"
        className="w-24 h-24 mb-4"
      >
        <g>
          <path
            d="M44.9,2H7.1C4.3,2,2,4.3,2,7.1v37.7C2,47.7,4.3,50,7.1,50h37.7c2.8,0,5.1-2.3,5.1-5.1V7.1
		C50,4.3,47.7,2,44.9,2z M15.7,39.7c0,0.9-0.8,1.7-1.7,1.7h-1.7c-0.9,0-1.7-0.8-1.7-1.7v-9.4c0-0.9,0.8-1.7,1.7-1.7H14
		c0.9,0,1.7,0.8,1.7,1.7V39.7z M24.3,39.7c0,0.9-0.8,1.7-1.7,1.7h-1.7c-0.9,0-1.7-0.8-1.7-1.7V17.4c0-0.9,0.8-1.7,1.7-1.7h1.7
		c0.9,0,1.7,0.8,1.7,1.7V39.7z M32.9,39.7c0,0.9-0.8,1.7-1.7,1.7h-1.7c-0.9,0-1.7-0.8-1.7-1.7V12.3c0-0.9,0.8-1.7,1.7-1.7h1.7
		c0.9,0,1.7,0.8,1.7,1.7V39.7z M41.4,39.7c0,0.9-0.8,1.7-1.7,1.7H38c-0.9,0-1.7-0.8-1.7-1.7V23.4c0-0.9,0.8-1.7,1.7-1.7h1.7
		c0.9,0,1.7,0.8,1.7,1.7V39.7z"
          />
        </g>
      </svg>

      <h3 className="text-xl md:text-2xl mb-5">Ragas Metrics</h3>
      <p className="w-[80%] text-sm text-gray-400 text-center">
        Benchmark your Rag applications and find which model suits you
      </p>
    </div>
  );
}
