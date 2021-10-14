import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setStart,
  setDestination,
  queryRoute,
} from "../../redux/slices/searchSlice";
import Select from "react-select";

function InputForm() {
  const isPending = useSelector((state) => state.search === "pending");
  const dispatch = useDispatch();

  const submit = (ev) => {
    ev.preventDefault();

    if (isPending) {
      return;
    }

    const start = ev.target.start.value;
    const destination = ev.target.destination.value;
    const weight = ev.target.weight.value;
    const size = ev.target.size.value;
    const type = ev.target.type.value;

    const query = { start, destination, weight, size, type };

    dispatch(queryRoute(query));
  };

  const cities = [
    { value: "city1", label: "Hello" },
    { value: "city2", label: "World" },
    { value: "city3", label: "Nice" },
    { value: "city4", label: "Day" },
  ];

  const weightCategories = [
    { value: "light", label: "< 1 kg" },
    { value: "medium", label: "1-5 kg" },
    { value: "heavy", label: "> 5 kg" },
  ];

  const sizeCategories = [
    { value: "small", label: "Small - A" },
    { value: "medium", label: "Medium - B" },
    { value: "large", label: "Large - C" },
  ];

  const types = [
    { value: "Regular", label: "Regular" },
    { value: "Weapons", label: "Weapons" },
    { value: "Cautious parcels", label: "Cautious parcels" },
    { value: "Refrigerated goods", label: "Refrigerated goods" },
    { value: "Drugs", label: "Drugs" },
  ];

  const weightSelection = () => {
    return (
      <div>
        Package weight:
        {weightCategories.map((weight) => {
          return (
            <div>
              {weight.label}
              <input type="radio" name="weight" value={weight.value} required />
            </div>
          );
        })}
      </div>
    );
  };

  const sizeSelection = () => {
    return (
      <div>
        Package size:
        {sizeCategories.map((size) => {
          return (
            <div>
              {size.label}
              <input type="radio" name="size" value={size.value} required />
            </div>
          );
        })}
      </div>
    );
  };
  const packageDetails = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 32,
          marginBottom: 32,
        }}
      >
        {weightSelection()}
        {sizeSelection()}
      </div>
    );
  };

  return (
    <div style={{ padding: 32 }}>
      <form onSubmit={submit}>
        <div style={{ marginBottom: 16 }}>
          Start:
          <Select name="start" options={cities} defaultValue={cities[0]} />
        </div>
        <div style={{ marginBottom: 0 }}>
          Destination:
          <Select
            name="destination"
            options={cities}
            defaultValue={cities[1]}
          />
        </div>
        {packageDetails()}
        <div style={{ marginBottom: 16 }}>
          Package type:
          <Select name="type" options={types} defaultValue={types[0]} />
        </div>
        <div
          style={{ marginTop: 32, display: "flex", justifyContent: "flex-end" }}
        >
          <button type="submit" style={{ width: 128, height: 64 }}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
