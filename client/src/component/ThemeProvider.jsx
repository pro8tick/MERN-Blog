import { useSelector } from "react-redux";

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className="bg-orange-100 text-gray-700 dark:text-gray-200 dark:bg-[rgb(48,57,83)] min-h-screen">
        {children}
      </div>
    </div>
  );
}
