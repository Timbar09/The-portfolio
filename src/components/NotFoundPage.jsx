import Button from "./Button";

import "../assets/scss/components/NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <main className="not-found">
      <div className="container relative grid grid-pi-c">
        <h1 className="not-found__title">404</h1>
        <div className="not-found__content p-2">
          <p className="not-found__message">
            Oops! The page you're looking for doesn't exist.
          </p>

          <Button path="/" text="Go Back Home" variant="secondary" />
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
