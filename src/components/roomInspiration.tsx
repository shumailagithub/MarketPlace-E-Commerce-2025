'use client'

import * as React from "react"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

const rooms = [
  {
    id: 1,
    number: "01",
    type: "Bed Room",
    title: "Inner Peace",
    image: "/Image1.png",
  },
  {
    id: 2,
    number: "02",
    type: "Dining Room",
    title: "Bright Space",
    image: "/image2.png",
  },
  {
    id: 3,
    number: "03",
    type: "Bed Room",
    title: "Natural Comfort",
    image: "/image3.png",
  },
]

export default function RoomInspiration() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-[1fr,2fr]">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="text-muted-foreground mb-6">
            A lot of beautiful prototype of rooms that inspire you
          </p>
          <Button 
            variant="outline" 
            className="w-fit bg-[#B8860B] hover:bg-[#9A7209] text-white border-0"
          >
            Explore More
          </Button>
        </div>
        <div className="relative">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {rooms.map((room) => (
                <CarouselItem key={room.id}>
                  <div className="relative aspect-[4/3]">
                    <img
                      src={room.image}
                      alt={`${room.type} inspiration`}
                      className="object-cover w-full h-full rounded-lg"
                    />
                    <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg max-w-[240px]">
                      <div className="text-sm text-muted-foreground mb-2">
                        {room.number} — {room.type}
                      </div>
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">{room.title}</h2>
                        <Button
                          size="icon"
                          variant="outline"
                          className="bg-[#B8860B] hover:bg-[#9A7209] text-white border-0"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          <div className="flex justify-center gap-2 mt-4">
            {rooms.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  current === index ? "bg-[#B8860B]" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

















