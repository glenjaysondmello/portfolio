"use client";

import { useEffect, useState, cloneElement } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { Tooltip } from "react-tooltip";

interface PR {
  id: number;
  title: string;
  url: string;
  repository: {
    nameWithOwner: string;
  };
  state: string;
  createdAt: string;
  mergedAt?: string;
  closedAt?: string;
}

const GithubGraph = () => {
  const { theme } = useTheme();
  const [prs, setPrs] = useState<PR[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [filterType, setFilterType] = useState<
    "all" | "merged" | "open" | "closed"
  >("all");
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // YOUR GITHUB USERNAME
  const USERNAME = "glenjaysondmello";
  const initialCount = 3;

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchPRs = async () => {
      try {
        const searchQuery =
          filterType === "all"
            ? `author:${USERNAME} type:pr`
            : filterType === "merged"
              ? `author:${USERNAME} type:pr is:merged`
              : filterType === "open"
                ? `author:${USERNAME} type:pr is:open`
                : `author:${USERNAME} type:pr is:closed is:unmerged`;

        const query = `query {
          search(query: "${searchQuery}", type: ISSUE, first: 20) {
            edges {
              node {
                ... on PullRequest {
                  id
                  title
                  url
                  repository { nameWithOwner }
                  state
                  createdAt
                  mergedAt
                  closedAt
                }
              }
            }
          }
        }`;

        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN || ""}`,
          },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();
        if (data.data?.search?.edges) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const fetchedPRs = data.data.search.edges.map(
            (edge: any) => edge.node,
          );

          fetchedPRs.sort((a: PR, b: PR) => {
            const dateA = new Date(
              b.mergedAt || b.closedAt || b.createdAt,
            ).getTime();
            const dateB = new Date(
              a.mergedAt || a.closedAt || a.createdAt,
            ).getTime();
            return dateA - dateB;
          });
          setPrs(fetchedPRs);
        }
      } catch (error) {
        console.error("Failed to fetch PRs:", error);
      } finally {
        setLoading(false);
      }
    };

    if (process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
      fetchPRs();
    }
  }, [filterType]);

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-24 bg-background">
      {/* Header Section (Matched to Portfolio Theme) */}
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Proof of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
            Work.
          </span>
        </h2>
        <div className="h-1 w-20 bg-accent rounded-full mx-auto md:mx-0 mb-6" />
        <p className="text-zinc-400 max-w-2xl text-lg border-l-2 border-accent/50 pl-4 bg-zinc-900/30 py-2 rounded-r-lg mx-auto md:mx-0">
          I love spending time in open source, building real stuff, and solving
          real problems.
        </p>
      </div>

      {/* Graph Component */}
      <div className="w-full flex justify-center bg-[#0a0a0a] border border-white/10 p-4 md:p-10 rounded-3xl shadow-2xl mb-16 overflow-hidden">
        <div className="w-full overflow-x-auto pb-2">
          {" "}
          {/* Added overflow-x-auto for mobile scrolling */}
          {mounted && (
            <div className="min-w-[600px] md:min-w-0 flex justify-center">
              {" "}
              {/* Forces min width so graph doesn't squash */}
              <GitHubCalendar
                username={USERNAME}
                colorScheme="dark"
                blockSize={13}
                blockMargin={4}
                fontSize={14}
                theme={{
                  dark: [
                    "#18181b", // level 0 (zinc-900)
                    "#27272a", // level 1 (zinc-800)
                    "#52525b", // level 2 (zinc-600)
                    "#a1a1aa", // level 3 (zinc-400)
                    "#ffffff", // level 4 (white)
                  ],
                }}
                renderBlock={(block: any, activity: any) =>
                  cloneElement(block, {
                    "data-tooltip-id": "github-tooltip",
                    "data-tooltip-content": `${activity.count} contributions on ${activity.date}`,
                  })
                }
              />
              <Tooltip
                id="github-tooltip"
                style={{
                  backgroundColor: "#18181b",
                  color: "#e5e5e5",
                  border: "1px solid #27272a",
                  borderRadius: "8px",
                  fontSize: "12px",
                  zIndex: 50,
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* PR Section */}
      <div>
        <div className="mb-8 flex flex-col md:flex-row gap-6 md:items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
            <span className="w-1.5 h-8 bg-accent rounded-full" />
            Latest Contributions
          </h2>

          {/* Filter Pills */}
          <div className="flex p-1 bg-zinc-900 rounded-lg border border-white/10 w-fit self-start md:self-auto">
            {(["all", "merged", "open", "closed"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-1.5 text-xs font-medium rounded-md capitalize transition-all duration-300 ${
                  filterType === type
                    ? "bg-accent text-white shadow-lg"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-zinc-500 text-sm animate-pulse">
            Loading GitHub activity...
          </div>
        ) : prs.length > 0 ? (
          <div className="space-y-3">
            {prs.slice(0, showAll ? prs.length : initialCount).map((pr) => (
              <a
                key={pr.id}
                href={pr.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-accent/50 hover:bg-zinc-900 transition-all duration-300"
              >
                {/* Status Dot */}
                <div
                  className={`mt-1.5 shrink-0 w-2 h-2 rounded-full shadow-[0_0_10px] transition-transform group-hover:scale-125 ${
                    pr.state === "MERGED"
                      ? "bg-purple-500 shadow-purple-500/50"
                      : pr.state === "OPEN"
                        ? "bg-green-500 shadow-green-500/50"
                        : "bg-red-500 shadow-red-500/50"
                  }`}
                />

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-medium text-zinc-200 group-hover:text-white transition-colors break-words">
                    {pr.title}
                  </h3>

                  {/* FIX: Added flex-wrap so dates don't get pushed out */}
                  <div className="text-xs text-zinc-500 mt-2 flex flex-wrap items-center gap-2">
                    <span className="bg-white/5 px-2 py-0.5 rounded text-zinc-400 border border-white/5">
                      {pr.repository.nameWithOwner}
                    </span>
                    <span className="whitespace-nowrap">
                      •{" "}
                      {new Date(pr.createdAt).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                <div className="hidden md:block opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-accent text-xs self-center">
                  View &rarr;
                </div>
              </a>
            ))}

            {/* Expand Button */}
            {prs.length > initialCount && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors border-b border-dashed border-zinc-600 hover:border-white pb-0.5"
                >
                  {showAll
                    ? "Show Less"
                    : `Show ${prs.length - initialCount} More`}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="p-8 text-center border border-dashed border-zinc-800 rounded-xl text-zinc-500 text-sm">
            No pull requests found for this filter.
          </div>
        )}
      </div>
    </section>
  );
};

export default GithubGraph;
