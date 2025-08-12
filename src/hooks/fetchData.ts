export type ProjectData = {
  id: number;
  client: string;
  client_logo: string;
  title: string;
  featured: string;
};

export default async function fetchData() {
  const res = await fetch("https://cdn.mikeangelo.art/projects.json");
  const data: ProjectData[] = await res.json();
  return data;
}
