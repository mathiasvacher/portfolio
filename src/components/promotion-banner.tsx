import { useState } from "react";
import { Link } from "react-router-dom";

type PromotionBannerProps = {
  storageKey: string;
  message: string;
  actionLabel: string;
  actionTo: string;
};

/**
 * Bannière réutilisable : chaque annonce possède sa propre clé de fermeture.
 */
function PromotionBanner({
  storageKey,
  message,
  actionLabel,
  actionTo,
}: PromotionBannerProps) {
  const [isVisible, setIsVisible] = useState(() => {
    try {
      return localStorage.getItem(storageKey) !== "dismissed";
    } catch {
      return true;
    }
  });

  const dismissBanner = () => {
    try {
      localStorage.setItem(storageKey, "dismissed");
    } catch {
      // La bannière reste simplement fermée pendant la session en cours.
    }

    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside className="promotion-banner" aria-label="Information">
      <p>{message}</p>
      <Link className="promotion-banner__action" to={actionTo}>
        {actionLabel}
      </Link>
      <button
        className="promotion-banner__close"
        type="button"
        onClick={dismissBanner}
        aria-label="Fermer la bannière"
      >
        <span aria-hidden="true">×</span>
      </button>
    </aside>
  );
}

export default PromotionBanner;
