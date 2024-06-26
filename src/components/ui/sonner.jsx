import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-slate-950 group-[.toaster]:border-slate-200 group-[.toaster]:shadow-lg rounded-none inter tracking-[-0.02rem] text-[13.5px]",
          description: "group-[.toast]:text-slate-500 ",
          actionButton:
            "group-[.toast]:bg-slate-900 group-[.toast]:text-slate-50 ",
          cancelButton:
            "group-[.toast]:bg-slate-100 group-[.toast]:text-slate-500 ",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
