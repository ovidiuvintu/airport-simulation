import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
    ...(mode === "dark"
    ? {
        // Color design tokens
        gray: {
                100: "#e0e0e0",
                200: "#c2c2c2",
                300: "#a3a3a3",
                400: "#858585",
                500: "#666666",
                600: "#525252",
                700: "#3d3d3d",
                800: "#292929",
                900: "#141414"
        }, //grey
        primary: {
                100: "#d0d1f6",
                200: "#a1a4ed",
                300: "#7276e4",
                400: "#4349db",
                500: "#141bd2",
                600: "#1016a8",
                700: "#0c107e",
                800: "#080b54",
                900: "#04052a"
        }, //primary color
        greenAccent: {
                100: "#dbf5ee",
                200: "#b7ebde",
                300: "#94e2cd",
                400: "#70d8bd",
                500: "#4cceac",
                600: "#3da58a",
                700: "#2e7c67",
                800: "#1e5245",
                900: "#0f2922"
        }, //green accent
        redAccent: {
                100: "#f8dcdb",
                200: "#f1b9b7",
                300: "#e99592",
                400: "#e2726e",
                500: "#db4f4a",
                600: "#af3f3b",
                700: "#832f2c",
                800: "#58201e",
                900: "#2c100f"
        }, //red accent
        blueAccent: {
                100: "#e1e2fe",
                200: "#c3c6fd",
                300: "#a4a9fc",
                400: "#868dfb",
                500: "#6870fa",
                600: "#535ac8",
                700: "#3e4396",
                800: "#2a2d64",
                900: "#151632"
        }, //blue accent

} : {
    // Color design tokens
        gray: {
                100: "#141414",
                200: "#292929",
                300: "#3d3d3d",
                400: "#525252",
                500: "#666666",
                600: "#858585",
                700: "#a3a3a3",
                800: "#c2c2c2",
                900: "#e0e0e0",
        }, //grey
        primary: {
                900: "#04052a",
                800: "#080b54",
                700: "#0c107e",
                600: "#1016a8",
                500: "#141bd2",
                400: "#4349db",
                300: "#7276e4",
                200: "#a1a4ed",
                100: "#d0d1f6",
        }, //primary color
        greenAccent: {
                900: "#0f2922",
                800: "#1e5245",
                700: "#2e7c67",
                600: "#3da58a",
                500: "#4cceac",
                400: "#70d8bd",
                300: "#94e2cd",
                200: "#b7ebde",
                100: "#dbf5ee",
        }, //green accent
        redAccent: {
                900: "#2c100f",
                800: "#58201e",
                700: "#832f2c",
                600: "#af3f3b",
                500: "#db4f4a",
                400: "#e2726e",
                300: "#e99592",
                200: "#f1b9b7",
                100: "#f8dcdb",
        }, //red accent
        blueAccent: {
                900: "#151632",
                800: "#2a2d64",
                700: "#3e4396",
                600: "#535ac8",
                500: "#6870fa",
                400: "#868dfb",
                300: "#a4a9fc",
                200: "#c3c6fd",
                100: "#e1e2fe",
        }, //blue accent

})
});


