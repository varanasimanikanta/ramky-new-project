import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { Building2, KeyRound, LoaderCircle, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import {
  signInWithEmail,
  requestPhoneOtp,
  verifyPhoneOtp,
  type PortalUser,
} from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Logo } from "@/components/site/Logo";

export const Route = createFileRoute("/portal")({
  head: () => ({
    meta: [
      { title: "Employee Portal | Ramky Infrastructure" },
      { name: "description", content: "Secure employee portal sign in." },
    ],
  }),
  component: Portal,
});

const phonePattern = /^\+[1-9]\d{7,14}$/;

function Portal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [pending, setPending] = useState<"email" | "phone" | "verify" | null>(null);
  const recaptchaContainer = useRef<HTMLDivElement>(null);
  const finishSignIn = (_signedInUser: PortalUser) => {
    toast.success("Signed in successfully");
    const returnTo = window.sessionStorage.getItem("portal-return-to") ?? "/";
    window.sessionStorage.removeItem("portal-return-to");
    window.location.assign(returnTo);
  };

  const submitEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim() || !password) return;

    setPending("email");
    try {
      const response = await signInWithEmail(email.trim(), password);
      finishSignIn(response.user);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Sign in failed.");
    } finally {
      setPending(null);
    }
  };

  const sendOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedPhone = phone.replace(/[\s()-]/g, "");
    if (!phonePattern.test(normalizedPhone)) {
      toast.error("Enter a valid phone number with country code, for example +919876543210.");
      return;
    }

    setPending("phone");
    try {
      if (!recaptchaContainer.current) {
        throw new Error("Phone verification is not ready. Please try again.");
      }
      await requestPhoneOtp(normalizedPhone, recaptchaContainer.current);
      setPhone(normalizedPhone);
      setOtpSent(true);
      setOtp("");
      toast.success("Verification code sent", {
        description: `A one-time code was sent to ${normalizedPhone}.`,
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to send a verification code.");
    } finally {
      setPending(null);
    }
  };

  const submitOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (otp.length !== 6) {
      toast.error("Enter the 6-digit verification code.");
      return;
    }

    setPending("verify");
    try {
      const response = await verifyPhoneOtp(otp);
      finishSignIn(response.user);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "The verification code could not be confirmed.",
      );
    } finally {
      setPending(null);
    }
  };

  return (
    <PortalLayout>
      <div ref={recaptchaContainer} />
      <div className="rounded-xl border border-border bg-card p-6 text-card-foreground shadow-[var(--shadow-card)] sm:p-8">
        <div className="flex size-11 items-center justify-center rounded-lg bg-secondary text-primary">
          <KeyRound className="size-5" aria-hidden="true" />
        </div>
        <h1 className="mt-5 text-3xl font-bold">Employee Portal</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Sign in securely with your work email or mobile number.
        </p>

        <Tabs defaultValue="email" className="mt-7">
          <TabsList className="grid h-11 w-full grid-cols-2">
            <TabsTrigger value="email" className="gap-2">
              <Mail className="size-4" /> Email
            </TabsTrigger>
            <TabsTrigger value="phone" className="gap-2">
              <Phone className="size-4" /> Mobile OTP
            </TabsTrigger>
          </TabsList>

          <TabsContent value="email" className="mt-6">
            <form onSubmit={submitEmail} className="space-y-5">
              <div>
                <Label htmlFor="portal-email">Work email</Label>
                <Input
                  id="portal-email"
                  className="mt-1.5"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <div className="flex items-center justify-between gap-4">
                  <Label htmlFor="portal-password">Password</Label>
                  <button
                    type="button"
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <Input
                  id="portal-password"
                  className="mt-1.5"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>
              <SubmitButton busy={pending === "email"}>Sign in with email</SubmitButton>
            </form>
          </TabsContent>

          <TabsContent value="phone" className="mt-6">
            {!otpSent ? (
              <form onSubmit={sendOtp} className="space-y-5">
                <div>
                  <Label htmlFor="portal-phone">Mobile number</Label>
                  <Input
                    id="portal-phone"
                    className="mt-1.5"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                <p className="text-xs leading-5 text-muted-foreground">
                  Use your registered number, including the country code.
                </p>
                <SubmitButton busy={pending === "phone"}>Send verification code</SubmitButton>
              </form>
            ) : (
              <form onSubmit={submitOtp} className="space-y-5">
                <div>
                  <Label htmlFor="portal-otp">Verification code</Label>
                  <InputOTP
                    id="portal-otp"
                    maxLength={6}
                    value={otp}
                    onChange={setOtp}
                    containerClassName="mt-2 justify-between"
                  >
                    <InputOTPGroup>
                      {Array.from({ length: 6 }, (_, index) => (
                        <InputOTPSlot key={index} index={index} />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <p className="text-xs leading-5 text-muted-foreground">
                  Enter the code sent to {phone}.{" "}
                  <button
                    className="font-medium text-primary hover:underline"
                    type="button"
                    onClick={() => setOtpSent(false)}
                  >
                    Use another number
                  </button>
                </p>
                <SubmitButton busy={pending === "verify"}>Verify and sign in</SubmitButton>
              </form>
            )}
          </TabsContent>
        </Tabs>
      </div>
      <p className="mt-5 text-center text-xs text-muted-foreground">
        Protected by secure authentication. Contact your administrator if you need access.
      </p>
    </PortalLayout>
  );
}

function SubmitButton({ busy, children }: { busy: boolean; children: string }) {
  return (
    <Button
      type="submit"
      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
      disabled={busy}
    >
      {busy && <LoaderCircle className="animate-spin" aria-hidden="true" />}
      {children}
    </Button>
  );
}

function PortalLayout({ children }: { children: ReactNode }) {
  return (
    <section className="surface-deep flex min-h-screen items-center px-4 py-10">
      <div className="mx-auto w-full max-w-md">
        <div className="mb-8 flex items-center justify-center gap-3 text-primary-foreground">
          <Building2 className="size-7 text-accent" aria-hidden="true" />
          <Logo />
        </div>
        {children}
      </div>
    </section>
  );
}
