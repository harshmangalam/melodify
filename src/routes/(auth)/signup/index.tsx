import { component$ } from "@builder.io/qwik";
import { GoogleAuth } from "../google-auth";
import { GithubAuth } from "../github-auth";
import { Form, Link, routeAction$, z, zod$ } from "@builder.io/qwik-city";
import { Input } from "~/components/ui/input";
import { PhoneAuth } from "../phone-auth";
import { account } from "~/lib/appwrite-sdk";
import { AppwriteException, ID } from "appwrite";

export const useSignup = routeAction$(
  async ({ email, name, password }, { redirect, fail }) => {
    try {
      await account.create(ID.unique(), email, password, name);
      redirect(303, "/login");
    } catch (error) {
      if (error instanceof AppwriteException) {
        return fail(400, error.response as any);
      }
    }
  },
  zod$({
    name: z.string().nonempty("Enter a name for your profile."),
    email: z.string().email("You need to enter your email."),
    password: z
      .string()
      .min(8, "Your password should be longer than 8 characters."),
  })
);
export default component$(() => {
  const action = useSignup();
  return (
    <div>
      <h2 class="font-bold text-2xl text-center mb-8">
        Sign up for free to start listening.
      </h2>

      <section class="grid grid-cols-1 gap-2">
        <GoogleAuth />
        <GithubAuth />
        <PhoneAuth />
      </section>
      <hr class="border border-essential-subdude my-4" />

      <section class="py-4">
        <div class="mb-4">
          <p class="text-negative">{action.value?.message}</p>
        </div>
        <Form action={action} class="flex flex-col gap-4">
          <div class="flex flex-col space-y-2">
            <Input
              name="email"
              label="What's your email?"
              placeholder="Enter your email."
              id="email"
              error={action.value?.fieldErrors?.email}
            />
            <Link
              href="/login?method=phone"
              class="text-essential-bright-accent text-[14px]"
            >
              Use phone number instead
            </Link>
          </div>
          <Input
            label="Create a password"
            placeholder="Create a password."
            type="password"
            name="password"
            id="password"
            error={action.value?.fieldErrors?.password}
          />
          <Input
            label="What should we call you?"
            placeholder="Enter a profile name."
            type="text"
            name="name"
            id="name"
            error={action.value?.fieldErrors?.name}
          />

          <button
            type="submit"
            class="font-bold text-lg rounded-full bg-green-base hover:bg-green-base-highlight px-4 py-3  text-black hover:scale-105 disabled:bg-bright-accent"
            disabled={action.isRunning}
          >
            Sign up
          </button>
        </Form>
        <div class="mt-4 text-center">
          <span class="text-subdude">Have an account ? </span>
          <Link
            href="/login"
            class="hover:text-green-base-highlight hover:underline"
          >
            Log in
          </Link>
        </div>
      </section>
    </div>
  );
});
