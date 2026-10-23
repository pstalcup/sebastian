import { printHtml } from "kolmafia";
import { get, set } from "libram";

// A stop the player asks for while the run is going. The run's own thread is
// busy, and mafia queues every CLI command typed or clicked until the script
// ends, so the request comes in through the relay script (src/relay.ts),
// which runs in the relay server's thread and sets this daily property. The
// engine reads it before it picks each task.

/** Set to true to stop the run before its next task. */
export const STOP_PROPERTY = "_sebStopAfterTask";
/** The relay page that sets and clears STOP_PROPERTY. */
export const RELAY_PAGE = "relay_sebastian.js";

export function stopRequested(): boolean {
  return get(STOP_PROPERTY, false);
}

export function requestStop(stop: boolean): void {
  set(STOP_PROPERTY, stop);
}

/**
 * The gCLI links to the relay page: one asks for a stop, the other opens the
 * page on the day's mini log.
 */
export function printStopLink(): void {
  printHtml(
    `<a href="/${RELAY_PAGE}?action=stop">Click here to stop sebastian after the current task.</a>`,
  );
  printHtml(`<a href="/${RELAY_PAGE}">Click here for today's sebastian mini log.</a>`);
}
