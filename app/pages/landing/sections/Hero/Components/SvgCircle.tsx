export default function Circle() {
  if (typeof window != "undefined") {
    if (window.innerWidth > 720) {
      return (
        <svg
          width="1250"
          height="1250"
          viewBox="0 0 1250 1250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-32 md:bottom-10 -z-10 w-[100vw]"
        >
          <circle cx="625" cy="400" r="700.5" stroke="#374151FF" />
        </svg>
      );
    } else if (window.innerWidth > 430) {
      return (
        <svg
          width="900"
          height="900"
          viewBox="0 0 900 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-10  -z-10 w-[100vw]"
        >
          <circle cx="450" cy="400" r="700.5" stroke="#374151FF" />
        </svg>
      );
    } else if (window.innerWidth > 320) {
      return (
        <svg
          width="1000"
          height="1000"
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-32 md:bottom-10 -z-10 w-[100vw]"
        >
          <circle cx="500" cy="400" r="900.5" stroke="#374151FF" />
        </svg>
      );
    } else {
      return (
        <svg
          width="900"
          height="900"
          viewBox="0 0 900 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-10  -z-10 w-[100vw]"
        >
          <circle cx="450" cy="400" r="700.5" stroke="#374151FF" />
        </svg>
      );
    }
  }
}
