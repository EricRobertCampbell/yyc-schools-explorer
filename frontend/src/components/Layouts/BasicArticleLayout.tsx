import "./BasicArticleLayout.css";
// types and classes
import type { ReactNode } from "react";

interface BasicArticleLayoutProps {
  children: ReactNode;
}
/**
 * Enforces a basic layout for an article - centred, left justified, and with a maximum width
 */
export const BasicArticleLayout = ({ children }: BasicArticleLayoutProps) => {
  return <div id="main-article">{children}</div>;
};
