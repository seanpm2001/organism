import { ArcRotateCamera, Engine, Scene, Vector3, WebGPUEngine } from '@babylonjs/core'
import './style.css'

async function prepare(canvas: HTMLCanvasElement): Promise<WebGPUEngine> {
  const engine = new WebGPUEngine(canvas)
  await engine.initAsync()

  window.addEventListener('resize', () => {
    engine.resize()
  })

  return engine
}

async function createScene(engine: Engine): Promise<Scene> {
  const scene = new Scene(engine)

  const camera = new ArcRotateCamera('camera', 0, 0, 15, Vector3.Zero(), scene)
  camera.attachControl(engine.getRenderingCanvas(), true)

  return scene
}

async function main() {
  const canvas = document.getElementById('root') as HTMLCanvasElement

  const engine = await prepare(canvas)
  const scene = await createScene(engine)

  engine.runRenderLoop(() => {
    scene.render()
  })
}

main()
