interface HeadManager {
  title: string;
  description: string;
}

export default function headManager(props: HeadManager) {
  const { title, description } = props;
  document.title = title;
  let metaTag = document.createElement("meta");
  metaTag.setAttribute("name", "description");
  metaTag.setAttribute("content", description);
  document.head.appendChild(metaTag);
}
