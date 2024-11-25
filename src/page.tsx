import { Badge } from "./components/ui/badge";
import { Card } from "./components/ui/card";
import { CircleIcon } from "lucide-react";

const projects = [
  {
    name: "yandex-music-api",
    link: "https://github.com/pank-su/yandex-music-api",
    language: "Kotlin",
  },
];

const timeline = [
  {
    title: "Valdai Robots Internship",
    description: "Worked as a developer in the Valdai Robots team for 6 months, gaining experience in Kotlin and cross-platform development.",
  },
  {
    title: "Started learning UI/UX design",
    description: "Began exploring UI/UX design principles and practices, learning to create user-centered interfaces.",
  },
  {
    title: "Developed Yandex Music API",
    description: "Created a Kotlin-based API for interacting with the Yandex Music platform.",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#FFF5F7] p-6 md:p-12">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Header Section */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Profile Card */}
          <Card className="p-6 flex flex-col items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-lg font-semibold flex-col items-center">
                P
              </div>
              <div>
                <h1 className="text-xl font-semibold text-purple-800">
                  Vasiliy Pankov
                </h1>
                <p className="text-sm text-muted-foreground">
                  Cross-Platform Development, UI/UX Design
                </p>
              </div>
            </div>
          </Card>

          {/* General Info Card */}
          <Card className="bg-pink-50 p-6">
            <h2 className="mb-3 font-mono text-lg font-semibold">General</h2>
            <p className="text-muted-foreground">
              I am a young developer with experience in Kotlin and
              cross-platform development, as well as UI/UX design. Worked in the
              Valdai Robots team for 6 months.
            </p>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, i) => (
            <a href={project.link}>
              <Card
                key={i}
                className={`p-4 ${
                  i % 2 === 0 ? "bg-pink-100" : "bg-purple-100"
                }`}
              >
                <div className="space-y-2">
                  <Badge
                    className={i % 2 === 0 ? "bg-pink-400" : "bg-purple-400"}
                  >
                    {project.language}
                  </Badge>
                  <div className="text-sm">{project.name}</div>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="grid gap-6 md:grid-cols-2">
          {timeline.map((item, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center gap-2">
                <CircleIcon className="h-4 w-4 text-purple-500" />
                <h3 className="font-mono text-lg font-semibold text-purple-800">
                  {item.title}
                </h3>
              </div>
              <p className="pl-6 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-2">
          <a
            href="https://vk.com/pank_su"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Badge variant="outline">VK</Badge>
          </a>
          <a
            href="https://t.me/pank_su"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Badge variant="outline">Telegram</Badge>
          </a>
          <a
            href="https://github.com/pank-su"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Badge variant="outline">GitHub</Badge>
          </a>
        </div>
      </div>
    </main>
  );
}
