import React from "react";
export const METRICS_DATA = [
    { value: "100", suffix: "+", label: "Projects delivered" },
    { value: "1M", suffix: "+", label: "Hours of annotation" },
    { value: "850", suffix: "+", label: "Annotation specialists" },
    { value: "2M", suffix: "+", label: "Images processed" },
    { value: "25K", suffix: "+", label: "Audio hours collected" },
    { value: "120", suffix: "+", label: "Languages covered" },
    { value: "100", suffix: "+", label: "Countries reached" },
    { value: "99.8", suffix: "%", label: "Annotation accuracy" },
    { value: "99", suffix: "%", label: "Client satisfaction" },
    { value: "20", suffix: "+", label: "Data categories" },
    { value: "25K", suffix: "+", label: "Active contributors" },
    { value: "200", suffix: "+", label: "Datasets delivered" },
];
export function MetricsStrip() {
    return (<section className="metrics-strip-section" id="metrics-strip" aria-label="Scale and Performance Metrics">
      {/* Background ambient radial gradients */}
      <div className="metrics-strip-glow" aria-hidden="true"/>

      {/* Subtle edge fade overlays */}
      <div className="metrics-strip-edge-fade metrics-strip-edge-left" aria-hidden="true"/>
      <div className="metrics-strip-edge-fade metrics-strip-edge-right" aria-hidden="true"/>

      {/* Continuous scrolling ticker wrapper (Right to Left) */}
      <div className="metrics-ticker-wrapper">
        <div className="metrics-ticker-track">
          {/* Sequence Set 1 */}
          <div className="metrics-ticker-set" aria-hidden="false">
            {METRICS_DATA.map((item, idx) => (<div className="metric-item-group" key={`set-1-${idx}`}>
                <div className="metric-card">
                  <div className="metric-number-wrap">
                    <span className="metric-number">{item.value}</span>
                    <span className="metric-suffix">{item.suffix}</span>
                  </div>
                  <span className="metric-label">{item.label}</span>
                </div>
                <div className="metric-separator" aria-hidden="true"/>
              </div>))}
          </div>

          {/* Sequence Set 2 (duplicate for seamless loop) */}
          <div className="metrics-ticker-set" aria-hidden="true">
            {METRICS_DATA.map((item, idx) => (<div className="metric-item-group" key={`set-2-${idx}`}>
                <div className="metric-card">
                  <div className="metric-number-wrap">
                    <span className="metric-number">{item.value}</span>
                    <span className="metric-suffix">{item.suffix}</span>
                  </div>
                  <span className="metric-label">{item.label}</span>
                </div>
                <div className="metric-separator" aria-hidden="true"/>
              </div>))}
          </div>
        </div>
      </div>
    </section>);
}
