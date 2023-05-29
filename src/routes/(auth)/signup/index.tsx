import { component$ } from "@builder.io/qwik";
import { GoogleAuth } from "../google-auth";
import { GithubAuth } from "../github-auth";
import { Form, Link } from "@builder.io/qwik-city";
import { Input } from "~/components/ui/input";
import { PhoneAuth } from "../phone-auth";

export default component$(() => {
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
        <Form class="flex flex-col gap-4">
          <div class="flex flex-col space-y-2">
            <Input
              name="email"
              label="What's your email?"
              placeholder="Enter your email."
              id="email"
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
          />
          <Input
            label="What should we call you?"
            placeholder="Enter a profile name."
            type="text"
            name="name"
            id="name"
          />

          <button
            type="submit"
            class="font-bold text-lg rounded-full bg-green-base hover:bg-green-base-highlight px-4 py-3  text-black hover:scale-105"
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
