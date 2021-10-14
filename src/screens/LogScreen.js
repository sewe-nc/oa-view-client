import { useSelector } from "react-redux";

function LogScreen() {
  const log = useSelector((state) => state.search.log);

  const reduceStops = (stops) => {
    const reduction = stops.reduce((previousValue, currentValue) => {
      if (previousValue === "") {
        return currentValue.Name;
      }
      return previousValue + " --> " + currentValue.Name;
    }, "");

    return reduction;
  };

  return (
    <div
      className="Screen"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <table>
        <tr>
          <th>ID</th>
          <th>Origin</th>
          <th>Destination</th>
          <th>Cities</th>
          <th>Price</th>
          <th>Duration</th>
          <th>Weight</th>
          <th>Size</th>
        </tr>
        {log.map((entry) => {
          return (
            <tr>
              <td>{entry.Id}</td>
              <td>{entry.From.Name}</td>
              <td>{entry.To.Name}</td>
              <td>{reduceStops(entry.GoThroughLocations)}</td>
              <td>{entry.Price}</td>
              <td>{entry.Duration}</td>
              <td>{entry.PackageWeight}</td>
              <td>{entry.PackageSize}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default LogScreen;
