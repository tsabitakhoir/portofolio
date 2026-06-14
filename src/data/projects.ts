export type Project = {
  title: string;
  description: string;
  techStack: string[];
  images: string[];
  viewUrl?: string;
};

export const projects: Project[] = [
  {
    title: "AIRA",
    description:
      "IoT system for monitoring and controlling hospital isolation rooms, built on ESP32 and ThingsBoard. Streams sensor data in real-time via WebSocket to ensure room conditions stay within safe parameters.",
    techStack: ["ESP32", "Arduino", "ThingsBoard", "WebSocket"],
    images: ["/projects/aira.png"],
    // no viewUrl — repo tidak tersedia
  },
  {
    title: "TripPlanner",
    description:
      "Collaborative trip planning platform with AI-powered itinerary generation. Users can create, share, and manage travel plans together in real-time.",
    techStack: ["React", "Express", "Supabase", "Gemini"],
    images: [
      "/projects/tripplaner1.png",
      "/projects/tripplaner2.png",
      "/projects/tripplaner3.png",
      "/projects/tripplaner4.png",
      "/projects/tripplaner5.png",
    ],
    viewUrl: "https://tripplaner.stei.cloud/",
  },
  {
    title: "Pinjemin Aja!",
    description:
      "Peer-to-peer tool lending platform that lets users borrow and lend items within a community — making equipment sharing simple and accessible.",
    techStack: ["React", "TypeScript"],
    images: [
      "/projects/pinjeminaja1.png",
      "/projects/pinjeminaja2.png",
      "/projects/pinjeminaja3.png",
      "/projects/pinjeminaja4.png",
    ],
    viewUrl: "https://github.com/AthallaAnanda/IF2050-2026-K02-G05-PinjeminAja",
  },
];
