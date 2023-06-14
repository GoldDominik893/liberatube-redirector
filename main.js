chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    let redirectUrl = "";
    const url = new URL(details.url);
    
    if (url.hostname === "www.youtube.com" || url.hostname === "youtube.com") {
      const path = url.pathname.substring(1);
      const parts = path.split("/");
      const [prefix, id] = parts;
      
      if (prefix === "watch") {
        redirectUrl = `https://liberatube.store/watch/?v=${id}`;
      } else if (prefix === "search") {
        const searchQuery = url.searchParams.get("q");
        redirectUrl = `https://liberatube.store/search/?q=${searchQuery}`;
      } else if (prefix === "playlist") {
        redirectUrl = `https://liberatube.store/playlist/?id=${id}`;
      } else if (prefix === "channel") {
        redirectUrl = `https://liberatube.store/channel/?id=${id}`;
      }
      
      if (redirectUrl) {
        return { redirectUrl: redirectUrl };
      }
    }
  },
  {
    urls: ["*://*.youtube.com/*"]
  },
  ["blocking"]
);
