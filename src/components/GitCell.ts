import type { GitRepoData } from "../hooks/fetchGitRepos";


export default function GitCell(props: GitRepoData) {
  const { name, svnUrl } = props;

  const el = document.createElement("div");
  el.className =
    "cursor-pointer h-72 rounded-xl overflow-hidden relative flex justify-center hover:scale-102";

  const projectImage = document.createElement("img");
  projectImage.className = "object-cover w-full h-full";
  projectImage.src = "";

  const projectClient = document.createElement("div");
  projectClient.className =
    "absolute top-0 left-0 m-3 backdrop-blur rounded-xl bg-black/30 w-12 h-12 flex justify-center items-center";
  projectClient.innerHTML = ``;

  const projectTitle = document.createElement("div");
  projectTitle.className =
    "absolute invisible w-full h-fit min-h-18 flex items-center bottom-0 p-3 backdrop-blur backdrop-brightness-50 bg-black/30";

  const h2 = document.createElement("h2");
  h2.className = "text-neutral-300";
  h2.textContent = name;

  projectTitle.appendChild(h2);

  el.appendChild(projectImage);
  el.appendChild(projectClient);
  el.appendChild(projectTitle);

  el.addEventListener("mouseover", () => {
    projectTitle.style.visibility = "visible"
  })

    el.addEventListener("mouseout", () => {
    projectTitle.style.visibility = "hidden"
  })

  return el;
}
