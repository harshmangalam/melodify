import { component$ } from "@builder.io/qwik";
import { GoogleAuth } from "../google-auth";
import { GithubAuth } from "../github-auth";
import { Form } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h2 class="font-bold text-2xl text-center mb-8">
        Sign up for free to start listening.
      </h2>

      <section class="grid grid-cols-1 gap-2">
        <GoogleAuth />
        <GithubAuth />
        <button class="flex space-x-6 border w-full border-essential-subdude rounded-full py-4 justify-center px-6 hover:border-white">
          <span class="font-bold"> Continue with Phone Number</span>
        </button>
      </section>
      <hr class="border border-essential-subdude my-4" />

      <section>
        <Form></Form>
      </section>
    </div>
  );
});
