import { component$ } from "@builder.io/qwik";
import { GoogleAuth } from "../google-auth";
import { GithubAuth } from "../github-auth";
import { Form, Link } from "@builder.io/qwik-city";
import { Input } from "~/components/ui/input";
import { PhoneAuth } from "../phone-auth";

export default component$(() => {
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
        <Form class="flex flex-col gap-4">
          <Input
            name="username"
            label="Email or username"
            placeholder="Email or username"
            id="username"
          />

          <Input
            label="Password"
            placeholder="Password."
            type="password"
            name="password"
            id="password"
          />

          <button
            type="submit"
            class="font-bold text-lg rounded-full bg-green-base hover:bg-green-base-highlight px-4 py-3  text-black hover:scale-105"
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
