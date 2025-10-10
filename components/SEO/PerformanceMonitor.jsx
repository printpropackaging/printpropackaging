"use client";

import { useEffect } from "react";

export const PerformanceMonitor = () => {
  useEffect(() => {
    // Core Web Vitals monitoring
    if (typeof window !== "undefined" && "web-vital" in window) {
      import("web-vitals").then(
        ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        }
      );
    }

    // Performance API monitoring
    if (typeof window !== "undefined" && "performance" in window) {
      window.addEventListener("load", () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType("navigation")[0];
          if (perfData) {
            const metrics = {
              dns: perfData.domainLookupEnd - perfData.domainLookupStart,
              tcp: perfData.connectEnd - perfData.connectStart,
              request: perfData.responseStart - perfData.requestStart,
              response: perfData.responseEnd - perfData.responseStart,
              dom: perfData.domContentLoadedEventEnd - perfData.responseEnd,
              load: perfData.loadEventEnd - perfData.loadEventStart,
              total: perfData.loadEventEnd - perfData.navigationStart,
            };

            // Send to analytics
            if (typeof gtag !== "undefined") {
              gtag("event", "web_vitals", {
                event_category: "Performance",
                event_label: "Page Load",
                value: Math.round(metrics.total),
              });
            }
          }
        }, 0);
      });
    }

    // Error tracking
    window.addEventListener("error", (event) => {
      if (typeof gtag !== "undefined") {
        gtag("event", "exception", {
          description: event.error?.message || "Unknown error",
          fatal: false,
        });
      }
    });

    // Unhandled promise rejection tracking
    window.addEventListener("unhandledrejection", (event) => {
      if (typeof gtag !== "undefined") {
        gtag("event", "exception", {
          description: event.reason?.message || "Unhandled promise rejection",
          fatal: false,
        });
      }
    });
  }, []);

  return null;
};

// SEO Performance Component
export const SEOAnalytics = () => {
  useEffect(() => {
    // Track page views
    if (typeof gtag !== "undefined") {
      gtag("config", "GA_MEASUREMENT_ID", {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          custom_parameter_1: "blog_category",
          custom_parameter_2: "content_type",
        },
      });
    }

    // Track scroll depth
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100
      );

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;

        // Track at 25%, 50%, 75%, 100%
        if ([25, 50, 75, 100].includes(scrollPercent)) {
          if (typeof gtag !== "undefined") {
            gtag("event", "scroll", {
              event_category: "Engagement",
              event_label: `${scrollPercent}%`,
              value: scrollPercent,
            });
          }
        }
      }
    };

    window.addEventListener("scroll", trackScrollDepth, { passive: true });

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      if (typeof gtag !== "undefined") {
        gtag("event", "timing_complete", {
          name: "time_on_page",
          value: timeOnPage,
        });
      }
    };

    window.addEventListener("beforeunload", trackTimeOnPage);

    return () => {
      window.removeEventListener("scroll", trackScrollDepth);
      window.removeEventListener("beforeunload", trackTimeOnPage);
    };
  }, []);

  return null;
};
