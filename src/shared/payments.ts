
export type PaymentMethod =
  | "in_store"
  | "facebook_pay"
  | "online_card";

export const PaymentMethods = {
  IN_STORE: "in_store" as const,
  FACEBOOK_PAY: "facebook_pay" as const,
  ONLINE_CARD: "online_card" as const,
} as const;
