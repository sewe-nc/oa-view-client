import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveResultToLog } from "../../redux/slices/searchSlice";

function ResultField() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.search.result);
  const showLoadingIndicator = useSelector(
    (state) => state.search.status === "pending"
  );

  const printResult = () => {
    return (
      <>
        <div>Start: {result.From.Name}</div>
        {result.GoThroughLocations.map((step) => {
          return <div>--&gt; {step.Name}</div>;
        })}
        <div>Destination: {result.To.Name}</div>
      </>
    );
  };

  const content = () => {
    if (showLoadingIndicator) {
      return <div>loading...</div>;
    }

    if (!result) {
      return null;
    }

    return (
      <>
        <div>{printResult()}</div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={() => dispatch(saveResultToLog())}
            style={{ width: 128, height: 64 }}
          >
            Save to Log
          </button>
        </div>
      </>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 32 }}>
      {content()}
    </div>
  );
}

export default ResultField;
