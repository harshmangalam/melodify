import { component$ } from "@builder.io/qwik";
import { GoogleAuth } from "../google-auth";
import { GithubAuth } from "../github-auth";

export default component$(() => {
  return (
    <div>
      <h2 class="font-bold text-2xl text-center mb-8">
        Sign up for free to start listening.
      </h2>

      <div class="grid grid-cols-1 gap-2">
        <GoogleAuth />
        <GithubAuth />
      </div>
    </div>
  );
});
