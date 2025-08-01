interface ProjectCellProps {
  title: string;
  tags: string[];
  featured: string;
}

export default function ProjectCell(props: ProjectCellProps) {
  const { title, featured, tags } = props;

  const el = document.createElement("div");

  function ProjectImage(img: string) {
    const el = document.createElement("img");
    el.src = img;
    return el;
  }
  function ProjectImageContainer() {
    const el = document.createElement("div");
    el.className = "w-full";
    el.appendChild(ProjectImage(featured));
    return el;
  }

  function ProjectCellTitle() {
    const el = document.createElement("h2");
    el.className = "text-xl font-bold";
    el.innerHTML = title;
    return el;
  }

  function ProjectCellTag(tag: string) {
    const el = document.createElement("div");
    el.className =
      "w-fit h-fit flex hover:underline cursor-pointer justify-center items-center text-xs rounded hover:text-neutral-300 text-neutral-600";
    el.innerHTML = tag;
    return el;
  }
  function ProjectCellTagsContainer() {
    const el = document.createElement("div");
    el.className = "h-fit flex flex-wrap gap-3 text-xs";
    el.innerHTML = "Tags:"
    for (var item of tags) {
      el.appendChild(ProjectCellTag(item));
    }
    return el;
  }

  function ProjectCellContainer() {
    const el = document.createElement("div");
    el.className = "px-3 py-6 grid gap-3";
    el.appendChild(ProjectCellTitle());
    el.appendChild(ProjectCellTagsContainer());
    return el;
  }

  el.className =
    "grid bg-neutral-900 rounded overflow-auto cursor-pointer transition-all duration-300 ease-in-out hover:scale-102";
  el.appendChild(ProjectImageContainer());
  el.appendChild(ProjectCellContainer());
  return el;
}
