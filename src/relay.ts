import { formFields, write } from "kolmafia";

import { requestStop, stopRequested } from "./lib/stop";

// The relay page behind the stop link: relay_sebastian.js, in the relay
// browser's script menu. It runs in the relay server's thread, so it answers
// while the run is going.

function button(action: string, label: string): string {
  return `<form method="get" action=""><input type="hidden" name="action" value="${action}"><input type="submit" value="${label}"></form>`;
}

export function main(): void {
  const action = formFields()["action"];
  if (action === "stop") requestStop(true);
  if (action === "cancel") requestStop(false);

  const status = stopRequested()
    ? "sebastian will stop before its next task. The task running now finishes first."
    : "No stop is requested. sebastian runs until it is done.";
  write(
    `<html><head><title>sebastian</title></head><body style="font-family: sans-serif"><h3>sebastian</h3><p>${status}</p>${
      stopRequested()
        ? button("cancel", "Keep running")
        : button("stop", "Stop after the current task")
    }</body></html>`,
  );
}
