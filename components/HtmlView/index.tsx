import React from "react";
import styles from "./styles.module.scss";

declare type HtmlViewProps = {
    content: string;
};

export default function HtmlView({ content }: HtmlViewProps) {
    return <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }} />;
};
