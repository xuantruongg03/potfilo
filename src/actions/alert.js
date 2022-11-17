
function NotificationShow(data) {
  return {
    type: "CHANGE_THEME",
    // state: data.state,
  };
}

function NotificationHide(data) {
  return {
    type: "CLOSE_NOTIFICATION",
    // state: data.state,
  };
}

export { NotificationShow, NotificationHide };
