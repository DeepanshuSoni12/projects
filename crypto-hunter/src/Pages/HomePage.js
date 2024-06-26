import React, { Suspense } from "react";
import Banner from "../components/Banner/Banner";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorBoundary";
const CoinsTable = React.lazy(() => import("../components/CoinsTable"));
const Homepage = () => {
  return (
    <div>
      <Banner />
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}>
      <Suspense fallback={<div>Loading...</div>}>
        <CoinsTable />
      </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Homepage;
