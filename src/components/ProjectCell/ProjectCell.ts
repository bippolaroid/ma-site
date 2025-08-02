interface ProjectProps {
  id: number;
  title: string;
  client: string;
  tags: string[];
  src: string;
}

function ProjectImage(src: string) {
  const el = document.createElement("img");
  el.src = src;
  return el;
}

function ProjectImageContainer(src: string) {
  const el = document.createElement("div");
  el.className = "w-full";
  el.appendChild(ProjectImage(src));
  return el;
}

function ProjectTitle(title: string) {
  const el = document.createElement("h2");
  el.className = "text-xl font-bold";
  el.textContent = title;
  return el;
}

function ProjectClient(client: string) {
  const el = document.createElement("div");
  el.className = "text-neutral-500 border-l-3 border-neutral-800 pl-3 text-xs";

  const label = document.createElement("span");

  el.appendChild(label);
  el.textContent = client;
  return el;
}

function ProjectTag(tag: string) {
  const el = document.createElement("div");
  el.className =
    "w-fit h-fit flex underline hover:no-underline cursor-pointer justify-center items-center text-xs rounded hover:text-neutral-300 text-neutral-600";
  el.textContent = tag;
  return el;
}

function ProjectTagContainer(tags: string[]) {
  const el = document.createElement("div");
  el.className = "h-fit flex flex-wrap gap-x-3 gap-y-1 text-xs";
  const label = document.createElement("span");
  label.textContent = "Tags:";
  el.appendChild(label);
  for (var item of tags) {
    el.appendChild(ProjectTag(item));
  }
  return el;
}

function ProjectButton(id: number) {
  const el = document.createElement("a");
  el.href = `./project?id=${id}`;
  el.className =
    "w-fit px-3 py-1 rounded cursor-pointer bg-white text-neutral-800 hover:text-neutral-500 text-xs hover:bg-neutral-800";
  el.textContent = "View Project";
  return el;
}

function ProjectContainer({
  id,
  title,
  client,
  tags,
}: {
  id: number;
  title: string;
  client: string;
  tags: string[];
}) {
  const el = document.createElement("div");
  el.className =
    "p-6 backdrop-blur-3xl backdrop-brightness-50 grid gap-6 h-fit";
  el.appendChild(ProjectClient(client));
  el.appendChild(ProjectTitle(title));
  el.appendChild(ProjectTagContainer(tags));
  el.appendChild(ProjectButton(id));
  return el;
}

export default function ProjectCell(props: ProjectProps) {
  const { id, title, client, src, tags } = props;

  const el = document.createElement("div");
  el.className = "";

  el.className =
    "rounded-xl overflow-auto transition-all duration-500 ease-in-out hover:scale-101";
  el.appendChild(ProjectImageContainer(src));
  el.appendChild(
    ProjectContainer({ id: id, title: title, client: client, tags: tags })
  );
  return el;
}
