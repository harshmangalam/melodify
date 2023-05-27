import { component$ } from "@builder.io/qwik";
import { ClockIcon } from "~/icons";
import { TrackRow } from "./track-row";

export const TracksTable = component$(() => {
  return (
    <table class="w-full">
      <thead class="border-b border-[hsla(0,0%,100%,.1)]">
        <th>
          <div class="flex justify-start pl-2 py-2"> #</div>
        </th>
        <th>
          <div class="flex justify-start">Title</div>
        </th>
        <th>
          <div class="flex justify-start">Album</div>
        </th>
        <th>
          <div class="flex justify-start pr-2">
            <ClockIcon />
          </div>
        </th>
      </thead>
      <tbody>
        {[...new Array(20)].map((track, i) => (
          <TrackRow
            key={i}
            sNo={i + 1}
            albumId="1"
            albumName="Excuses"
            artists={[
              {
                id: 1,
                name: "AP Dhillon",
              },
              {
                id: 2,
                name: "Gurinder Gill",
              },
            ]}
            id="1"
            imageUrl="https://i.scdn.co/image/ab67616d000048515b74e703d6ffb2ea16860c86"
            name="Excuss"
            duration={2}
          />
        ))}
      </tbody>
    </table>
  );
});
