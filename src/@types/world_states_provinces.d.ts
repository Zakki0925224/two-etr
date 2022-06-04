export interface PolygonMap {
    type: string
    name: string
    crs: Crs
    features: Feature[]
  }
  
  export interface Crs {
    type: string
    properties: Properties
  }
  
  export interface Properties {
    name: string
  }
  
  export interface Feature {
    type: string
    properties: Properties2
    geometry: Geometry
  }
  
  export interface Properties2 {
    name?: string
    type?: string
    name_en?: string
    name_ja?: string
    id: number
  }
  
  export interface Geometry {
    type: string
    coordinates: number[][][][]
  }
  