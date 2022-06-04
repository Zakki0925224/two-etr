export interface PlaceMap {
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
    FEATURECLA: string
    NAME: string
    NAME_EN: string
    NAME_JA: string
    id: number
  }
  
  export interface Geometry {
    type: string
    coordinates: number[]
  }