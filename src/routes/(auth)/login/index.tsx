import { component$ } from "@builder.io/qwik";
import { GoogleAuth } from "../google-auth";
import { GithubAuth } from "../github-auth";
import { Form, Link, routeAction$, z, zod$ } from "@builder.io/qwik-city";
import { Input } from "~/components/ui/input";
import { PhoneAuth } from "../phone-auth";
import { account } from "~/lib/appwrite-sdk";
import { AppwriteException } from "appwrite";

export const useLogin = routeAction$(
  async ({ email, password }, { redirect, fail }) => {
    try {
      await account.createEmailSession(email, password);
      redirect(303, "/");
    } catch (error) {
      if (error instanceof AppwriteException) {
        console.log(error);
        return fail(400, error.response as any);
      }
    }
  },
  zod$({
    email: z.string().email("You need to enter your email."),
    password: z.string().nonempty("You need to enter your password. "),
  })
);
export default component$(() => {
  const action = useLogin();
  return (
    <div class="py-4">
      <h2 class="font-bold text-2xl text-center mb-8">Login to Melodify</h2>

      <section class="grid grid-cols-1 gap-2">
        <GoogleAuth />
        <GithubAuth />
        <PhoneAuth />
      </section>
      <hr class="border border-essential-subdude my-6" />

      <section class="py-4">
        <div class="mb-4">
          <p class="text-negative">{action.value?.message}</p>
        </div>
        <Form action={action} class="flex flex-col gap-4">
          <Input
            required
            type="email"
            name="email"
            label="Email"
            placeholder="Email"
            id="email"
            error={action.value?.fieldErrors?.email}
          />

          <Input
            label="Password"
            placeholder="Password."
            type="password"
            name="password"
            id="password"
            required
            error={action.value?.fieldErrors?.password}
          />

          <button
            type="submit"
            class="font-bold text-lg rounded-full bg-green-base hover:bg-green-base-highlight px-4 py-3  text-black hover:scale-105 disabled:bg-bright-accent"
            disabled={action.isRunning}
          >
            Log in
          </button>
        </Form>
        <div class="mt-4 text-center">
          <Link
            href="/forgot-password"
            class="font-normal underline hover:text-green-base-highlight"
          >
            Forgot your password?
          </Link>
        </div>
      </section>

      <hr class="border border-essential-subdude my-6" />

      <div class="text-center">
        <span class="text-subdude">Don't have an account ? </span>
        <Link
          href="/signup"
          class="hover:text-green-base-highlight hover:underline"
        >
          Sign up for Melodify
        </Link>
      </div>
    </div>
  );
});
