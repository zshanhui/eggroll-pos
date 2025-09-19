import { addMinutes, parseJSON } from "date-fns";

export type OrderStatus =
  | "started"
  | "confirmed"
  | "accepted"
  | "declined"
  | "preparing"
  | "ready"
  | "on_delivery";

export const Status = {
  // chat started by Customer
  STARTED: "started" as const,
  // confirmed by Customer
  CONFIRMED: "confirmed" as const,
  // accepted by Merchant, before starting to prepare
  ACCEPTED: "accepted" as const,
  // declined by Merchant
  DECLINED: "declined" as const,
  // after accept, preparing order
  PREPARING: "preparing" as const,
  // ready for pickup
  READY: "ready" as const,
  // enroute for delivery; currently not implemented
  DELIVERING: "on_delivery" as const,
} as const;

// These order statuses should be fetched for the main view
// Only show countdown timer on these when less than 10 minutes to ETA
export const ACTIVE_ORDER_STATUSES = [
  Status.CONFIRMED,
  Status.ACCEPTED,
  Status.PREPARING,
];

export function getTimeUntilPickup(
  confirmedAt: string | null | undefined,
  pickupIn: number | null | undefined
): Date | undefined {
  if (!pickupIn || !confirmedAt) {
    return undefined;
  }

  console.log(confirmedAt);
  const t0 = parseJSON(confirmedAt);
  const t1 = addMinutes(t0, pickupIn);

  console.log(t1);
  // console.log('t1 + pickupdIn>> ', d);
  // console.log('t2 + pickupIn>> ', n2);

  return t1;
}
