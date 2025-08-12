import type { GitRepoData } from "../hooks/fetchGitRepos";
import GitCell from "./GitCell";

export default function GitCollection(title: string, data: GitRepoData[]) {
  const el = document.createElement("div");
  el.className = "rounded-xl border grid gap-3 border-neutral-900 p-3";

  const collectionTitle = document.createElement("div");
  collectionTitle.className =
    "flex justify-center items-center rounded-xl text-neutral-500 text-sm -translate-y-7 -mb-6 h-fit bg-neutral-900 w-fit px-6 py-1";
  collectionTitle.textContent = title;

  const collectionWrapper = document.createElement("div");
  collectionWrapper.className = "grid md:grid-cols-3 gap-3";

  for (let item of data) {
    const project = {
      name: item.name,
      svnUrl: item.svnUrl,
    };
    collectionWrapper.appendChild(GitCell(project));
  }

  const collectionMore = document.createElement("div");
  collectionMore.className = "w-full flex justify-center md:justify-end p-3";
  collectionMore.innerHTML = `<a href="" class="underline hover:no-underline">More Creative Work</a>`;

  el.appendChild(collectionTitle);
  el.appendChild(collectionWrapper);
  el.appendChild(collectionMore);

  return el;
}
