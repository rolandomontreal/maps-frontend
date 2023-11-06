import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div>
      <div>
        <h1>Error</h1>
        <p>An unexpected error has occured</p>
        <p>{error?.statusText || error?.message || 'No info from error'}</p>
      </div>
    </div>
  );
}

export default ErrorPage;