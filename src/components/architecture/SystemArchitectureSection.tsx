"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ARCHITECTURE_NODES,
  FLOW_STEPS,
} from "@/data/systemArchitectureData";
import {
  Server,
  Shield,
  Layers,
  Database,
  Play,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  ChevronRight,
  ArrowRight,
  RefreshCw,
  Lock,
  Zap,
} from "lucide-react";

export function SystemArchitectureSection() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("api-gateway");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState<number | null>(null);

  const selectedNode =
    ARCHITECTURE_NODES.find((n) => n.id === selectedNodeId) ||
    ARCHITECTURE_NODES[1];

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimStep(1);

    const stepDelay = 1200;
    setTimeout(() => {
      setSimStep(2);
      setSelectedNodeId("auth-service");
    }, stepDelay * 1);
    setTimeout(() => {
      setSimStep(3);
      setSelectedNodeId("redis-cache");
    }, stepDelay * 2);
    setTimeout(() => {
      setSimStep(4);
      setSelectedNodeId("database");
    }, stepDelay * 3);
    setTimeout(() => {
      setSimStep(5);
      setSelectedNodeId("message-broker");
    }, stepDelay * 4);
    setTimeout(() => {
      setIsSimulating(false);
      setSimStep(null);
    }, stepDelay * 5);
  };

  const getNodeIcon = (id: string) => {
    switch (id) {
      case "client":
        return <Cpu className="w-4 h-4" />;
      case "api-gateway":
        return <Server className="w-4 h-4" />;
      case "auth-service":
        return <Shield className="w-4 h-4" />;
      case "backend-services":
        return <Cpu className="w-4 h-4" />;
      case "message-broker":
        return <Layers className="w-4 h-4" />;
      case "redis-cache":
        return <Database className="w-4 h-4" />;
      case "database":
        return <Database className="w-4 h-4" />;
      default:
        return <Server className="w-4 h-4" />;
    }
  };

  // Dedicated Component Architecture Visual Diagram
  const renderComponentVisualDiagram = (nodeId: string) => {
    switch (nodeId) {
      case "client":
        return (
          <div className="p-4 rounded-xl bg-[#0e0e13] border border-surface-border space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-[11px] text-text-muted pb-2 border-b border-surface-border/60">
              <span className="text-accent font-semibold">Subsystem Visual Architecture</span>
              <span>Client Ingress &amp; Retry Engine</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">Client Device</span>
                <span className="text-[10px] text-text-muted">Web / Mobile / Webhook</span>
                <div className="mt-1.5 text-[9px] px-1.5 py-0.5 rounded bg-surface-subtle text-accent inline-block">
                  Idempotency-Key
                </div>
              </div>
              <div className="p-2.5 rounded bg-surface border border-surface-border flex flex-col justify-center items-center">
                <span className="text-[10px] text-accent block font-mono">TLS 1.3 / HTTP/2</span>
                <span className="text-text-muted text-[10px]">Bearer JWT Auth</span>
                <span className="text-emerald-400 text-[10px] mt-0.5">Encrypted Ingress</span>
              </div>
              <div className="p-2.5 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">Anycast DNS / CDN</span>
                <span className="text-[10px] text-text-muted">DDoS Perimeter</span>
                <div className="mt-1.5 text-[9px] px-1.5 py-0.5 rounded bg-surface-subtle text-emerald-400 inline-block">
                  Edge POP Routing
                </div>
              </div>
            </div>
          </div>
        );

      case "api-gateway":
        return (
          <div className="p-4 rounded-xl bg-[#0e0e13] border border-surface-border space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-[11px] text-text-muted pb-2 border-b border-surface-border/60">
              <span className="text-accent font-semibold">Subsystem Visual Architecture</span>
              <span>Reverse Proxy &amp; Perimeter Protection</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center">
              <div className="p-2 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">TLS Termination</span>
                <span className="text-[10px] text-text-muted">SSL Offload &lt;1ms</span>
              </div>
              <div className="p-2 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">Token Bucket</span>
                <span className="text-[10px] text-text-muted">Rate Limit: 100 req/s</span>
              </div>
              <div className="p-2 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">JWKS Stateless</span>
                <span className="text-[10px] text-text-muted">Signature Verify</span>
              </div>
              <div className="p-2 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">Upstream Pool</span>
                <span className="text-[10px] text-text-muted">Round-Robin Proxy</span>
              </div>
            </div>
          </div>
        );

      case "auth-service":
        return (
          <div className="p-4 rounded-xl bg-[#0e0e13] border border-surface-border space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-[11px] text-text-muted pb-2 border-b border-surface-border/60">
              <span className="text-accent font-semibold">Subsystem Visual Architecture</span>
              <span>Asymmetric Cryptographic Auth Pipeline</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">Argon2id Hash</span>
                <span className="text-[10px] text-text-muted">Salted Credential Store</span>
              </div>
              <div className="p-2.5 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">RS256 Private Key</span>
                <span className="text-[10px] text-accent">Access (15m) + Refresh (7d)</span>
              </div>
              <div className="p-2.5 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">JWKS Endpoint</span>
                <span className="text-[10px] text-emerald-400">Public Key Distribution</span>
              </div>
            </div>
          </div>
        );

      case "backend-services":
        return (
          <div className="p-4 rounded-xl bg-[#0e0e13] border border-surface-border space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-[11px] text-text-muted pb-2 border-b border-surface-border/60">
              <span className="text-accent font-semibold">Subsystem Visual Architecture</span>
              <span>Stateless Service Worker &amp; Pool Topology</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center">
              <div className="p-2 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">WSGI / ASGI</span>
                <span className="text-[10px] text-text-muted">Gunicorn Worker Pool</span>
              </div>
              <div className="p-2 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">Django Core</span>
                <span className="text-[10px] text-text-muted">Domain State Machine</span>
              </div>
              <div className="p-2 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">PgBouncer</span>
                <span className="text-[10px] text-text-muted">DB Pool Multiplexer</span>
              </div>
              <div className="p-2 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">Celery Producer</span>
                <span className="text-[10px] text-accent">Async Task Offload</span>
              </div>
            </div>
          </div>
        );

      case "message-broker":
        return (
          <div className="p-4 rounded-xl bg-[#0e0e13] border border-surface-border space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-[11px] text-text-muted pb-2 border-b border-surface-border/60">
              <span className="text-accent font-semibold">Subsystem Visual Architecture</span>
              <span>Event Streaming &amp; Dead-Letter Routing</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center">
              <div className="p-2 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">Exchange</span>
                <span className="text-[10px] text-text-muted">Topic / Direct Binding</span>
              </div>
              <div className="p-2 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">Durable Queues</span>
                <span className="text-[10px] text-text-muted">RabbitMQ / Kafka Disk</span>
              </div>
              <div className="p-2 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">DLX Quarantine</span>
                <span className="text-[10px] text-amber-400">Retry Count &gt; 3 Expire</span>
              </div>
              <div className="p-2 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">Worker Consumers</span>
                <span className="text-[10px] text-emerald-400">Celery Autoscaling</span>
              </div>
            </div>
          </div>
        );

      case "redis-cache":
        return (
          <div className="p-4 rounded-xl bg-[#0e0e13] border border-surface-border space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-[11px] text-text-muted pb-2 border-b border-surface-border/60">
              <span className="text-accent font-semibold">Subsystem Visual Architecture</span>
              <span>Cache-Aside &amp; Distributed Lock Engine</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">Cache-Aside</span>
                <span className="text-[10px] text-emerald-400">Hit SLA &lt; 0.8ms</span>
              </div>
              <div className="p-2.5 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">XFetch Stampede</span>
                <span className="text-[10px] text-accent">Probabilistic Refresh</span>
              </div>
              <div className="p-2.5 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">Redlock Mutex</span>
                <span className="text-[10px] text-text-muted">SET NX PX 30000ms</span>
              </div>
            </div>
          </div>
        );

      case "database":
        return (
          <div className="p-4 rounded-xl bg-[#0e0e13] border border-surface-border space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-[11px] text-text-muted pb-2 border-b border-surface-border/60">
              <span className="text-accent font-semibold">Subsystem Visual Architecture</span>
              <span>PostgreSQL ACID Persistence &amp; WAL Streaming</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">Query Planner</span>
                <span className="text-[10px] text-text-muted">B-Tree Compound Index</span>
              </div>
              <div className="p-2.5 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">WAL Archiver</span>
                <span className="text-[10px] text-accent">Point-in-Time Recovery</span>
              </div>
              <div className="p-2.5 rounded bg-surface border border-surface-border">
                <span className="text-text-primary block font-semibold text-xs">Read Replica</span>
                <span className="text-[10px] text-emerald-400">Async Stream Replication</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="architecture"
      className="py-20 lg:py-28 border-b border-surface-border/60 bg-[#0b0b0e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="03 // Architectural Thinking"
            title="How I Think About Systems"
            description="An illustrative decoupled topology detailing perimeter security, asynchronous task dispatching, cache-aside resilience, and ACID persistence."
            className="mb-0"
          />

          <div className="flex items-center gap-3">
            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className="px-4 py-2 rounded-lg bg-accent/20 hover:bg-accent/30 text-accent border border-accent/40 font-mono text-xs font-semibold flex items-center gap-2 transition-all disabled:opacity-50 shadow-sm"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              {isSimulating ? `Tracing Step ${simStep}/5...` : "Simulate Request Trace"}
            </button>
          </div>
        </div>

        {/* Global Pipeline Architecture Visual Map */}
        <div className="p-6 rounded-2xl bg-surface-subtle border border-surface-border shadow-xl relative overflow-hidden">
          <div className="text-[11px] font-mono text-text-muted mb-4 flex items-center justify-between">
            <span>PIPELINE: Client → API Gateway → Auth / Services → Broker → DB / Cache</span>
            <span className="text-accent hidden sm:inline">Select any component to inspect subsystem schematic</span>
          </div>

          {/* Interactive Pipeline Diagram */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 py-4">
            {ARCHITECTURE_NODES.map((node, index) => {
              const isSelected = selectedNodeId === node.id;
              const isCurrentStep =
                (simStep === 1 && (node.id === "client" || node.id === "api-gateway")) ||
                (simStep === 2 && node.id === "auth-service") ||
                (simStep === 3 && node.id === "redis-cache") ||
                (simStep === 4 && node.id === "database") ||
                (simStep === 5 && node.id === "message-broker");

              return (
                <div key={node.id} className="relative">
                  <button
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex flex-col justify-between h-32 relative group ${
                      isSelected
                        ? "bg-[#181820] border-accent shadow-md shadow-accent/10"
                        : "bg-surface border-surface-border hover:border-neutral-700"
                    } ${isCurrentStep ? "ring-2 ring-emerald-400 border-emerald-400" : ""}`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div
                          className={`p-1.5 rounded-md ${
                            isSelected
                              ? "bg-accent/20 text-accent"
                              : "bg-surface-subtle text-text-muted group-hover:text-text-primary"
                          }`}
                        >
                          {getNodeIcon(node.id)}
                        </div>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">
                          0{index + 1}
                        </span>
                      </div>
                      <h4
                        className={`text-xs font-semibold leading-tight ${
                          isSelected ? "text-text-primary" : "text-text-secondary"
                        }`}
                      >
                        {node.name}
                      </h4>
                    </div>

                    <div className="pt-2 border-t border-surface-border/50 flex items-center justify-between text-[10px] font-mono text-text-muted">
                      <span>{node.category}</span>
                      <ChevronRight
                        className={`w-3 h-3 transition-transform ${
                          isSelected ? "translate-x-0.5 text-accent" : "text-text-muted"
                        }`}
                      />
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Active Flow Trace Info if Simulating */}
          {isSimulating && simStep && (
            <div className="mt-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-3 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>
                <strong>Step {simStep}:</strong> {FLOW_STEPS[simStep - 1]?.detail}
              </span>
            </div>
          )}
        </div>

        {/* Selected Component Deep Dive with Architecture Diagram */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Inspection Panel */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-surface-subtle border border-surface-border space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-surface-border">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold block">
                  {selectedNode.category} Layer
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mt-1">
                  {selectedNode.name}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-mono text-text-muted block">Expected Latency</span>
                <span className="font-mono text-xs font-semibold text-emerald-400">
                  {selectedNode.latencyTypical}
                </span>
              </div>
            </div>

            {/* Actual Architecture Visual Diagram for This Component */}
            <div>
              {renderComponentVisualDiagram(selectedNode.id)}
            </div>

            {/* Role & Tech */}
            <div className="space-y-3">
              <p className="text-sm text-text-secondary">
                <strong className="text-text-primary font-medium">System Role:</strong>{" "}
                {selectedNode.role}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                <span className="text-text-muted">Technologies:</span>
                {selectedNode.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-surface border border-surface-border text-text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Architectural Responsibilities */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted font-semibold mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                Key Engineering Responsibilities
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
                {selectedNode.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5 font-bold">›</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Failure Modes & Mitigations */}
            <div className="pt-6 border-t border-surface-border grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface border border-surface-border">
                <h5 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-2 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Primary Failure Modes
                </h5>
                <ul className="space-y-1.5 text-xs text-text-muted">
                  {selectedNode.failureModes.map((fm, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-amber-500 font-mono">•</span>
                      <span>{fm}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-surface-border">
                <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Engineering Mitigations
                </h5>
                <ul className="space-y-1.5 text-xs text-text-muted">
                  {selectedNode.mitigations.map((m, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-mono">•</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Flow Reference Sidebar */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-surface-subtle border border-surface-border space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-text-muted font-semibold">
              Trace Sequence Order
            </h4>
            <div className="space-y-3">
              {FLOW_STEPS.map((step) => {
                const isActive = simStep === step.step;
                return (
                  <div
                    key={step.step}
                    className={`p-3 rounded-lg border text-xs transition-colors ${
                      isActive
                        ? "bg-accent/15 border-accent text-text-primary"
                        : "bg-surface border-surface-border text-text-secondary"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] text-accent font-semibold">
                        Step 0{step.step}
                      </span>
                      <span className="font-mono text-[10px] text-text-muted">
                        {step.from} → {step.to}
                      </span>
                    </div>
                    <div className="font-semibold text-text-primary text-xs">
                      {step.title}
                    </div>
                    <div className="text-[11px] text-text-muted mt-1 leading-snug">
                      {step.detail}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
