  var loc = window.location.href;
  var newloc = loc;
  if (newloc.includes("m.youtube.com")) {
    newloc = newloc.replace("m.youtube.com", "badyt.cf");
  }
  else if (newloc.includes("youtube")) {
    newloc = newloc.replace("www.youtube.com/watch?v=", "badyt.cf/vi/?w=");
  }
  else if (newloc.includes("youtube")) {
    newloc = newloc.replace("m.youtube.com/watch?v=", "badyt.cf/vi/?w=");
  }
  else if (newloc.includes("youtube")) {
    newloc = newloc.replace("www.youtube.com/", "badyt.cf/");
  }
  else if (newloc.includes("youtu.be")) {
    newloc = newloc.replace("youtu.be/", "badyt.cf/vi/w=");
  }
  else if (newloc.includes("youtube-nocookie")) {
    newloc = newloc.replace("www.youtube-nocookie.com/", "badyt.cf/");
  }
  if (newloc.includes("/results?search_query")) {
    newloc = newloc.replace("www.youtube.com/results?search_query", "badyt.cf/search/?q=");
  }
  window.location = newloc;
