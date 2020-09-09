import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import axios from "axios";

export interface GitUserDetails {
  login?: string;
  name?: string;
  id?: string;
  avatar_url?: string;
  url?: string;
  blog?: string;
  location?: string;
  bio?: string;
  public_repos?: number;
  public_gists?: number;
  followers?: number;
  following?: number;
  message?: string;
  documentation_url?: string;
}

interface GitCompareState {
  gitUsers: GitUserDetails[];
  status: string | null;
  error: string | null;
}

const initialState: GitCompareState = {
  gitUsers: [],
  error: null,
  status: null,
};

export const gitCompareSlice = createSlice({
  name: "gitCompare",
  initialState,
  reducers: {
    getUserStarted: (gitUserState) => {
      gitUserState.error = null;
      gitUserState.status = "fetching";
    },
    getUserCompleted: (gitUserState) => {
      gitUserState.status = "fetched";
    },
    setGitUser: (gitUserState, action: PayloadAction<GitUserDetails>) => {
      gitUserState.gitUsers = [...gitUserState.gitUsers!, action.payload];
    },
    setError: (gitUserState, action: PayloadAction<string>) => {
      gitUserState.error = action.payload;
    },
  },
});

const {
  setGitUser,
  setError,
  getUserStarted,
  getUserCompleted,
} = gitCompareSlice.actions;

export const fetchGitDetails = (username: string): AppThunk => async (
  dispatch,
  getState
) => {
  const allUsers = getState().gitCompare.gitUsers;
  const userFound = allUsers.findIndex(
    (usr) => usr.login?.toLowerCase() === username.toLowerCase()
  );
  dispatch(getUserStarted());
  console.log(userFound);
  if (userFound === -1) {
    try {
      const { data } = await axios.get<GitUserDetails>(
        "https://api.github.com/users/" + username
      );
      dispatch(setGitUser(data));
      dispatch(getUserCompleted());
    } catch (err) {
      dispatch(setError(username + " git user not found"));
      dispatch(getUserCompleted());
    }
  } else {
    dispatch(setError("User already compared"));
    dispatch(getUserCompleted());
  }
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectGitUser = (state: RootState) => state.gitCompare.gitUsers;
export const selectStatus = (state: RootState) => state.gitCompare.status;
export const selectError = (state: RootState) => state.gitCompare.error;

export default gitCompareSlice.reducer;
