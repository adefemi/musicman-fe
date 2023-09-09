import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className="logo"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.5998 1.59961H6.3998C5.97546 1.59961 5.56849 1.76818 5.26843 2.06824C4.96838 2.3683 4.7998 2.77526 4.7998 3.19961V28.7996C4.7998 29.224 4.96838 29.6309 5.26843 29.931C5.56849 30.231 5.97546 30.3996 6.3998 30.3996H25.5998C26.0242 30.3996 26.4311 30.231 26.7312 29.931C27.0312 29.6309 27.1998 29.224 27.1998 28.7996V3.19961C27.1998 2.77526 27.0312 2.3683 26.7312 2.06824C26.4311 1.76818 26.0242 1.59961 25.5998 1.59961ZM20.4718 18.43C20.1758 19.0412 19.875 19.0732 20.0062 18.43C20.3438 16.7676 20.115 13.1964 17.5998 12.7996V20.3996C17.5998 21.9564 16.883 23.3116 14.9774 23.9244C13.1278 24.5148 11.059 23.8988 10.5742 22.5708C10.0894 21.2428 11.1774 19.6268 13.003 18.9612C14.0222 18.59 15.203 18.494 15.9998 18.7996V7.99961H17.5998C17.5998 11.7676 24.1038 10.942 20.4718 18.43Z"
          fill="#A4A5B6"
        />
      </svg>
    </Link>
  );
}
