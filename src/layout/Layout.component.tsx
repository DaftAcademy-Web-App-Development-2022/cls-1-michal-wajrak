import React from "react";
import { Fragment } from "react";

import styles from "./Layout.module.css";

interface Props {
	children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
	return (
		<Fragment>
			<header className={styles.header}>header</header>
			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}> footer </footer>
		</Fragment>
	);
};

export default Layout;
