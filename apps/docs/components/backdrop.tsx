export default function Backdrop({ mode }: { mode: 'light' | 'dark' }) {
  return (
    <div
      style={{
        backgroundImage: `url("/images/wallpapers/${mode}/wallpaper-1.jpg")`,
      }}
      className="fixed inset-0 bg-center bg-no-repeat bg-cover z-[-1]"
    >
      {/* Gaussian blur */}
      <div className="absolute inset-0 backdrop-blur-[120px]"></div>
      {/* Luminosity blend */}
      <div className="absolute inset-0 mix-blend-luminosity wui-mica-background-with-luminosity-opacity"></div>
      {/* Tint/Color blend */}
      <div className="absolute inset-0 mix-blend-color wui-mica-background-with-tint-opacity"></div>
    </div>
  )
}
