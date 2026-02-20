import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFirefox,
  faChrome,
  faEdge,
  faOpera,
  faSafari,
  faInternetExplorer,
} from "@fortawesome/free-brands-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

export const getUserLine = () => {
  function getBrowser() {
    const userAgent = navigator.userAgent;
    let browser = "Unknown";

    switch (true) {
      case userAgent.includes("Firefox"):
        browser = "Firefox";
        break;
      case userAgent.includes("Edg"):
        browser = "Edge";
        break;
      case userAgent.includes("OPR") || userAgent.includes("Opera"):
        browser = "Opera";
        break;
      case userAgent.includes("Chrome") && !userAgent.includes("Edg"):
        browser = "Chrome";
        break;
      case userAgent.includes("Safari") && !userAgent.includes("Chrome"):
        browser = "Safari";
        break;
      case userAgent.includes("Trident") || userAgent.includes("MSIE"):
        browser = "Internet Explorer";
        break;
      default:
        browser = "Unknown";
        break;
    }

    return browser;
  }

  const browser = getBrowser() as keyof typeof browserIcons;

  const browserIcons = {
    Firefox: faFirefox,
    Chrome: faChrome,
    Edge: faEdge,
    Opera: faOpera,
    Safari: faSafari,
    "Internet Explorer": faInternetExplorer,
    Unknown: faQuestionCircle,
  };

  const icon = browserIcons[browser] || faFirefox;

  return (
    <>
      <span style={{ color: "#7ebab3" }}>~</span>
      <span style={{ color: "#9eacb8" }}> via </span>
      <span>
        <FontAwesomeIcon icon={icon} style={{ marginBottom: "-2px" }} />
      </span>
    </>
  );
};
