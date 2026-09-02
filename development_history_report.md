# AI Website Builder: Architectural History & Design Patterns Report

**Project:** Bolt Engine (AI Website Builder)  
**Version:** 2.1.0-FinAtelier  
**Author:** Antigravity AI  
**Date:** May 10, 2026

---

## 1. Executive Summary
The **AI Website Builder** (Bolt Engine) has evolved from a monolithic AI interface into a high-performance, event-driven synthesis engine. This report documents the technical journey from overcoming "context amnesia" and "exponential duplication" to establishing a premium, light-themed design system using modern React patterns.

---

## 2. Architectural Vision: The L1/L2 Pipeline
The core architectural innovation is the **Hierarchical Streaming Pipeline**. We recognized that standard HTTP/Convex mutations were too slow for real-time AI telemetry, leading to UI stuttering.

### Data Flow Pattern:
1. **L1 (SSE/Redis Stream):** High-frequency telemetry for zero-latency UI updates.
2. **L2 (Convex Persistence):** Transactional state persistence for long-term storage and collaboration.

---

## 3. Key Design Patterns

### 3.1 Pub/Sub (NotificationSystem)
Decouples the AI generation logic from React components. Components subscribe to `AI_STREAM_CHUNK` events.
```javascript
// Decoupled Event Listener
notificationSystem.subscribe(EVENTS.AI_STREAM_CHUNK, (data) => {
    updateUI(data.delta);
});
```

### 3.2 Provider Strategy
Abstracts LLM providers (Gemini Cloud vs. LM Studio Local).
```javascript
// ProviderFactory.js
export const getStream = (config) => {
    return config.provider === 'cloud' ? GoogleStream() : LocalStream();
}
```

### 3.3 Spec-Driven Development (SDD)
Uses the `spec.md` as the primary source of truth, ensuring architectural integrity.

---

## 4. Development History: The Four Phases

### Phase 1: Foundation & Recovery
Restored connectivity and fixed environment variable hydration (GEMINI_API_KEY).

### Phase 2: The Event Pipeline Revolution
Implemented the `NotificationSystem` to handle high-frequency AI streams.

### Phase 3: GUI Overhaul (FinAtelier Style)
Pivoted to a bright, minimalist Light Theme with Bento-box cards and Framer Motion.

### Phase 4: Persistence Optimization
Implemented "Post-Stream Mutations" for workspace consistency.

---

## 5. Case Studies: Critical Problem Solving

### Case Study A: The Exponential Duplication Bug
**Problem:** Code duplicated during streaming because the UI appended full payloads.  
**Solution:** Implemented **Delta-based state updates**.
```javascript
// FIXED
setStreamingContent(prev => prev + data.delta);
```

### Case Study B: Context Amnesia
**Problem:** The AI lost conversation history.  
**Solution:** Formalized `buildMessages` for full array serialization.

---

## 6. Technical Stack
- **Frontend:** Next.js 14, React 18, Framer Motion
- **Backend:** Convex, Upstash Redis
- **AI:** Gemini 2.0 Flash

---

## 7. Conclusion
The Bolt Engine represents a shift towards **Event-Driven Integrity**. By treating AI responses as streams, we created an interface that feels alive.
