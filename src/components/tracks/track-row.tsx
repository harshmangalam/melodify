import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface SongRowProps {
  sNo: number;
  id: string;
  name: string;
  imageUrl: string;
  artists: any[];
  albumId: string;
  albumName: string;
  duration: number;
}
export const TrackRow = component$((props: SongRowProps) => {
  const { sNo, name, id, imageUrl, artists, albumId, albumName, duration } =
    props;
  const hover = useSignal(false);

  return (
    <tr class="h-14  hover:bg-[hsla(0,0%,100%,.1)] transition duration-300">
      <td class="pl-2 rounded-l-md">
        <div class="text-[#b3b3b3] h-4 w-4 inline-block">
          <span class="font-normal">{sNo}</span>
        </div>
      </td>
      <td>
        <div class="flex items-center gap-4">
          <img
            src={imageUrl}
            alt={name}
            width="40"
            height="40"
            class="object-cover aspect-auto"
          />

          <div class="flex flex-col space-y-0">
            <Link href={`/track/${id}`} class="text-white hover:underline">
              {name}
            </Link>
            <div class="text-sm text-[#b3b3b3] break-all">
              {artists.map((artist, i) => (
                <span key={artist.id}>
                  <Link href={`/artist/${artist.id}`} class="hover:underline">
                    {artist.name}
                  </Link>
                  {artists.length > i + 1 ? ", " : ""}
                </span>
              ))}
            </div>
          </div>
        </div>
      </td>

      <td>
        <div class="text-[#b3b3b3] text-sm">
          <Link href={`/album/${albumId}`} class="hover:underline">
            {albumName}
          </Link>
        </div>
      </td>
      <td class="rounded-r-md">
        <div class="text-[#b3b3b3] text-sm pr-2">{duration}</div>
      </td>
    </tr>
  );
});
