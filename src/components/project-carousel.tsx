import React from 'react'
import { Card, CardContent } from "../components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel"
import { Badge } from "../components/ui/badge"

// Dummy data for projects
const projects = [
  { id: 1, name: "E-commerce Platform", language: "JavaScript" },
  { id: 2, name: "Machine Learning Model", language: "Python" },
  { id: 3, name: "Mobile App", language: "React Native" },
  { id: 4, name: "Blockchain Wallet", language: "Solidity" },
  { id: 5, name: "Data Visualization Tool", language: "R" },
  { id: 6, name: "Game Engine", language: "C++" },
  { id: 7, name: "Web Scraper", language: "Go" },
  { id: 8, name: "Chat Application", language: "Node.js" },
]

export default function ProjectCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto"
    >
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-start justify-between p-6">
                  <Badge variant="secondary" className="mb-2">
                    {project.language}
                  </Badge>
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

