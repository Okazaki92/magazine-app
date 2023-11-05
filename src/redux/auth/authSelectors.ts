import { RootState } from "../store"; // Zakładając, że twoje główne drzewo stanu nazywa się RootState

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectUser = (state: RootState) => state.auth.user;

export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
