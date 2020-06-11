export const getLocalStorage = (key: string): boolean | object => {
  const json: string = window.localStorage[key];
  if (json == "undefined" || json == undefined) {
    return false;
  }
  return json ? JSON.parse(json) : false;
};

export const saveToLocalStorage = (key: string, value: object) => {
  window.localStorage[key] = JSON.stringify(value);
};

export const removeFromLocalStorage = (key: string) => {
  delete window.localStorage[key];
};

export function clone(val: any) {
  return JSON.parse(JSON.stringify(val));
}

export function tryParseJSON(self: any, jsonString: string) {
  try {
    let o = self.parse(jsonString);

    // Handle non-exception-throwing cases:
    // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
    // but... JSON.parse(null) returns null, and typeof null === "object",
    // so we must check for that, too. Thankfully, null is falsey, so this suffices:
    if (o && typeof o === "object") {
      return { status: true, data: o };
    }
  } catch (e) {}

  return { status: false, data: undefined };
}

export function Notification(
  self: any,
  message: string,
  type: string,
  position = "is-top",
  duration = 2000
) {
  self.$buefy.snackbar.open({
    duration: duration,
    message: message,
    type: type,
    position: position
  });
}

export function Notify(
  self: any,
  message: string,
  type: string,
  position = "is-top",
  duration = 5000,
  hasIcon = true
) {
  self.$buefy.notification.open({
    message: message,
    type: type,
    position: position,
    duration: duration,
    hasIcon: hasIcon
  });
}

export function Dialog(self: any, message: string, type: string) {
  self.$buefy.dialog.alert({
    message: message,
    type: type,
    position: "is-top"
  });
}

export function isEmpty(obj: object) {
  return Object.keys(obj).length === 0;
}
