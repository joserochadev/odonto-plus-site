import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className: String;
}) => {
  const styles = ` mx-auto md:max-w-[1000px] w-full px-10 sm:max-w-full px-4 ${className}`;
  return <div className={styles}>{children}</div>;
};

export default Container;
