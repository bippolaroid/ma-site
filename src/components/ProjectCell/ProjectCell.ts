interface ProjectCellProps {
  img: string;
}

export default function ProjectCell(props: ProjectCellProps) {
  const { img } = props;

  const el = document.createElement("div");
  el.className =
    "h-72 rounded-xl overflow-hidden relative flex justify-center hover:scale-102 transition-all duration-300 ease-in-out";

  const projectImage = document.createElement("img");
  projectImage.className = "object-cover w-full h-full";
  projectImage.src = img;

  const projectClient = document.createElement("div");
  projectClient.className =
    "absolute top-0 left-0 m-3 backdrop-blur rounded-xl backdrop-saturate-0 backdrop-invert bg-black/30 w-12 h-12 flex justify-center items-center";
  projectClient.textContent = "B";

  const projectDesc = document.createElement("div");
  projectDesc.className =
    "absolute w-full h-fit min-h-18 flex items-center bottom-0 p-3 backdrop-blur-xl backdrop-saturate-0 backdrop-invert bg-black/30";
  projectDesc.innerHTML = `<h2 class="text-neutral-300">Electric Vehicle Confessions</h2>`;

  el.appendChild(projectImage);
  el.appendChild(projectClient);
  el.appendChild(projectDesc);

  return el;
}
