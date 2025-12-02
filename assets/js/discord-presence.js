(() => {
  const widget = document.querySelector("[data-discord-user]");
  if (!widget) {
    return;
  }

  const userId = widget.getAttribute("data-discord-user");
  if (!userId) {
    return;
  }

  const stateElement = widget.querySelector("[data-discord-state]");
  const messageElement = widget.querySelector("[data-discord-message]");

  const statusLabels = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    invisible: "Invisible",
    loading: "Checking status...",
    error: "Status unavailable",
  };

  const setStatus = (statusKey, message) => {
    widget.setAttribute("data-status", statusKey);
    if (stateElement) {
      stateElement.textContent = statusLabels[statusKey] || "Unknown";
    }
    if (messageElement) {
      messageElement.textContent = message || "";
    }
  };

  const normalizeStatus = (status) => {
    if (!status) {
      return "error";
    }
    if (status === "offline") {
      return "invisible";
    }
    return status;
  };

  const getCustomStatus = (activities = []) => {
    const customStatus = activities.find((activity) => activity.type === 4);
    if (!customStatus || !customStatus.state) {
      return null;
    }
    return customStatus.state.trim();
  };

  const endpoint = `https://api.lanyard.rest/v1/users/${userId}`;

  const handleSuccess = (payload) => {
    if (!payload) {
      throw new Error("Invalid payload");
    }

    if (payload.success === false) {
      const errorCode = payload.error && payload.error.code;
      if (errorCode === "user_not_monitored") {
        setStatus(
          "error",
          "Presence unavailable. Join the Lanyard Discord to enable live status."
        );
        return;
      }
      throw new Error(payload.error && payload.error.message);
    }

    if (!payload.data) {
      throw new Error("Missing presence data");
    }

    const { discord_status: discordStatus, activities } = payload.data;
    const normalizedStatus = normalizeStatus(discordStatus);
    let secondaryText = "";

    if (normalizedStatus === "invisible") {
      secondaryText = "Currently offline or invisible on Discord.";
    } else {
      secondaryText = getCustomStatus(activities) || "No status displayed.";
    }

    setStatus(normalizedStatus, secondaryText);
  };

  const handleError = (message) => {
    setStatus("error", message || "Unable to load Discord status.");
  };

  fetch(endpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed");
      }
      return response.json();
    })
    .then(handleSuccess)
    .catch((err) => {
      handleError(err && err.message);
    });
})();
