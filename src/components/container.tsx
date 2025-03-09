import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string; // Tornando className opcional
}

const Container = ({ children, className = "" }: ContainerProps) => {
  const styles = `mx-auto w-full px-4 sm:max-w-full md:max-w-[1000px] lg:px-10 ${className}`;
  return <div className={styles}>{children}</div>;
};

export default Container;
