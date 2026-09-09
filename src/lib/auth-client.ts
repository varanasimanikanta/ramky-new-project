import {
  getAuth,
  onAuthStateChanged,
  RecaptchaVerifier,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  type ConfirmationResult,
  type User,
} from "firebase/auth";
import { firebaseApp } from "@/lib/firebase";

export type PortalUser = {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
};

let phoneConfirmation: ConfirmationResult | null = null;
let recaptchaVerifier: RecaptchaVerifier | null = null;

function getFirebaseAuth() {
  if (typeof window === "undefined") {
    throw new Error("Firebase Authentication is only available in the browser.");
  }

  return getAuth(firebaseApp);
}

function toPortalUser(user: User): PortalUser {
  return {
    id: user.uid,
    ...(user.displayName ? { name: user.displayName } : {}),
    ...(user.email ? { email: user.email } : {}),
    ...(user.phoneNumber ? { phone: user.phoneNumber } : {}),
  };
}

function readableAuthError(error: unknown) {
  if (typeof error !== "object" || error === null || !("code" in error)) {
    return "We couldn't complete your request. Please try again.";
  }

  const code = String(error.code);
  const messages: Record<string, string> = {
    "auth/invalid-credential": "The email address or password is incorrect.",
    "auth/invalid-phone-number": "Enter a valid phone number with country code.",
    "auth/invalid-verification-code": "The verification code is incorrect.",
    "auth/code-expired": "This verification code has expired. Request a new one.",
    "auth/too-many-requests": "Too many attempts. Please wait a moment and try again.",
  };

  return messages[code] ?? "We couldn't complete your request. Please try again.";
}

export async function signInWithEmail(email: string, password: string) {
  try {
    const result = await signInWithEmailAndPassword(getFirebaseAuth(), email, password);
    return { user: toPortalUser(result.user) };
  } catch (error) {
    throw new Error(readableAuthError(error));
  }
}

export async function requestPhoneOtp(phone: string, container: HTMLElement) {
  try {
    recaptchaVerifier?.clear();
    recaptchaVerifier = new RecaptchaVerifier(getFirebaseAuth(), container, { size: "invisible" });
    phoneConfirmation = await signInWithPhoneNumber(getFirebaseAuth(), phone, recaptchaVerifier);
  } catch (error) {
    recaptchaVerifier?.clear();
    recaptchaVerifier = null;
    throw new Error(readableAuthError(error));
  }
}

export async function verifyPhoneOtp(otp: string) {
  if (!phoneConfirmation) throw new Error("Request a new verification code before continuing.");

  try {
    const result = await phoneConfirmation.confirm(otp);
    return { user: toPortalUser(result.user) };
  } catch (error) {
    throw new Error(readableAuthError(error));
  }
}

export function getSignedInUser(): Promise<PortalUser | null> {
  if (typeof window === "undefined") return Promise.resolve(null);

  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(getFirebaseAuth(), (user) => {
      unsubscribe();
      resolve(user ? toPortalUser(user) : null);
    });
  });
}
