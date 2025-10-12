import Button from "./Button";
import { PageTransition } from "./Animations";

import { FaArrowLeftLong as ArrowIcon } from "react-icons/fa6";

const NotFoundPage = () => {
  return (
    <PageTransition>
      <main className="not-found">
        <div className="container relative grid grid-pi-c">
          <h1 className="not-found__title">404</h1>
          <div className="not-found__content p-2 flex flex-col flex-ai-c gap-1">
            <p className="not-found__message">
              Oops! The page you're looking for doesn't exist.
            </p>

            <Button
              path="/"
              text="Go Back Home"
              variant="secondary"
              icon={<ArrowIcon />}
              iconPosition="left"
            />
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default NotFoundPage;
