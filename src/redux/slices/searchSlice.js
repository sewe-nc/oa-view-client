import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const status = {
  IDLE: "idle",
  PENDING: "pending",
  REJECTED: "rejected",
  FULFILLED: "fulfilled",
};

export const queryRoute = createAsyncThunk(
  "search/queryRoute",
  async (args, thunkAPI) => {
    //TODO: query route from backend
    const response = {
      Id: "responseId",
      From: {
        Id: "startCityId",
        Name: "startCityName",
        IsBlacklisted: true,
        Comment: "string",
      },
      FromId: "startCityId",
      To: {
        Id: "destinationCityId",
        Name: "destinationCityName",
        IsBlacklisted: true,
        Comment: "string",
      },
      ToId: "destinationCityId",
      PackageSize: 13,
      PackageWeight: 4,
      GoThroughLocations: [
        {
          Id: "string",
          Name: "step1Name",
          IsBlacklisted: true,
          Comment: "string",
        },
        {
          Id: "string",
          Name: "step2Name",
          IsBlacklisted: true,
          Comment: "string",
        },
        {
          Id: "string",
          Name: "step3Name",
          IsBlacklisted: true,
          Comment: "string",
        },
        {
          Id: "string",
          Name: "step4Name",
          IsBlacklisted: true,
          Comment: "string",
        },
        {
          Id: "string",
          Name: "step5Name",
          IsBlacklisted: true,
          Comment: "string",
        },
      ],
    };

    return response;
  }
);

export const saveResultToLog = createAsyncThunk(
  "search/saveLog",
  async (args, thunkAPI) => {
    const result = thunkAPI.getState().search.result;

    console.log(result);
    //TODO: send result to backend
  }
);

const initialState = {
  result: undefined,
  status: status.IDLE,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(queryRoute.pending, (state, action) => {
      state.start = action.meta.arg.start;
      state.destination = action.meta.arg.destination;
      state.weight = action.meta.arg.weight;
      state.status = status.PENDING;
    });
    builder.addCase(queryRoute.rejected, (state, action) => {
      state.status = status.REJECTED;
    });
    builder.addCase(queryRoute.fulfilled, (state, action) => {
      state.result = action.payload;
      state.status = status.FULFILLED;
    });
  },
});

export const {} = searchSlice.actions;
export default searchSlice.reducer;
