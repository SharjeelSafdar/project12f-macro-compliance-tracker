import React, { FC } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "https://zeit.co/now", label: "ZEIT" },
  {
    href:
      "https://github.com/SharjeelSafdar/project12f-macro-compliance-tracker",
    label: "GitHub",
  },
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}));

const Nav: FC = () => (
  <nav style={{ textAlign: "center" }}>
    <ul
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "4px 16px",
      }}
    >
      {links.map(({ key, href, label }) => (
        <li
          key={key}
          style={{
            display: "flex",
            padding: "6px 8px",
          }}
        >
          <a
            href={href}
            style={{
              color: "#067df7",
              textDecoration: "none",
              fontSize: "13px",
            }}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
