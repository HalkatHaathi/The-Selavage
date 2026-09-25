"use client";

import { NextStudio } from "next-sanity/studio/client-component";
import config from "@/sanity.config";
import { sanityConfigured } from "@/lib/sanity/client";

function StudioNotConfigured() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
        background: "#fff",
        color: "#111",
      }}
    >
      <div style={{ maxWidth: 560 }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem" }}>
          Sanity Studio isn&rsquo;t configured yet
        </h1>
        <p style={{ marginBottom: "1rem", lineHeight: 1.6 }}>
          <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> is missing, so the Studio
          can&rsquo;t connect to a dataset. The public site reads live content
          from Sanity, so pages will show an empty state until this is set
          and content is published.
        </p>
        <ol style={{ lineHeight: 1.8, paddingLeft: "1.25rem", marginBottom: "1rem" }}>
          <li>
            Run <code>npx sanity@latest init</code> to create a project (or use
            an existing one).
          </li>
          <li>
            Add a <code>.env.local</code> file with:
            <pre
              style={{
                background: "#f6f6f6",
                padding: "0.75rem 1rem",
                marginTop: "0.5rem",
                fontSize: "0.85rem",
                overflowX: "auto",
              }}
            >
{`NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production`}
            </pre>
          </li>
          <li>Restart the dev server and reload this page.</li>
        </ol>
        <p style={{ color: "#6b6b6b", fontSize: "0.9rem" }}>
          See <code>ENV_VARS.md</code> in the repo for details.
        </p>
      </div>
    </div>
  );
}

export default function SanityStudio() {
  if (!sanityConfigured) {
    return <StudioNotConfigured />;
  }
  return <NextStudio config={config} history="hash" />;
}
