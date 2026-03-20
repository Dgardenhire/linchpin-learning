// =============================================================================
// LINCHPIN Learning — Site Footer
// =============================================================================

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Brand mark */}
        <div className="footer-brand">
          <span className="footer-wordmark">LINCHPIN</span>
          <div className="footer-forces">
            <a
              href="https://linchpin.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-force footer-force-story"
            >
              STORY
            </a>
            <span className="footer-force-dot">&middot;</span>
            <a
              href="https://linchpin.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-force footer-force-source"
            >
              SOURCE
            </a>
            <span className="footer-force-dot">&middot;</span>
            <a
              href="https://linchpin.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-force footer-force-signal"
            >
              SIGNAL
            </a>
          </div>
        </div>

        <p className="footer-tagline">
          Where expertise becomes influence.
        </p>

        <div className="footer-links">
          <a
            href="https://linchpin.studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            linchpin.studio
          </a>
        </div>

        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Linchpin Studio LLC. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
