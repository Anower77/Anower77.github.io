"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Activity, Layers, Server, Play, CornerDownLeft } from "lucide-react";

export function InteractiveArchitectureTerminal() {
  const [activeTab, setActiveTab] = useState<"terminal" | "telemetry" | "cluster">("terminal");
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<Array<{ cmd: string; res: string | React.ReactNode }>>([
    {
      cmd: "curl -s https://api.anower.dev/v1/health",
      res: `HTTP/2 200 OK
content-type: application/json
x-engine-status: "optimal"

{
  "status": "healthy",
  "engineer": "Anower Hossain",
  "focus": "Backend Architecture & Distributed Systems",
  "primary_stack": ["Python", "Django", "PostgreSQL", "Redis", "Kafka"],
  "active_services": 4,
  "queue_latency_ms": 1.4
}`,
    },
  ]);

  const [metrics, setMetrics] = useState({
    cacheHitRatio: 99.2,
    p99Latency: 14.8,
    activeConnections: 128,
    queueLag: 0,
  });

  // Subtle real-time oscillation for realistic backend telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        cacheHitRatio: +(99.1 + Math.random() * 0.4).toFixed(1),
        p99Latency: +(14.2 + Math.random() * 1.6).toFixed(1),
        activeConnections: Math.floor(124 + Math.random() * 12),
        queueLag: Math.random() > 0.8 ? 1 : 0,
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCommand = (cmdToRun?: string) => {
    const command = (cmdToRun ?? inputVal).trim().toLowerCase();
    if (!command) return;

    let response: React.ReactNode = "";

    switch (command) {
      case "help":
        response = `Available commands:
  - info         : Personal overview and technical focus
  - stack        : Core technology stack & tools
  - services     : Microservices & projects index
  - architecture : Core distributed system patterns
  - curl /health : Probe backend healthcheck
  - clear        : Clear terminal output buffer`;
        break;
      case "info":
        response = `Anower Hossain
Title   : Backend Developer | Python & Distributed Systems
Location: Bangladesh
Summary : Building resilient backend services, optimizing data pipelines, and exploring distributed event-driven systems.`;
        break;
      case "stack":
        response = `Python, Django REST Framework, PostgreSQL, Redis, Celery, RabbitMQ, Kafka, Docker, AWS, Linux`;
        break;
      case "services":
        response = `Deployed Architectures:
  [1] CP Platform (Django 5.2 + PostgreSQL)
  [2] Microservices Lab (API Gateway + Auth + Kafka/RabbitMQ)
  [3] DootGo (Marketplace State Machine)
  [4] Lunchbari (Catering Operations Core)
  [5] EEG Retrieval Engine (Few-shot PyTorch alignment - Ongoing)`;
        break;
      case "architecture":
        response = `Flow: Client -> API Gateway -> Auth Service (JWT/JWKS) -> Backend Workers -> RabbitMQ/Kafka -> DB/Cache (Postgres + Redis)`;
        break;
      case "curl /health":
      case "curl -s https://api.anower.dev/v1/health":
        response = `HTTP/2 200 OK | Uptime: 99.98% | PostgreSQL: Connected | Redis: Pool Optimal`;
        break;
      case "clear":
        setHistory([]);
        setInputVal("");
        return;
      default:
        response = `bash: command not found: "${command}". Type "help" to list valid diagnostic commands.`;
    }

    setHistory((prev) => [...prev, { cmd: cmdToRun ?? inputVal, res: response }]);
    setInputVal("");
  };

  return (
    <div className="w-full rounded-xl border border-surface-border bg-[#0d0d10] shadow-2xl overflow-hidden font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#121216] border-b border-surface-border select-none">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] text-text-muted font-sans font-medium flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-accent" />
            anower@edge-gateway:~
          </span>
        </div>

        {/* Tab Switchers */}
        <div className="flex items-center bg-[#18181d] rounded-lg p-0.5 border border-surface-border/50 text-[11px]">
          <button
            onClick={() => setActiveTab("terminal")}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              activeTab === "terminal"
                ? "bg-[#25252d] text-text-primary font-semibold"
                : "text-text-muted hover:text-text-secondary"
            }`}
          >
            CLI
          </button>
          <button
            onClick={() => setActiveTab("telemetry")}
            className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 ${
              activeTab === "telemetry"
                ? "bg-[#25252d] text-text-primary font-semibold"
                : "text-text-muted hover:text-text-secondary"
            }`}
          >
            <Activity className="w-3 h-3 text-emerald-400" />
            Metrics
          </button>
          <button
            onClick={() => setActiveTab("cluster")}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              activeTab === "cluster"
                ? "bg-[#25252d] text-text-primary font-semibold"
                : "text-text-muted hover:text-text-secondary"
            }`}
          >
            Topology
          </button>
        </div>
      </div>

      {/* Tab 1: Terminal CLI */}
      {activeTab === "terminal" && (
        <div className="p-4 flex flex-col h-[320px]">
          <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin">
            <div className="text-text-muted text-[11px] pb-1 border-b border-surface-border/40">
              Session initialized: TLS 1.3 encrypted • Type <code className="text-accent font-bold">help</code> or click quick commands below.
            </div>

            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-text-primary">
                  <span className="text-accent font-bold">λ</span>
                  <span className="text-text-secondary">{item.cmd}</span>
                </div>
                <div className="text-text-secondary pl-4 whitespace-pre-wrap leading-relaxed font-mono text-[11px] border-l border-surface-border/40">
                  {item.res}
                </div>
              </div>
            ))}
          </div>

          {/* Quick command buttons */}
          <div className="pt-2 pb-2 flex flex-wrap gap-1.5 border-t border-surface-border/50 text-[10px]">
            {["help", "info", "stack", "services", "curl /health", "clear"].map((q) => (
              <button
                key={q}
                onClick={() => handleCommand(q)}
                className="px-2 py-0.5 rounded bg-surface-subtle hover:bg-surface-muted text-text-muted hover:text-text-primary border border-surface-border transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input prompt */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand();
            }}
            className="flex items-center gap-2 pt-1 border-t border-surface-border/60"
          >
            <span className="text-accent font-bold">λ</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="run diagnostic command..."
              className="flex-1 bg-transparent border-none text-text-primary placeholder:text-text-muted/60 focus:outline-none text-xs font-mono"
            />
            <button
              type="submit"
              className="p-1 text-text-muted hover:text-accent rounded transition-colors"
              aria-label="Submit command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Tab 2: Live Telemetry */}
      {activeTab === "telemetry" && (
        <div className="p-5 h-[320px] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-surface-border/50">
              <span className="text-text-muted">Node Status: cluster-gateway-01</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-400 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Telemetry
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="p-3 rounded-lg bg-surface-subtle border border-surface-border">
                <span className="text-text-muted text-[10px] uppercase block">Cache Hit Rate (Redis)</span>
                <span className="text-xl font-bold text-emerald-400 mt-1 block">
                  {metrics.cacheHitRatio}%
                </span>
                <span className="text-[10px] text-text-muted mt-0.5 block">Target &gt; 95%</span>
              </div>

              <div className="p-3 rounded-lg bg-surface-subtle border border-surface-border">
                <span className="text-text-muted text-[10px] uppercase block">p99 Latency (API Ingress)</span>
                <span className="text-xl font-bold text-accent mt-1 block">
                  {metrics.p99Latency} ms
                </span>
                <span className="text-[10px] text-text-muted mt-0.5 block">SLA: &lt; 50 ms</span>
              </div>

              <div className="p-3 rounded-lg bg-surface-subtle border border-surface-border">
                <span className="text-text-muted text-[10px] uppercase block">DB Connection Pool</span>
                <span className="text-xl font-bold text-text-primary mt-1 block">
                  {metrics.activeConnections} / 200
                </span>
                <span className="text-[10px] text-text-muted mt-0.5 block">PgBouncer multiplexed</span>
              </div>

              <div className="p-3 rounded-lg bg-surface-subtle border border-surface-border">
                <span className="text-text-muted text-[10px] uppercase block">Queue Backlog (Kafka/Celery)</span>
                <span className="text-xl font-bold text-emerald-400 mt-1 block">
                  {metrics.queueLag} msgs
                </span>
                <span className="text-[10px] text-text-muted mt-0.5 block">Drain rate: 450 msg/s</span>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded bg-surface-subtle/80 border border-surface-border text-[11px] text-text-secondary flex items-center justify-between">
            <span>Primary Datastore: PostgreSQL 16 (WAL streaming OK)</span>
            <span className="text-accent font-semibold">Healthy</span>
          </div>
        </div>
      )}

      {/* Tab 3: Topology */}
      {activeTab === "cluster" && (
        <div className="p-4 h-[320px] flex flex-col justify-center space-y-3">
          <div className="text-[11px] text-text-muted mb-1 text-center">
            Distributed Service Topology
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 rounded bg-surface-subtle border border-surface-border">
              <span className="text-text-primary font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                API Gateway / Reverse Proxy
              </span>
              <span className="text-text-muted font-mono text-[10px]">Nginx • TLS 1.3</span>
            </div>

            <div className="flex justify-center">
              <span className="text-text-muted text-[10px] font-mono">↓ route: JWT Header validation</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded bg-surface-subtle border border-surface-border text-center">
                <span className="text-text-primary block font-medium">Django REST Engine</span>
                <span className="text-[10px] text-text-muted font-mono">Stateless Services</span>
              </div>
              <div className="p-2 rounded bg-surface-subtle border border-surface-border text-center">
                <span className="text-text-primary block font-medium">Redis Cluster</span>
                <span className="text-[10px] text-text-muted font-mono">Cache-Aside & Locks</span>
              </div>
            </div>

            <div className="flex justify-center">
              <span className="text-text-muted text-[10px] font-mono">↓ async event propagation</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded bg-surface-subtle border border-surface-border text-center">
                <span className="text-text-primary block font-medium">RabbitMQ / Kafka</span>
                <span className="text-[10px] text-text-muted font-mono">Celery Async Workers</span>
              </div>
              <div className="p-2 rounded bg-surface-subtle border border-surface-border text-center">
                <span className="text-text-primary block font-medium">PostgreSQL Primary</span>
                <span className="text-[10px] text-text-muted font-mono">ACID Transactions</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
