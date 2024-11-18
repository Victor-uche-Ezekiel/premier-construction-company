"use client"

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

interface MapProps {
  address: string
  zoom?: number
  height?: string
}

export function Map({ address, zoom = 15, height = "400px" }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)
  const markerRef = useRef<google.maps.Marker | null>(null)

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        version: "weekly",
      })

      const { Map } = await loader.importLibrary("maps")
      const { Geocoder } = await loader.importLibrary("geocoding")
      
      const geocoder = new Geocoder()
      
      geocoder.geocode({ address }, async (results, status) => {
        if (status === 'OK' && results && results[0]) {
          const position = results[0].geometry.location
          
          if (!mapInstanceRef.current && mapRef.current) {
            mapInstanceRef.current = new Map(mapRef.current, {
              center: position,
              zoom,
              styles: [
                {
                  featureType: "all",
                  elementType: "geometry",
                  stylers: [{ color: "#242f3e" }]
                },
                {
                  featureType: "all",
                  elementType: "labels.text.stroke",
                  stylers: [{ color: "#242f3e" }]
                },
                {
                  featureType: "all",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#746855" }]
                },
                {
                  featureType: "water",
                  elementType: "geometry",
                  stylers: [{ color: "#17263c" }]
                }
              ]
            })
          }

          if (!markerRef.current && mapInstanceRef.current) {
            const { Marker } = await loader.importLibrary("marker")
            markerRef.current = new Marker({
              map: mapInstanceRef.current,
              position,
              animation: google.maps.Animation.DROP,
            })
          }
        }
      })
    }

    initMap()
  }, [address, zoom])

  return (
    <div 
      ref={mapRef} 
      style={{ 
        width: "100%", 
        height,
        borderRadius: "0.5rem",
      }} 
    />
  )
}
