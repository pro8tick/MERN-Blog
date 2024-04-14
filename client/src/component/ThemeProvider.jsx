import { useSelector } from "react-redux";

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div
        className="bg-fuchsia-50/20 text-gray-700 dark:text-gray-200 dark:bg-[rgb(48,57,83)] min-h-screen"
        style={{
          backgroundImage:
            "linear-gradient(to buttom left, yellow 10%, transparent 10%)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
