import { tenorsans } from "../stack/stack";

export default function Client() {
  return (
    <section className="mt-10 mb-10">
      <h2 className="text-white text-center text-3xl font-bold mb-5">
        engineers rely on{" "}
        <span className={`${tenorsans.className}`}>ragas</span>
      </h2>
      <div className="marquee">
        <div className="flex bg-white w-screen justify-around items-center track">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7.64 10.38c0 .25.02.45.07.62c.05.12.12.28.21.46c.04.04.05.1.05.15c0 .07-.04.13-.13.2l-.42.28c-.06.04-.12.06-.17.06c-.07 0-.13-.04-.2-.1c-.09-.1-.17-.2-.24-.31c-.06-.11-.13-.24-.2-.39c-.52.61-1.17.92-1.96.92c-.56 0-1-.16-1.33-.48c-.32-.32-.49-.75-.49-1.29c0-.55.2-1 .6-1.36c.41-.34.95-.52 1.63-.52c.23 0 .44.02.71.06c.23.03.5.08.76.14v-.48c0-.51-.1-.84-.31-1.07c-.22-.21-.57-.3-1.08-.3c-.24 0-.48.03-.72.08c-.25.06-.49.13-.72.23c-.11.04-.2.07-.23.08c-.05.02-.08.02-.11.02c-.09 0-.14-.06-.14-.2v-.33c0-.1.01-.18.05-.23q.045-.075.18-.12c.24-.14.51-.24.84-.32a4 4 0 0 1 1.04-.13q1.185 0 1.74.54c.37.36.55.91.55 1.64v2.15zm-2.7 1.02c.22 0 .44-.04.68-.12s.45-.23.63-.43c.11-.13.19-.27.25-.43c0-.16.05-.35.05-.58v-.27c-.2-.07-.4-.07-.62-.12a7 7 0 0 0-.62-.04c-.45 0-.77.09-.99.27s-.32.43-.32.76c0 .32.07.56.24.71c.16.17.39.25.7.25m5.34.71a.6.6 0 0 1-.28-.06c-.03-.05-.08-.14-.12-.26L8.32 6.65c-.04-.15-.06-.22-.06-.27c0-.11.05-.17.16-.17h.65c.13 0 .22.02.26.07c.06.04.1.13.14.26l1.11 4.4l1.04-4.4c.03-.13.07-.22.13-.26c.05-.04.14-.07.25-.07h.55c.12 0 .21.02.26.07c.05.04.1.13.13.26L14 11l1.14-4.46c.04-.13.09-.22.13-.26c.06-.04.14-.07.26-.07h.62c.11 0 .17.06.17.17c0 .03-.01.07-.02.12c0 0-.02.08-.04.15l-1.61 5.14c-.04.14-.08.21-.15.26c-.04.04-.13.07-.24.07h-.57c-.13 0-.19-.02-.27-.07a.45.45 0 0 1-.12-.26L12.27 7.5l-1.03 4.28q-.045.195-.12.27a.5.5 0 0 1-.27.06zm8.55.18c-.33 0-.7-.04-1.03-.12s-.59-.17-.76-.26a.5.5 0 0 1-.21-.19a.4.4 0 0 1-.04-.18v-.34c0-.14.05-.2.15-.2h.12c.04 0 .1.05.17.08c.22.1.47.18.73.23c.27.05.54.08.79.08c.42 0 .75-.07.97-.22c.23-.17.35-.36.35-.63c0-.19-.07-.34-.18-.47c-.12-.12-.35-.24-.67-.34l-.97-.3c-.48-.16-.84-.38-1.06-.68a1.58 1.58 0 0 1-.33-.97c0-.28.06-.52.18-.73c.12-.22.28-.4.46-.55c.22-.15.44-.26.71-.34q.39-.12.84-.12q.21 0 .45.03c.14.02.28.05.42.07c.14.04.26.07.38.11s.2.08.28.12c.09.05.16.1.2.16s.06.13.06.22v.32q0 .21-.15.21c-.05 0-.14-.03-.26-.08c-.37-.17-.8-.26-1.27-.26c-.38 0-.66.06-.89.19c-.2.12-.31.32-.31.59c0 .19.07.35.2.47c.13.13.38.25.73.37l.95.3c.48.14.82.36 1.03.64q.3.405.3.93c0 .28-.06.54-.17.77c-.12.22-.28.42-.5.58c-.19.17-.44.29-.72.38s-.62.13-.95.13m1.25 3.24C17.89 17.14 14.71 18 12 18c-3.85 0-7.3-1.42-9.91-3.77c-.21-.19-.02-.44.23-.29c2.82 1.63 6.29 2.62 9.89 2.62c2.43 0 5.1-.5 7.55-1.56c.37-.15.68.26.32.53M21 14.5c-.29-.37-1.86-.18-2.57-.1c-.21.03-.24-.16-.05-.3c1.25-.87 3.31-.6 3.54-.33c.24.3-.06 2.36-1.23 3.34c-.19.15-.36.07-.28-.11c.27-.68.86-2.16.59-2.5"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5em"
            height="3em"
            viewBox="0 0 512 110"
          >
            <path
              fill="#706d6e"
              d="M512 49.449v-9.005h-11.182V26.446l-.376.115l-10.503 3.214l-.206.063v10.606h-16.577v-5.908c0-2.751.615-4.857 1.828-6.26c1.204-1.388 2.926-2.093 5.122-2.093c1.58 0 3.214.372 4.86 1.105l.412.184V17.99l-.194-.07c-1.535-.553-3.623-.83-6.21-.83c-3.262 0-6.225.709-8.81 2.116a15.052 15.052 0 0 0-6.045 5.976c-1.42 2.554-2.14 5.503-2.14 8.767v6.496h-7.786v9.005h7.786v37.933h11.177V49.449h16.577v24.106c0 9.928 4.682 14.96 13.918 14.96a22.79 22.79 0 0 0 4.746-.528c1.66-.357 2.79-.714 3.456-1.095l.147-.087v-9.088l-.454.301c-.607.405-1.362.735-2.248.98c-.89.25-1.633.376-2.208.376c-2.164 0-3.764-.583-4.758-1.734c-1.004-1.16-1.514-3.191-1.514-6.031v-22.16zm-82.768 29.926c-4.057 0-7.255-1.346-9.51-3.995c-2.267-2.664-3.417-6.46-3.417-11.285c0-4.977 1.15-8.872 3.419-11.583c2.255-2.692 5.423-4.059 9.417-4.059c3.875 0 6.96 1.305 9.17 3.882c2.221 2.589 3.348 6.453 3.348 11.488c0 5.097-1.06 9.013-3.15 11.632c-2.075 2.6-5.196 3.92-9.277 3.92m.498-40.062c-7.74 0-13.888 2.268-18.27 6.741c-4.381 4.474-6.602 10.664-6.602 18.402c0 7.349 2.168 13.26 6.444 17.567c4.276 4.308 10.096 6.49 17.295 6.49c7.503 0 13.528-2.299 17.91-6.834c4.38-4.53 6.6-10.662 6.6-18.22c0-7.463-2.083-13.418-6.192-17.696c-4.112-4.28-9.895-6.45-17.185-6.45m-42.894 0c-5.265 0-9.62 1.347-12.947 4.002c-3.346 2.671-5.044 6.175-5.044 10.414c0 2.203.366 4.16 1.088 5.82c.725 1.666 1.848 3.132 3.34 4.363c1.48 1.221 3.765 2.5 6.794 3.8c2.545 1.048 4.444 1.935 5.65 2.633c1.179.685 2.016 1.373 2.488 2.043c.459.655.692 1.553.692 2.66c0 3.154-2.361 4.688-7.22 4.688c-1.803 0-3.859-.376-6.111-1.118a22.972 22.972 0 0 1-6.257-3.173l-.464-.332v10.76l.17.08c1.582.73 3.576 1.345 5.926 1.83c2.346.484 4.476.731 6.328.731c5.713 0 10.314-1.353 13.67-4.024c3.38-2.69 5.092-6.275 5.092-10.662c0-3.163-.922-5.877-2.74-8.065c-1.803-2.17-4.935-4.163-9.303-5.924c-3.48-1.397-5.71-2.556-6.629-3.446c-.887-.86-1.337-2.076-1.337-3.615c0-1.366.556-2.459 1.697-3.345c1.15-.89 2.75-1.343 4.756-1.343c1.863 0 3.768.294 5.663.87c1.894.577 3.556 1.35 4.945 2.294l.456.312V41.358l-.175-.075c-1.28-.55-2.97-1.02-5.02-1.4c-2.044-.378-3.897-.57-5.508-.57m-47.13 40.062c-4.056 0-7.255-1.346-9.509-3.995c-2.268-2.664-3.415-6.46-3.415-11.285c0-4.977 1.148-8.872 3.418-11.583c2.253-2.692 5.42-4.059 9.416-4.059c3.875 0 6.96 1.305 9.17 3.882c2.221 2.589 3.348 6.453 3.348 11.488c0 5.097-1.06 9.013-3.15 11.632c-2.076 2.6-5.196 3.92-9.278 3.92m.499-40.062c-7.742 0-13.89 2.268-18.27 6.741c-4.38 4.474-6.603 10.664-6.603 18.402c0 7.352 2.17 13.26 6.445 17.567c4.276 4.308 10.095 6.49 17.296 6.49c7.5 0 13.528-2.299 17.91-6.834c4.379-4.53 6.6-10.662 6.6-18.22c0-7.463-2.084-13.418-6.194-17.696c-4.113-4.28-9.895-6.45-17.184-6.45m-41.84 9.26v-8.129h-11.041v46.937h11.04V63.37c0-4.083.926-7.437 2.753-9.97c1.803-2.503 4.207-3.772 7.14-3.772c.995 0 2.111.164 3.32.489c1.197.322 2.064.672 2.575 1.04l.464.337v-11.13l-.18-.077c-1.027-.437-2.482-.657-4.322-.657c-2.775 0-5.258.891-7.384 2.646c-1.867 1.543-3.217 3.659-4.248 6.297zm-30.813-9.26c-5.065 0-9.584 1.087-13.427 3.228c-3.85 2.145-6.829 5.21-8.855 9.105c-2.017 3.887-3.041 8.427-3.041 13.49c0 4.434.993 8.504 2.955 12.09c1.964 3.593 4.744 6.404 8.262 8.354c3.514 1.947 7.575 2.934 12.07 2.934c5.247 0 9.727-1.049 13.32-3.117l.144-.084V75.198l-.463.339a20.766 20.766 0 0 1-5.402 2.812c-1.952.681-3.73 1.025-5.29 1.025c-4.333 0-7.81-1.355-10.335-4.027c-2.53-2.677-3.813-6.434-3.813-11.163c0-4.758 1.338-8.612 3.974-11.457c2.629-2.835 6.113-4.273 10.356-4.273c3.629 0 7.165 1.229 10.51 3.656l.463.336V41.788l-.149-.084c-1.26-.705-2.976-1.287-5.108-1.728c-2.122-.44-4.198-.663-6.171-.663m-32.927 1.131h-11.042v46.937h11.042zm-5.408-19.995c-1.817 0-3.402.619-4.704 1.844c-1.308 1.23-1.972 2.778-1.972 4.604c0 1.798.656 3.317 1.95 4.514c1.287 1.193 2.877 1.798 4.726 1.798c1.848 0 3.444-.605 4.746-1.796c1.31-1.199 1.975-2.718 1.975-4.516c0-1.762-.647-3.295-1.921-4.554c-1.273-1.257-2.889-1.894-4.8-1.894m-27.548 16.533V87.38h11.268V21.886h-15.595l-19.823 48.647l-19.236-48.647h-16.23v65.495h10.589V36.977h.364l20.313 50.404h7.99l19.996-50.4z"
            ></path>
            <path fill="#f1511b" d="M51.939 51.939H0V0h51.939z"></path>
            <path fill="#80cc28" d="M109.287 51.939H57.348V0h51.939z"></path>
            <path fill="#00adef" d="M51.938 109.307H0V57.368h51.938z"></path>
            <path
              fill="#fbbc09"
              d="M109.287 109.307H57.348V57.368h51.939z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M.95 14.184L12 20.403l9.919-5.55v2.21L12 22.662l-10.484-5.96l-.565.308v.77L12 24l11.05-6.218v-4.317l-.515-.309L12 19.118l-9.867-5.653v-2.21L12 16.805l11.05-6.218V6.32l-.515-.308L12 11.974L2.647 6.681L12 1.388l7.76 4.368l.668-.411v-.566L12 0L.95 6.27v.72L12 13.207l9.919-5.55v2.26L12 15.52L1.516 9.56l-.565.308Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m13.966 22.624l-1.69-4.281H8.122l3.892-9.144l5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5.926 12.497c2.063-.444 1.782-2.909 1.72-3.448c-.1-.83-1.078-2.282-2.404-2.167c-1.67.15-1.914 2.561-1.914 2.561c-.226 1.115.54 3.497 2.598 3.053m2.191 4.288c-.06.173-.195.616-.079 1.002c.23.866.982.905.982.905h1.08v-2.64H8.944c-.52.154-.77.559-.827.733m1.638-8.422c1.14 0 2.06-1.312 2.06-2.933c0-1.62-.92-2.93-2.06-2.93c-1.138 0-2.06 1.31-2.06 2.93c0 1.621.923 2.933 2.06 2.933m4.907.193c1.523.198 2.502-1.427 2.697-2.659c.198-1.23-.784-2.658-1.862-2.904c-1.08-.248-2.43 1.483-2.552 2.61c-.147 1.38.197 2.758 1.717 2.953m0 3.448c-1.865-2.905-4.513-1.723-5.399-.245c-.882 1.477-2.256 2.41-2.452 2.658c-.198.244-2.846 1.673-2.258 4.284c.588 2.609 2.653 2.56 2.653 2.56s1.521.15 3.286-.246c1.766-.391 3.286.098 3.286.098s4.124 1.38 5.253-1.278c1.127-2.66-.638-4.038-.638-4.038s-2.356-1.823-3.731-3.793m-6.007 7.75c-1.158-.231-1.62-1.021-1.677-1.156c-.057-.137-.386-.772-.212-1.853c.5-1.619 1.927-1.735 1.927-1.735h1.427v-1.755l1.216.02v6.479zm4.59-.019c-1.196-.308-1.252-1.158-1.252-1.158v-3.412l1.252-.02v3.066c.076.328.482.387.482.387H15v-3.433h1.331v4.57zm7.453-9.11c0-.59-.49-2.364-2.305-2.364c-1.818 0-2.061 1.675-2.061 2.859c0 1.13.095 2.707 2.354 2.657c2.26-.05 2.012-2.56 2.012-3.152"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M0 21.527h6.224v.889H0zm0-1.71h6.224v.891H0zm1.771-1.708h2.672v.896H1.771zm0-1.702h2.672v.896H1.771zm0-1.71h2.672v.896H1.771zm0-1.708h2.672v.896H1.771zM0 11.287h6.224v.896H0zm0-1.703h6.224v.889H0zm7.109 11.124h9.568c.161-.276.287-.577.359-.891H7.109zm8.823-4.301H8.891v.896h7.792a3.638 3.638 0 0 0-.745-.896zm-7.047-1.71v.896h7.047c.303-.249.547-.552.751-.896zm7.792-3.41H7.109v.896h9.921a3.643 3.643 0 0 0-.353-.896M13.74 9.584H7.109v.889h8.912a3.367 3.367 0 0 0-2.281-.889m-4.855 3.405h2.667v.896H8.885zm5.339.896h2.787a3.43 3.43 0 0 0 .12-.896h-2.907zm-5.339 4.224h2.667v.896H8.885zm5.339 0v.896h2.907c0-.308-.043-.609-.12-.896zm-7.115 4.303l6.625.004c.891 0 1.692-.337 2.292-.889H7.109zm10.672-.885h4.437v.889h-4.437zm0-1.71h4.437v.891h-4.437zm1.771-1.708h2.667v.896h-2.667zm0-1.702h2.667v.896h-2.667zm3.907-5.12h-5.677v.896h5.984zm-.59-1.703h-5.088v.889h5.396zm4.683 11.943H32v.889h-4.448zm0-1.71H32v.891h-4.448zm0-1.708h2.667v.896h-2.667zm0-1.702h2.667v.896h-2.667zm0-.814h2.667v-.896H25.14l-.255.724l-.249-.724h-5.084v.896h2.667v-.823l.287.823h4.765l.281-.823zm2.667-2.604H25.73l-.308.896h4.797zm-3.307-3.405l-.308.889H32v-.889zm-2.027 12.828l.308-.885h-.615zm-.588-1.704h1.181l.319-.891h-1.813zm-.6-1.703h2.381l.312-.896h-3.005zm-.593-1.702h3.573l.301-.896h-4.181zm-3.552-3.418h4.803l-.308-.896h-4.495zm6.464-1.702H32v-.896h-5.683z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m.66 16.95l13.242-4.926L.66 6.852V0l22.68 9.132v5.682L.66 24Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M16.331 18.171V17.06l-.022.01c-.25.121-.522.19-.801.203a1.2 1.2 0 0 1-.806-.237a1.04 1.04 0 0 1-.352-.498a1.2 1.2 0 0 1-.023-.667c.052-.225.178-.426.357-.569c.16-.134.355-.218.562-.242a1.85 1.85 0 0 1 1.061.198l.024.013v-1.117l-.051-.014a2.9 2.9 0 0 0-1.011-.132a2.3 2.3 0 0 0-.903.206c-.287.132-.54.327-.739.571a2.22 2.22 0 0 0-.04 2.705c.295.378.709.645 1.175.756c.491.12 1.006.102 1.487-.052zm-10.995 0V17.06l-.022.01c-.25.121-.522.19-.801.203a1.18 1.18 0 0 1-.806-.237a1.03 1.03 0 0 1-.351-.498a1.2 1.2 0 0 1-.024-.667c.052-.225.177-.426.357-.569c.16-.134.355-.218.562-.242a1.85 1.85 0 0 1 1.061.198l.024.013v-1.117l-.051-.014a2.9 2.9 0 0 0-1.011-.132a2.3 2.3 0 0 0-.903.206a2.1 2.1 0 0 0-.74.571a2.224 2.224 0 0 0-.041 2.705a2.1 2.1 0 0 0 1.176.756c.491.12 1.005.102 1.487-.052zm3.924-.922l-.004.957l.07.012q.33.061.664.085q.293.028.587.012q.282-.021.551-.104c.21-.06.405-.163.571-.305a1.16 1.16 0 0 0 .333-.478a1.3 1.3 0 0 0-.007-.96a1.1 1.1 0 0 0-.298-.414a1.3 1.3 0 0 0-.438-.255l-.722-.268a.4.4 0 0 1-.197-.188a.25.25 0 0 1 .008-.219a.4.4 0 0 1 .154-.142a.8.8 0 0 1 .257-.074q.23-.034.46.005q.27.03.533.096l.038.008v-.883l-.069-.015a5 5 0 0 0-.543-.097a2.8 2.8 0 0 0-.714-.003c-.3.027-.585.143-.821.33c-.16.126-.281.293-.351.484c-.104.29-.105.608 0 .899q.082.219.252.381q.146.14.327.236q.236.126.497.195q.086.026.17.054l.085.031l.024.01c.084.03.162.078.226.14q.068.064.101.151a.3.3 0 0 1 .001.161a.34.34 0 0 1-.166.198a.9.9 0 0 1-.275.086a2 2 0 0 1-.427.021a5 5 0 0 1-.557-.074a9 9 0 0 1-.287-.067zm-2.475.995h1.05v-4.167h-1.05zm12.162-2.936a1.095 1.095 0 0 1 1.541.158a1.094 1.094 0 0 1-.157 1.541l-.017.014a1.096 1.096 0 0 1-1.367-1.713m-1.525.854a2.193 2.193 0 0 0 2.666 2.107a2.139 2.139 0 0 0 .701-3.937a2.207 2.207 0 0 0-3.367 1.83m5.539-5.434a.52.52 0 0 0 1.039 0V9.573a.52.52 0 0 0-1.039 0zm-2.844 0a.522.522 0 0 0 1.041 0V8.139a.521.521 0 0 0-1.04 0v2.589m-2.887 1.043a.521.521 0 0 0 1.039 0V6.17a.52.52 0 0 0-1.039 0zm-2.838-1.043a.521.521 0 0 0 1.04 0V8.139a.52.52 0 0 0-1.039 0zm-2.9 0a.522.522 0 0 0 1.039 0V9.573a.52.52 0 0 0-1.039 0zm-2.87 0a.52.52 0 0 0 1.039 0V8.139a.52.52 0 0 0-1.039 0zm-2.887 1.043a.52.52 0 0 0 1.039 0V6.17a.52.52 0 0 0-1.039 0zm-2.861-1.043a.522.522 0 0 0 1.04 0V8.139a.52.52 0 0 0-1.039 0zm-2.877 0a.521.521 0 0 0 1.039 0V9.573a.52.52 0 0 0-1.039 0z"
            ></path>
          </svg>
        </div>
        <div className="flex bg-white w-screen justify-around items-center track">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7.64 10.38c0 .25.02.45.07.62c.05.12.12.28.21.46c.04.04.05.1.05.15c0 .07-.04.13-.13.2l-.42.28c-.06.04-.12.06-.17.06c-.07 0-.13-.04-.2-.1c-.09-.1-.17-.2-.24-.31c-.06-.11-.13-.24-.2-.39c-.52.61-1.17.92-1.96.92c-.56 0-1-.16-1.33-.48c-.32-.32-.49-.75-.49-1.29c0-.55.2-1 .6-1.36c.41-.34.95-.52 1.63-.52c.23 0 .44.02.71.06c.23.03.5.08.76.14v-.48c0-.51-.1-.84-.31-1.07c-.22-.21-.57-.3-1.08-.3c-.24 0-.48.03-.72.08c-.25.06-.49.13-.72.23c-.11.04-.2.07-.23.08c-.05.02-.08.02-.11.02c-.09 0-.14-.06-.14-.2v-.33c0-.1.01-.18.05-.23q.045-.075.18-.12c.24-.14.51-.24.84-.32a4 4 0 0 1 1.04-.13q1.185 0 1.74.54c.37.36.55.91.55 1.64v2.15zm-2.7 1.02c.22 0 .44-.04.68-.12s.45-.23.63-.43c.11-.13.19-.27.25-.43c0-.16.05-.35.05-.58v-.27c-.2-.07-.4-.07-.62-.12a7 7 0 0 0-.62-.04c-.45 0-.77.09-.99.27s-.32.43-.32.76c0 .32.07.56.24.71c.16.17.39.25.7.25m5.34.71a.6.6 0 0 1-.28-.06c-.03-.05-.08-.14-.12-.26L8.32 6.65c-.04-.15-.06-.22-.06-.27c0-.11.05-.17.16-.17h.65c.13 0 .22.02.26.07c.06.04.1.13.14.26l1.11 4.4l1.04-4.4c.03-.13.07-.22.13-.26c.05-.04.14-.07.25-.07h.55c.12 0 .21.02.26.07c.05.04.1.13.13.26L14 11l1.14-4.46c.04-.13.09-.22.13-.26c.06-.04.14-.07.26-.07h.62c.11 0 .17.06.17.17c0 .03-.01.07-.02.12c0 0-.02.08-.04.15l-1.61 5.14c-.04.14-.08.21-.15.26c-.04.04-.13.07-.24.07h-.57c-.13 0-.19-.02-.27-.07a.45.45 0 0 1-.12-.26L12.27 7.5l-1.03 4.28q-.045.195-.12.27a.5.5 0 0 1-.27.06zm8.55.18c-.33 0-.7-.04-1.03-.12s-.59-.17-.76-.26a.5.5 0 0 1-.21-.19a.4.4 0 0 1-.04-.18v-.34c0-.14.05-.2.15-.2h.12c.04 0 .1.05.17.08c.22.1.47.18.73.23c.27.05.54.08.79.08c.42 0 .75-.07.97-.22c.23-.17.35-.36.35-.63c0-.19-.07-.34-.18-.47c-.12-.12-.35-.24-.67-.34l-.97-.3c-.48-.16-.84-.38-1.06-.68a1.58 1.58 0 0 1-.33-.97c0-.28.06-.52.18-.73c.12-.22.28-.4.46-.55c.22-.15.44-.26.71-.34q.39-.12.84-.12q.21 0 .45.03c.14.02.28.05.42.07c.14.04.26.07.38.11s.2.08.28.12c.09.05.16.1.2.16s.06.13.06.22v.32q0 .21-.15.21c-.05 0-.14-.03-.26-.08c-.37-.17-.8-.26-1.27-.26c-.38 0-.66.06-.89.19c-.2.12-.31.32-.31.59c0 .19.07.35.2.47c.13.13.38.25.73.37l.95.3c.48.14.82.36 1.03.64q.3.405.3.93c0 .28-.06.54-.17.77c-.12.22-.28.42-.5.58c-.19.17-.44.29-.72.38s-.62.13-.95.13m1.25 3.24C17.89 17.14 14.71 18 12 18c-3.85 0-7.3-1.42-9.91-3.77c-.21-.19-.02-.44.23-.29c2.82 1.63 6.29 2.62 9.89 2.62c2.43 0 5.1-.5 7.55-1.56c.37-.15.68.26.32.53M21 14.5c-.29-.37-1.86-.18-2.57-.1c-.21.03-.24-.16-.05-.3c1.25-.87 3.31-.6 3.54-.33c.24.3-.06 2.36-1.23 3.34c-.19.15-.36.07-.28-.11c.27-.68.86-2.16.59-2.5"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5em"
            height="3em"
            viewBox="0 0 512 110"
          >
            <path
              fill="#706d6e"
              d="M512 49.449v-9.005h-11.182V26.446l-.376.115l-10.503 3.214l-.206.063v10.606h-16.577v-5.908c0-2.751.615-4.857 1.828-6.26c1.204-1.388 2.926-2.093 5.122-2.093c1.58 0 3.214.372 4.86 1.105l.412.184V17.99l-.194-.07c-1.535-.553-3.623-.83-6.21-.83c-3.262 0-6.225.709-8.81 2.116a15.052 15.052 0 0 0-6.045 5.976c-1.42 2.554-2.14 5.503-2.14 8.767v6.496h-7.786v9.005h7.786v37.933h11.177V49.449h16.577v24.106c0 9.928 4.682 14.96 13.918 14.96a22.79 22.79 0 0 0 4.746-.528c1.66-.357 2.79-.714 3.456-1.095l.147-.087v-9.088l-.454.301c-.607.405-1.362.735-2.248.98c-.89.25-1.633.376-2.208.376c-2.164 0-3.764-.583-4.758-1.734c-1.004-1.16-1.514-3.191-1.514-6.031v-22.16zm-82.768 29.926c-4.057 0-7.255-1.346-9.51-3.995c-2.267-2.664-3.417-6.46-3.417-11.285c0-4.977 1.15-8.872 3.419-11.583c2.255-2.692 5.423-4.059 9.417-4.059c3.875 0 6.96 1.305 9.17 3.882c2.221 2.589 3.348 6.453 3.348 11.488c0 5.097-1.06 9.013-3.15 11.632c-2.075 2.6-5.196 3.92-9.277 3.92m.498-40.062c-7.74 0-13.888 2.268-18.27 6.741c-4.381 4.474-6.602 10.664-6.602 18.402c0 7.349 2.168 13.26 6.444 17.567c4.276 4.308 10.096 6.49 17.295 6.49c7.503 0 13.528-2.299 17.91-6.834c4.38-4.53 6.6-10.662 6.6-18.22c0-7.463-2.083-13.418-6.192-17.696c-4.112-4.28-9.895-6.45-17.185-6.45m-42.894 0c-5.265 0-9.62 1.347-12.947 4.002c-3.346 2.671-5.044 6.175-5.044 10.414c0 2.203.366 4.16 1.088 5.82c.725 1.666 1.848 3.132 3.34 4.363c1.48 1.221 3.765 2.5 6.794 3.8c2.545 1.048 4.444 1.935 5.65 2.633c1.179.685 2.016 1.373 2.488 2.043c.459.655.692 1.553.692 2.66c0 3.154-2.361 4.688-7.22 4.688c-1.803 0-3.859-.376-6.111-1.118a22.972 22.972 0 0 1-6.257-3.173l-.464-.332v10.76l.17.08c1.582.73 3.576 1.345 5.926 1.83c2.346.484 4.476.731 6.328.731c5.713 0 10.314-1.353 13.67-4.024c3.38-2.69 5.092-6.275 5.092-10.662c0-3.163-.922-5.877-2.74-8.065c-1.803-2.17-4.935-4.163-9.303-5.924c-3.48-1.397-5.71-2.556-6.629-3.446c-.887-.86-1.337-2.076-1.337-3.615c0-1.366.556-2.459 1.697-3.345c1.15-.89 2.75-1.343 4.756-1.343c1.863 0 3.768.294 5.663.87c1.894.577 3.556 1.35 4.945 2.294l.456.312V41.358l-.175-.075c-1.28-.55-2.97-1.02-5.02-1.4c-2.044-.378-3.897-.57-5.508-.57m-47.13 40.062c-4.056 0-7.255-1.346-9.509-3.995c-2.268-2.664-3.415-6.46-3.415-11.285c0-4.977 1.148-8.872 3.418-11.583c2.253-2.692 5.42-4.059 9.416-4.059c3.875 0 6.96 1.305 9.17 3.882c2.221 2.589 3.348 6.453 3.348 11.488c0 5.097-1.06 9.013-3.15 11.632c-2.076 2.6-5.196 3.92-9.278 3.92m.499-40.062c-7.742 0-13.89 2.268-18.27 6.741c-4.38 4.474-6.603 10.664-6.603 18.402c0 7.352 2.17 13.26 6.445 17.567c4.276 4.308 10.095 6.49 17.296 6.49c7.5 0 13.528-2.299 17.91-6.834c4.379-4.53 6.6-10.662 6.6-18.22c0-7.463-2.084-13.418-6.194-17.696c-4.113-4.28-9.895-6.45-17.184-6.45m-41.84 9.26v-8.129h-11.041v46.937h11.04V63.37c0-4.083.926-7.437 2.753-9.97c1.803-2.503 4.207-3.772 7.14-3.772c.995 0 2.111.164 3.32.489c1.197.322 2.064.672 2.575 1.04l.464.337v-11.13l-.18-.077c-1.027-.437-2.482-.657-4.322-.657c-2.775 0-5.258.891-7.384 2.646c-1.867 1.543-3.217 3.659-4.248 6.297zm-30.813-9.26c-5.065 0-9.584 1.087-13.427 3.228c-3.85 2.145-6.829 5.21-8.855 9.105c-2.017 3.887-3.041 8.427-3.041 13.49c0 4.434.993 8.504 2.955 12.09c1.964 3.593 4.744 6.404 8.262 8.354c3.514 1.947 7.575 2.934 12.07 2.934c5.247 0 9.727-1.049 13.32-3.117l.144-.084V75.198l-.463.339a20.766 20.766 0 0 1-5.402 2.812c-1.952.681-3.73 1.025-5.29 1.025c-4.333 0-7.81-1.355-10.335-4.027c-2.53-2.677-3.813-6.434-3.813-11.163c0-4.758 1.338-8.612 3.974-11.457c2.629-2.835 6.113-4.273 10.356-4.273c3.629 0 7.165 1.229 10.51 3.656l.463.336V41.788l-.149-.084c-1.26-.705-2.976-1.287-5.108-1.728c-2.122-.44-4.198-.663-6.171-.663m-32.927 1.131h-11.042v46.937h11.042zm-5.408-19.995c-1.817 0-3.402.619-4.704 1.844c-1.308 1.23-1.972 2.778-1.972 4.604c0 1.798.656 3.317 1.95 4.514c1.287 1.193 2.877 1.798 4.726 1.798c1.848 0 3.444-.605 4.746-1.796c1.31-1.199 1.975-2.718 1.975-4.516c0-1.762-.647-3.295-1.921-4.554c-1.273-1.257-2.889-1.894-4.8-1.894m-27.548 16.533V87.38h11.268V21.886h-15.595l-19.823 48.647l-19.236-48.647h-16.23v65.495h10.589V36.977h.364l20.313 50.404h7.99l19.996-50.4z"
            ></path>
            <path fill="#f1511b" d="M51.939 51.939H0V0h51.939z"></path>
            <path fill="#80cc28" d="M109.287 51.939H57.348V0h51.939z"></path>
            <path fill="#00adef" d="M51.938 109.307H0V57.368h51.938z"></path>
            <path
              fill="#fbbc09"
              d="M109.287 109.307H57.348V57.368h51.939z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M.95 14.184L12 20.403l9.919-5.55v2.21L12 22.662l-10.484-5.96l-.565.308v.77L12 24l11.05-6.218v-4.317l-.515-.309L12 19.118l-9.867-5.653v-2.21L12 16.805l11.05-6.218V6.32l-.515-.308L12 11.974L2.647 6.681L12 1.388l7.76 4.368l.668-.411v-.566L12 0L.95 6.27v.72L12 13.207l9.919-5.55v2.26L12 15.52L1.516 9.56l-.565.308Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m13.966 22.624l-1.69-4.281H8.122l3.892-9.144l5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5.926 12.497c2.063-.444 1.782-2.909 1.72-3.448c-.1-.83-1.078-2.282-2.404-2.167c-1.67.15-1.914 2.561-1.914 2.561c-.226 1.115.54 3.497 2.598 3.053m2.191 4.288c-.06.173-.195.616-.079 1.002c.23.866.982.905.982.905h1.08v-2.64H8.944c-.52.154-.77.559-.827.733m1.638-8.422c1.14 0 2.06-1.312 2.06-2.933c0-1.62-.92-2.93-2.06-2.93c-1.138 0-2.06 1.31-2.06 2.93c0 1.621.923 2.933 2.06 2.933m4.907.193c1.523.198 2.502-1.427 2.697-2.659c.198-1.23-.784-2.658-1.862-2.904c-1.08-.248-2.43 1.483-2.552 2.61c-.147 1.38.197 2.758 1.717 2.953m0 3.448c-1.865-2.905-4.513-1.723-5.399-.245c-.882 1.477-2.256 2.41-2.452 2.658c-.198.244-2.846 1.673-2.258 4.284c.588 2.609 2.653 2.56 2.653 2.56s1.521.15 3.286-.246c1.766-.391 3.286.098 3.286.098s4.124 1.38 5.253-1.278c1.127-2.66-.638-4.038-.638-4.038s-2.356-1.823-3.731-3.793m-6.007 7.75c-1.158-.231-1.62-1.021-1.677-1.156c-.057-.137-.386-.772-.212-1.853c.5-1.619 1.927-1.735 1.927-1.735h1.427v-1.755l1.216.02v6.479zm4.59-.019c-1.196-.308-1.252-1.158-1.252-1.158v-3.412l1.252-.02v3.066c.076.328.482.387.482.387H15v-3.433h1.331v4.57zm7.453-9.11c0-.59-.49-2.364-2.305-2.364c-1.818 0-2.061 1.675-2.061 2.859c0 1.13.095 2.707 2.354 2.657c2.26-.05 2.012-2.56 2.012-3.152"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M0 21.527h6.224v.889H0zm0-1.71h6.224v.891H0zm1.771-1.708h2.672v.896H1.771zm0-1.702h2.672v.896H1.771zm0-1.71h2.672v.896H1.771zm0-1.708h2.672v.896H1.771zM0 11.287h6.224v.896H0zm0-1.703h6.224v.889H0zm7.109 11.124h9.568c.161-.276.287-.577.359-.891H7.109zm8.823-4.301H8.891v.896h7.792a3.638 3.638 0 0 0-.745-.896zm-7.047-1.71v.896h7.047c.303-.249.547-.552.751-.896zm7.792-3.41H7.109v.896h9.921a3.643 3.643 0 0 0-.353-.896M13.74 9.584H7.109v.889h8.912a3.367 3.367 0 0 0-2.281-.889m-4.855 3.405h2.667v.896H8.885zm5.339.896h2.787a3.43 3.43 0 0 0 .12-.896h-2.907zm-5.339 4.224h2.667v.896H8.885zm5.339 0v.896h2.907c0-.308-.043-.609-.12-.896zm-7.115 4.303l6.625.004c.891 0 1.692-.337 2.292-.889H7.109zm10.672-.885h4.437v.889h-4.437zm0-1.71h4.437v.891h-4.437zm1.771-1.708h2.667v.896h-2.667zm0-1.702h2.667v.896h-2.667zm3.907-5.12h-5.677v.896h5.984zm-.59-1.703h-5.088v.889h5.396zm4.683 11.943H32v.889h-4.448zm0-1.71H32v.891h-4.448zm0-1.708h2.667v.896h-2.667zm0-1.702h2.667v.896h-2.667zm0-.814h2.667v-.896H25.14l-.255.724l-.249-.724h-5.084v.896h2.667v-.823l.287.823h4.765l.281-.823zm2.667-2.604H25.73l-.308.896h4.797zm-3.307-3.405l-.308.889H32v-.889zm-2.027 12.828l.308-.885h-.615zm-.588-1.704h1.181l.319-.891h-1.813zm-.6-1.703h2.381l.312-.896h-3.005zm-.593-1.702h3.573l.301-.896h-4.181zm-3.552-3.418h4.803l-.308-.896h-4.495zm6.464-1.702H32v-.896h-5.683z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m.66 16.95l13.242-4.926L.66 6.852V0l22.68 9.132v5.682L.66 24Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M16.331 18.171V17.06l-.022.01c-.25.121-.522.19-.801.203a1.2 1.2 0 0 1-.806-.237a1.04 1.04 0 0 1-.352-.498a1.2 1.2 0 0 1-.023-.667c.052-.225.178-.426.357-.569c.16-.134.355-.218.562-.242a1.85 1.85 0 0 1 1.061.198l.024.013v-1.117l-.051-.014a2.9 2.9 0 0 0-1.011-.132a2.3 2.3 0 0 0-.903.206c-.287.132-.54.327-.739.571a2.22 2.22 0 0 0-.04 2.705c.295.378.709.645 1.175.756c.491.12 1.006.102 1.487-.052zm-10.995 0V17.06l-.022.01c-.25.121-.522.19-.801.203a1.18 1.18 0 0 1-.806-.237a1.03 1.03 0 0 1-.351-.498a1.2 1.2 0 0 1-.024-.667c.052-.225.177-.426.357-.569c.16-.134.355-.218.562-.242a1.85 1.85 0 0 1 1.061.198l.024.013v-1.117l-.051-.014a2.9 2.9 0 0 0-1.011-.132a2.3 2.3 0 0 0-.903.206a2.1 2.1 0 0 0-.74.571a2.224 2.224 0 0 0-.041 2.705a2.1 2.1 0 0 0 1.176.756c.491.12 1.005.102 1.487-.052zm3.924-.922l-.004.957l.07.012q.33.061.664.085q.293.028.587.012q.282-.021.551-.104c.21-.06.405-.163.571-.305a1.16 1.16 0 0 0 .333-.478a1.3 1.3 0 0 0-.007-.96a1.1 1.1 0 0 0-.298-.414a1.3 1.3 0 0 0-.438-.255l-.722-.268a.4.4 0 0 1-.197-.188a.25.25 0 0 1 .008-.219a.4.4 0 0 1 .154-.142a.8.8 0 0 1 .257-.074q.23-.034.46.005q.27.03.533.096l.038.008v-.883l-.069-.015a5 5 0 0 0-.543-.097a2.8 2.8 0 0 0-.714-.003c-.3.027-.585.143-.821.33c-.16.126-.281.293-.351.484c-.104.29-.105.608 0 .899q.082.219.252.381q.146.14.327.236q.236.126.497.195q.086.026.17.054l.085.031l.024.01c.084.03.162.078.226.14q.068.064.101.151a.3.3 0 0 1 .001.161a.34.34 0 0 1-.166.198a.9.9 0 0 1-.275.086a2 2 0 0 1-.427.021a5 5 0 0 1-.557-.074a9 9 0 0 1-.287-.067zm-2.475.995h1.05v-4.167h-1.05zm12.162-2.936a1.095 1.095 0 0 1 1.541.158a1.094 1.094 0 0 1-.157 1.541l-.017.014a1.096 1.096 0 0 1-1.367-1.713m-1.525.854a2.193 2.193 0 0 0 2.666 2.107a2.139 2.139 0 0 0 .701-3.937a2.207 2.207 0 0 0-3.367 1.83m5.539-5.434a.52.52 0 0 0 1.039 0V9.573a.52.52 0 0 0-1.039 0zm-2.844 0a.522.522 0 0 0 1.041 0V8.139a.521.521 0 0 0-1.04 0v2.589m-2.887 1.043a.521.521 0 0 0 1.039 0V6.17a.52.52 0 0 0-1.039 0zm-2.838-1.043a.521.521 0 0 0 1.04 0V8.139a.52.52 0 0 0-1.039 0zm-2.9 0a.522.522 0 0 0 1.039 0V9.573a.52.52 0 0 0-1.039 0zm-2.87 0a.52.52 0 0 0 1.039 0V8.139a.52.52 0 0 0-1.039 0zm-2.887 1.043a.52.52 0 0 0 1.039 0V6.17a.52.52 0 0 0-1.039 0zm-2.861-1.043a.522.522 0 0 0 1.04 0V8.139a.52.52 0 0 0-1.039 0zm-2.877 0a.521.521 0 0 0 1.039 0V9.573a.52.52 0 0 0-1.039 0z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
