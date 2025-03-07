import { ReactNode } from "react";

const Container = ({ children, className }: { children: ReactNode, className: String }) => {
    const styles = `max-w-[1000px] w-full mx-auto px-10 ${className}`
    return (

        <div
            className={styles}>
            {children}
        </div>);
}

export default Container;