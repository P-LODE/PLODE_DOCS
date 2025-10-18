import React, { useState, useEffect } from "react";
import { GraphiQL } from "graphiql";
import { createGraphiQLFetcher } from "@graphiql/toolkit";
import GraphQLLogo from "./GraphQLLogo.js";
import "graphiql/style.css";
import "./styles.css";
import "../../../lib/monaco-environment";

type Network = "mainnet" | "testnet" | "devnet";

interface GraphQLEditorProps {
  network?: Network;
  query?: string;
  variables?: string;
  endpoint?: string;
  hideNetworkSelector?: boolean;
  showFullscreenButton?: boolean;
}

const isEmptyVariables = (initialVariables?: string): boolean => {
  if (!initialVariables) return true;
  const trimmed = initialVariables.trim();
  return trimmed === "" || trimmed === "{}" || trimmed === "null";
};

const getNetworkUrl = (network: Network = "mainnet", customEndpoint?: string) => {
  if (customEndpoint) return customEndpoint;
  return `https://api.${network}.aptoslabs.com/v1/graphql`;
};

export const GraphQLEditor: React.FC<GraphQLEditorProps> = ({
  network: initialNetwork = "mainnet",
  query,
  variables,
  endpoint,
  hideNetworkSelector = false,
  showFullscreenButton = true,
}) => {
  const [network, setNetwork] = useState<Network>(initialNetwork);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const t = document.documentElement.getAttribute("data-theme");
    return t === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    const updateTheme = () => {
      const t = document.documentElement.getAttribute("data-theme");
      if (t === "dark" || t === "light") {
        setTheme(t);
        // Update GraphiQL's internal theme storage
        localStorage.setItem("graphiql:theme", t);
      }
    };
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    updateTheme();
    return () => {
      observer.disconnect();
    };
  }, []);

  const currentUrl = getNetworkUrl(network, endpoint);

  const fetcher = createGraphiQLFetcher({
    url: currentUrl,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const toggleFullscreen = () => {
    const editorContainer = document.querySelector(".graphiql-wrapper");
    if (!document.fullscreenElement) {
      void editorContainer?.requestFullscreen();
    } else {
      void document.exitFullscreen();
    }
  };

  useEffect(() => {
    const onFullscreen = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", onFullscreen);
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreen);
    };
  }, []);

  return (
    <div className="graphiql-wrapper border border-[var(--sl-color-hairline)] rounded-[var(--global-radius)] bg-[var(--sl-color-bg)]">
      <div className="graphql-editor not-content">
        <div className="graphiql-header flex justify-between gap-4 py-2 items-center pr-2 lg:pl-11">
          <GraphQLLogo className="h-6 text-[var(--sl-color-gray-4)] hidden md:block" />
          <div className="flex items-center gap-4">
            {/* Show network selector only when NO fixed endpoint is provided */}
            {!hideNetworkSelector && !endpoint && (
              <label className="flex items-center gap-1">
                <select
                  value={network}
                  onChange={(e) => {
                    setNetwork(e.target.value as Network);
                  }}
                  className="graphiql-select"
                >
                  <option value="mainnet">Mainnet</option>
                  <option value="testnet">Testnet</option>
                  <option value="devnet">Devnet</option>
                </select>
                <svg
                  aria-hidden="true"
                  className="icon caret"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71 8.46 9.17a1 1 0 1 0-1.41 1.42l4.24 4.24a1.002 1.002 0 0 0 1.42 0L17 10.59a1.002 1.002 0 0 0 0-1.42Z" />
                </svg>
              </label>
            )}

            {showFullscreenButton && (
              <button
                onClick={toggleFullscreen}
                className="graphiql-fullscreen-button text-[rgb(var(--color-neutral))] opacity-[var(--alpha-secondary)] hover:cursor-pointer"
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {isFullscreen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M20 20L15 15M15 15V19M15 15H19M4 20L9 15M9 15V19M9 15H5M20 4L15 9M15 9V5M15 9H19M4 4L9 9M9 9V5M9 9H5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M9 9L4 4M4 4V8M4 4H8M15 9L20 4M20 4V8M20 4H16M9 15L4 20M4 20V16M4 20H8M15 15L20 20M20 20V16M20 20H16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>

        <GraphiQL
          key={`${theme}-${currentUrl}`}
          fetcher={fetcher}
          initialQuery={query}
          initialVariables={isEmptyVariables(variables) ? undefined : variables}
          isHeadersEditorEnabled={false}
          defaultTheme={theme}
          defaultEditorToolsVisibility={false}
          referencePlugin={null}
          plugins={[]}
          defaultTabs={[]}
        >
          <GraphiQL.Logo>{null}</GraphiQL.Logo>
        </GraphiQL>
      </div>
    </div>
  );
};
