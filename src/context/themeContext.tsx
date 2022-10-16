import {
    createContext,
    FC,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

type Themes = "light" | "dark" | "system";

type RawThemes = "light" | "dark";

const ThemeContext = createContext<
    | {
          theme: RawThemes; // "dark" | "light"
          savedTheme: Themes; // "dark" | "light" | "system"
          changeTheme: (_: Themes) => void;
      }
    | undefined
>(undefined);

export const AppThemeProvider: FC<{ children?: ReactNode }> = (properties) => {
    const [theme, setTheme] = useState<RawThemes>("dark");
    const [savedTheme, setSavedTheme] = useState<Themes>("system");

    const updateTheme = () => {
        const selectedColorTheme = localStorage.getItem("theme") as Themes;

        setSavedTheme(
            selectedColorTheme != undefined ? selectedColorTheme : "system"
        );

        let themeRaw: RawThemes;

        if (!selectedColorTheme || selectedColorTheme == "system") {
            themeRaw = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
        } else {
            themeRaw = selectedColorTheme;
        }

        setTheme(themeRaw);
    };

    useEffect(() => {
        updateTheme();
    }, []);

    const changeTheme = (value: Themes) => {
        localStorage.setItem("theme", value.toString());
        updateTheme();
    };

    return (
        <ThemeContext.Provider value={{ savedTheme, theme, changeTheme }}>
            {properties.children}
        </ThemeContext.Provider>
    );
};

export const useAppTheme = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error("useAppTheme can only be used inside AppThemeProvider");
    }

    return context;
};
