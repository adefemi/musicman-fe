import { ToastContainer } from "react-toastify";
import Logo from "./logo";

const layout = <T extends Object>(
  Component: React.ComponentType<T>
): React.ComponentType<T> => {
  return (props: T) => {
    return (
      <div className="container">
        <div className="content">
          <header>
            <Logo />
          </header>
          <Component {...props} />
        </div>
        <ToastContainer />
      </div>
    );
  };
};

export default layout;
