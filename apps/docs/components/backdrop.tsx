/** @jsxImportSource @emotion/react */

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
      <div
        className="absolute inset-0 mix-blend-luminosity"
        css={(theme) => ({
          background: theme.wui.colors.mica.base.withLuminosityOpacity,
        })}
      ></div>
      {/* Tint/Color blend */}
      <div
        className="absolute inset-0 mix-blend-color"
        css={(theme) => ({
          background: theme.wui.colors.mica.base.withTintOpacity,
        })}
      ></div>
    </div>
  )
}
